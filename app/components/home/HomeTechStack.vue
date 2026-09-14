<script setup lang="ts">
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
  <UPageSection
    id="powered-by"
    v-reveal
    title="Powered by"
    description="Built with modern technologies and infrastructure."
    :ui="{ root: 'py-16 sm:py-20', title: 'font-display font-normal tracking-[-0.02em]' }"
  >
    <UPageGrid>
      <UCard
        v-for="(stack, index) in techstack"
        :key="stack.name"
        v-reveal="revealAt(index)"
        :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5' }"
      >
        <div class="flex items-center gap-4">
          <UIcon :name="stack.icon" class="size-16 rounded-2xl object-contain p-2" />
          <div>
            <p class="font-display text-sm text-highlighted">{{ stack.name }}</p>
            <p class="mt-1 text-sm text-muted">{{ stack.description }}</p>
          </div>
        </div>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
