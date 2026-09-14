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
  root: "overflow-hidden",
  container:
    "min-h-[calc(100vh-var(--ui-header-height))] items-center gap-12 py-20 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28",
  wrapper: "max-w-3xl",
  headline: "font-display text-lg font-normal",
  title: "font-display font-normal tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl",
  description: "max-w-2xl text-toned",
  links: "gap-3",
};
</script>

<template>
  <UPageHero
    v-reveal
    as="section"
    headline="PETER"
    title="Modern, friendly attendance with face detection."
    description="PETER simplifies attendance with fast, reliable clock-ins and clock-outs using face-based verification — without storing biometric data."
    :links="links"
    orientation="horizontal"
    :ui="ui"
  >
    <template #top>
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,var(--peter-wash),transparent_34%),radial-gradient(circle_at_84%_18%,var(--peter-wash-strong),transparent_30%)]"
      />
    </template>

    <div class="relative mx-auto w-full max-w-lg">
      <div class="absolute -inset-5 rounded-4xl bg-elevated/70 blur-2xl" />
      <div
        class="relative rounded-[1.75rem] bg-elevated p-4 shadow-2xl shadow-default/10 ring ring-default"
      >
        <div class="rounded-[1.35rem] bg-default p-5 ring ring-muted">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="font-display text-sm text-highlighted">Clock in</p>
              <p class="mt-1 text-sm text-muted">Today · Main office</p>
            </div>
            <UBadge color="success" variant="soft" label="Verified" icon="i-lucide-check" />
          </div>

          <div
            class="mt-8 grid place-items-center rounded-[1.25rem] bg-muted/45 p-10 ring ring-muted"
          >
            <div
              class="relative grid size-44 place-items-center rounded-full bg-elevated ring ring-accented"
            >
              <div class="absolute inset-5 rounded-full border border-dashed border-accented" />
              <UIcon name="i-lucide-scan-face" class="size-16 text-primary" />
            </div>
          </div>

          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl bg-elevated p-4 ring ring-muted">
              <p class="text-sm text-muted">Employee</p>
              <p class="mt-1 font-medium text-highlighted">Ready to clock in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageHero>
</template>
