<script setup lang="ts">
const steps = [
  {
    title: "Take a picture",
    description: "The employee takes a face photo using the attendance camera.",
    icon: "i-lucide-camera",
  },
  {
    title: "Choose clock in or out",
    description: "They choose whether they are clocking in or clocking out.",
    icon: "i-lucide-log-in",
  },
  {
    title: "Submit attendance",
    description: "PETER records the attendance and marks whether the attempt was verified.",
    icon: "i-lucide-send",
  },
];
</script>

<template>
  <UPageSection
    id="how-it-works"
    v-reveal
    title="How it works"
    description="A simple three-step process for recording attendance."
    :ui="{
      root: 'py-16 sm:py-20 bg-muted/35',
      title: 'font-display font-normal tracking-[-0.02em]',
    }"
  >
    <div class="grid gap-4 lg:grid-cols-3">
      <UCard
        v-for="(step, index) in steps"
        :key="step.title"
        v-reveal="revealAt(index)"
        :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5' }"
      >
        <div class="flex items-start gap-4">
          <div
            class="grid size-12 shrink-0 place-items-center rounded-2xl bg-accented text-primary ring ring-muted"
          >
            <UIcon :name="step.icon" class="size-6" />
          </div>
          <div>
            <p class="font-display text-xs text-primary">Step {{ index + 1 }}</p>
            <h3 class="mt-2 font-display text-base font-normal text-highlighted">
              {{ step.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-toned">
              {{ step.description }}
            </p>
          </div>
        </div>
      </UCard>
    </div>

    <video
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      class="bg-elevated rin ring-muted shadow-lg shadow-default/5"
    >
      <source src="/clip/attendance-demo.mp4" type="video/mp4" />
    </video>
  </UPageSection>
</template>
