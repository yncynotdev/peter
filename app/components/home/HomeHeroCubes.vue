<script setup lang="ts">
import * as THREE from "three";
import type { WebGLRenderer } from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

const host = useTemplateRef<HTMLDivElement>("host");
const colorMode = useColorMode();

const CUBES = [
  { fx: -0.96, fy: 0.72, size: 0.42, spin: 0.26 },
  { fx: 0.98, fy: -0.36, size: 0.92, spin: -0.17 },
  { fx: -0.44, fy: -0.78, size: 0.32, spin: 0.36 },
  { fx: 0.42, fy: 0.82, size: 0.38, spin: -0.17 },
];

const COLORS = {
  dark: 0x9ccfd8,
  light: 0x56949f,
};

const THEMES = {
  dark: {
    color: COLORS.dark,
    edge: COLORS.dark,
    blending: THREE.AdditiveBlending,
    opacity: 0.12,
    emissiveIntensity: 0.4,
    depthWrite: false,
    bloom: 0.9,
  },
  light: {
    color: COLORS.light,
    edge: 0x286983,
    blending: THREE.NormalBlending,
    opacity: 0.9,
    emissiveIntensity: 0,
    depthWrite: true,
    bloom: 0,
  },
};

const VIEW_WIDTH = 6;

let teardown = () => {};

onMounted(async () => {
  const el = host.value;
  if (!el) return;

  if (!THREE) return;

  let renderer: WebGLRenderer;

  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
  } catch {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);

  scene.add(new THREE.AmbientLight(0xffffff, 1.3));

  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.position.set(-3, 4, 5);
  scene.add(key);

  renderer.setClearColor(0x000000, 0);

  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.9, 0.5, 0.15);

  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const edgeGeometry = new THREE.EdgesGeometry(geometry);

  const cubes = CUBES.map((spec) => {
    const material = new THREE.MeshStandardMaterial({
      color: COLORS.dark,
      roughness: 0.45,
      emissive: COLORS.dark,
      emissiveIntensity: 0.05,
      transparent: true,
      opacity: 0.05,
      depthWrite: false,
      metalness: 0.05,
    });

    const mesh = new THREE.Mesh(geometry, material);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: COLORS.dark });

    mesh.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
    mesh.rotation.set(0.5, -0.6, 0.15);

    scene.add(mesh);

    return { spec, mesh, material, edgeMaterial };
  });

  const updateColor = () => {
    const t = colorMode.value === "dark" ? THEMES.dark : THEMES.light;

    for (const { material, edgeMaterial } of cubes) {
      material.color.setHex(t.color);
      material.emissive.setHex(t.color);
      material.emissiveIntensity = t.emissiveIntensity;
      material.opacity = t.opacity;
      material.blending = t.blending;
      material.depthWrite = t.depthWrite;
      material.needsUpdate = true;

      edgeMaterial.color.setHex(t.edge);
      edgeMaterial.blending = t.blending;
      edgeMaterial.needsUpdate = true;
    }

    bloom.strength = t.bloom;
    bloom.enabled = t.bloom > 0;

    if (!running) {
      composer.render();
    }
  };

  const layout = () => {
    const { clientWidth: w, clientHeight: h } = el;

    if (!w || !h) return;

    camera.aspect = w / h;

    const halfFov = (camera.fov * Math.PI) / 360;

    camera.position.z = VIEW_WIDTH / 2 / (Math.tan(halfFov) * camera.aspect);

    camera.updateProjectionMatrix();

    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w, h);

    const halfWidth = VIEW_WIDTH / 2;
    const halfHeight = halfWidth / camera.aspect;

    const stacked = camera.aspect < 1.2;
    const spread = stacked ? 0.92 : 0.8;
    const shrink = stacked ? 0.55 : 1;

    for (const { spec, mesh } of cubes) {
      mesh.position.set(spec.fx * spread * halfWidth, spec.fy * spread * halfHeight, 0);

      mesh.scale.setScalar(spec.size * shrink);
    }
  };

  const setTime = (t: number) => {
    for (const [i, { spec, mesh }] of cubes.entries()) {
      mesh.rotation.set(0.35 + Math.sin(t * spec.spin + i) * 0.4, t * spec.spin + i, 0.15);
    }
  };

  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // THREE.Clock is deprecated in newer Three.js versions.
  const timer = new THREE.Timer();

  let running = false;
  let frame = 0;

  const draw = () => {
    if (!running) return;

    frame = requestAnimationFrame(draw);

    timer.update();

    setTime(timer.getElapsed());
    // renderer.render(scene, camera);
    composer.render();
  };

  const animate = (on: boolean) => {
    if (still || on === running) return;

    running = on;

    if (on) {
      timer.connect(document);
      draw();
    } else {
      cancelAnimationFrame(frame);
      frame = 0;
      timer.disconnect();
    }
  };

  layout();
  updateColor();

  if (still) {
    setTime(0);
    composer.render();
  } else {
    animate(true);
  }

  const resize = new ResizeObserver(() => {
    layout();

    if (!running) {
      composer.render();
    }
  });

  resize.observe(el);

  const visible = new IntersectionObserver(([entry]) => {
    animate(entry.isIntersecting);
  });

  visible.observe(el);

  const stopColorWatch = watch(() => colorMode.value, updateColor);

  teardown = () => {
    running = false;

    cancelAnimationFrame(frame);

    stopColorWatch();

    timer.disconnect();

    resize.disconnect();
    visible.disconnect();

    geometry.dispose();
    edgeGeometry.dispose();

    for (const { material, edgeMaterial } of cubes) {
      material.dispose();
      edgeMaterial.dispose();
    }

    renderer.dispose();
    composer.dispose();
    renderer.domElement.remove();
  };
});

onBeforeUnmount(() => teardown());
</script>

<template>
  <div ref="host" class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
</template>
