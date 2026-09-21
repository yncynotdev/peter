<script setup lang="ts">
const organizations = [
  {
    name: "Immaculate Conception Seminary",
    logo: "/orgs/ics-logo.jpeg",
  },
];
</script>

<template>
  <UPageSection
    id="organizations"
    v-reveal
    title="Organizations Using PETER"
    description="PETER is currently being used by organizations to manage attendance."
    :ui="{
      root: 'py-16 sm:py-20 bg-muted/35',
      title: 'font-display font-normal tracking-[-0.02em]',
    }"
  >
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="(organization, index) in organizations"
        :key="organization.name"
        v-reveal="revealAt(index)"
        :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5' }"
      >
        <div class="flex items-center gap-4">
          <NuxtImg
            :src="organization.logo"
            :alt="`${organization.name} logo`"
            class="size-16 rounded-2xl bg-default object-contain p-2 ring ring-muted"
          />
          <p class="font-display text-sm text-highlighted">{{ organization.name }}</p>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
