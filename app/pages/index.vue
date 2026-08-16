<script setup lang="ts">
const capabilities = [
  {
    title: "Fast clock-in and clock-out",
    description:
      "Employees get a clear, low-friction attendance flow that works without making the moment feel heavy.",
    icon: "i-lucide-timer-reset",
  },
  {
    title: "Face-detection check",
    description:
      "PETER captures a face at attendance time to reduce buddy-punching and other attendance cheating.",
    icon: "i-lucide-scan-face",
  },
  {
    title: "Organization workflow",
    description:
      "A simple structure for teams that need reliable attendance records without a complicated system.",
    icon: "i-lucide-building-2",
  },
  {
    title: "Verified states",
    description:
      "Clear verified and unverified attendance states help admins review records quickly.",
    icon: "i-lucide-badge-check",
  },
];
</script>

<template>
  <UPage>
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,var(--peter-wash),transparent_34%),radial-gradient(circle_at_84%_18%,var(--peter-wash-strong),transparent_30%)]"
      />

      <UContainer
        class="grid min-h-[calc(100vh-var(--ui-header-height))] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28"
      >
        <div class="max-w-3xl">
          <p class="font-display text-lg text-primary">PETER</p>
          <h1
            class="mt-5 max-w-4xl text-5xl font-normal tracking-[-0.03em] text-balance text-highlighted sm:text-6xl lg:text-7xl"
          >
            Modern, friendly attendance with face detection.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-toned sm:text-xl">
            PETER helps teams clock in and out faster while capturing faces only to prevent
            attendance cheating. It does not store biometrics.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <UButton
              size="xl"
              label="Open demo"
              to="https://example.com"
              target="_blank"
              trailing-icon="i-lucide-external-link"
            />
            <UButton
              size="xl"
              label="How it works"
              to="#about"
              color="neutral"
              variant="subtle"
              trailing-icon="i-lucide-arrow-down"
            />
          </div>
        </div>

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
                <div class="rounded-2xl bg-elevated p-4 ring ring-muted">
                  <p class="text-sm text-muted">Biometrics</p>
                  <p class="mt-1 font-medium text-highlighted">Not stored</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <UPageSection
      id="about"
      title="Attendance that feels simple, not intimidating."
      description="PETER helps organizations run attendance faster while reducing buddy-punching and other attendance cheating. Faces are captured for attendance verification only, and PETER does not store biometric data."
      :ui="{ root: 'py-20 sm:py-24', title: 'font-display font-normal tracking-[-0.02em]' }"
    >
      <UPageGrid>
        <UPageCard
          v-for="item in capabilities"
          :key="item.title"
          v-bind="item"
          :ui="{
            root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5',
            title: 'font-display font-normal text-lg',
            description: 'text-toned leading-7',
          }"
        />
      </UPageGrid>
    </UPageSection>

    <UPageCTA
      title="Ready for a friendlier attendance workflow?"
      description="Try the demo and see the clock-in flow without biometric storage claims or surveillance-heavy language."
      :links="[
        {
          label: 'Open demo',
          to: 'https://example.com',
          target: '_blank',
          trailingIcon: 'i-lucide-external-link',
        },
      ]"
      :ui="{
        root: 'bg-elevated ring ring-muted',
        title: 'font-display font-normal tracking-[-0.02em]',
      }"
    />
  </UPage>
</template>
