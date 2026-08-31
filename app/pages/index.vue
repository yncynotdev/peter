<script setup lang="ts">
import icsLogo from "~/assets/img/orgs/ics-logo.jpeg";

const runtimeConfig = useRuntimeConfig();
const demoUrl = runtimeConfig.public.demoUrl;

const capabilities = [
  {
    title: "Fast clock-in and clock-out",
    description:
      "A straightforward attendance flow that lets employees clock in and out with minimal steps.",
    icon: "i-lucide-timer-reset",
  },
  {
    title: "Face-detection check",
    description:
      "A face check helps verify who is clocking in and reduces buddy-punching and other attendance fraud.",
    icon: "i-lucide-scan-face",
  },
  {
    title: "Organization workflow",
    description:
      "Attendance records are organized around the schedules, members, and workflows of each organization.",
    icon: "i-lucide-building-2",
  },
  {
    title: "Verified states",
    description:
      "Clear attendance statuses make it easier for administrators to review and manage records.",
    icon: "i-lucide-badge-check",
  },
];

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

const organizations = [
  {
    name: "Immaculate Conception Seminary",
    logo: icsLogo,
  },
];

const techstack = [
  {
    name: "Nuxt",
    icon: "simple-icons:nuxt",
    description: "A full-stack Vue framework for building fast, modern web applications.",
  },
  {
    name: "Hono",
    icon: "simple-icons:hono",
    description: "A lightweight web framework built for fast APIs across modern runtimes.",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    description: "Strongly typed JavaScript for reliable and maintainable applications.",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    description:
      "A powerful relational database for storing PETER's attendance and organizational data.",
  },
  {
    name: "Cloudflare",
    icon: "simple-icons:cloudflare",
    description: "Global infrastructure for running PETER close to the organizations it serves.",
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
            PETER simplifies attendance with fast, reliable clock-ins and clock-outs using
            face-based verification — without storing biometric data.
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <UButton
              size="xl"
              label="Open demo"
              :to="demoUrl"
              target="_blank"
              trailing-icon="i-lucide-external-link"
            />
            <UButton
              size="xl"
              label="How it works"
              to="#how-it-works"
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
      description="PETER helps organizations manage clock-ins, clock-outs, and attendance records while reducing buddy-punching. Face detection is used for attendance verification, and biometric data is not stored."
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

    <UPageSection
      id="how-it-works"
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
    </UPageSection>

    <UPageSection
      id="organizations"
      title="Organizations Using PETER"
      description="PETER is currently being used by organizations to manage attendance."
      :ui="{ root: 'py-16 sm:py-20', title: 'font-display font-normal tracking-[-0.02em]' }"
    >
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="organization in organizations"
          :key="organization.name"
          :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5' }"
        >
          <div class="flex items-center gap-4">
            <img
              :src="organization.logo"
              :alt="`${organization.name} logo`"
              class="size-16 rounded-2xl bg-default object-contain p-2 ring ring-muted"
            />
            <div>
              <p class="font-display text-sm text-highlighted">{{ organization.name }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="powered-by"
      title="Powered by"
      description="Built with modern technologies and infrastructure."
      :ui="{ root: 'py-16 sm:py-20', title: 'font-display font-normal tracking-[-0.02em]' }"
    >
      <UPageGrid>
        <UCard
          v-for="stack in techstack"
          :key="stack.name"
          :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5' }"
        >
          <div class="flex items-center gap-4">
            <UIcon
              :name="stack.icon"
              :alt="`${stack.name} logo`"
              class="size-16 rounded-2xl object-contain p-2"
            />
            <div>
              <p class="font-display text-sm text-highlighted">{{ stack.name }}</p>
              <p class="mt-1 text-sm text-muted">{{ stack.description }}</p>
            </div>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>

    <UPageCTA
      title="See PETER in action"
      description="Explore the demo and see how PETER handles the attendance workflow."
      :links="[
        {
          label: 'Open demo',
          to: demoUrl,
          target: '_blank',
          trailingIcon: 'i-lucide-external-link',
        },
      ]"
      :ui="{
        root: 'bg-elevated/50 ring ring-muted',
        title: 'font-display font-normal tracking-[-0.02em]',
      }"
    />
  </UPage>
</template>
