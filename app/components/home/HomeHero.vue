<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const runtimeConfig = useRuntimeConfig();
const demoUrl = runtimeConfig.public.demoUrl;

const links = ref<ButtonProps[]>([
  {
    label: "Open demo",
    to: demoUrl,
    target: "_blank",
    trailingIcon: "i-lucide-external-link",
  },
  {
    label: "How it works",
    to: "#how-it-works",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-down",
  },
]);

const ui = {
  //  root: "overflow-hidden",
  container: "min-h-[calc(100vh-var(--ui-header-height))]",
  //  wrapper: "max-w-3xl",
  headline: "font-display text-lg font-normal",
  title: "font-display font-normal tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl",
  description: "text-toned",
  links: "gap-3",
};
</script>

<template>
  <UPageHero
    v-reveal
    as="section"
    headline="PETER"
    title="Modern and friendly attendance with face detection."
    description="PETER simplifies attendance with fast, reliable clock-ins and clock-outs using face-based verification. Built for businesses that wants to migrate from paper-based to reliable and efficient way of recording attendances."
    :links="links"
    :ui="ui"
  >
    <template #top>
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,var(--peter-wash),transparent_34%),radial-gradient(circle_at_84%_18%,var(--peter-wash-strong),transparent_30%)]"
      />
      <HomeHeroCubes />
    </template>
  </UPageHero>
</template>
