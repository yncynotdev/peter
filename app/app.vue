<script setup lang="ts">
const navigation = [
  { label: "About", to: "#about" },
  { label: "How It Works?", to: "#how-it-works" },
  { label: "Organizations", to: "#organizations" },
];
</script>

<template>
  <UApp>
    <UHeader :ui="{ root: 'bg-default/85 backdrop-blur border-muted' }">
      <template #title>
        <NuxtLink to="/" class="font-display text-xl tracking-tight text-highlighted">
          PETER
        </NuxtLink>
      </template>

      <UNavigationMenu :items="navigation" class="hidden md:flex" />

      <template #right>
        <UColorModeButton />
        <UButton
          label="Open demo"
          to="https://example.com"
          target="_blank"
          trailing-icon="i-lucide-external-link"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="navigation" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter :ui="{ root: 'border-muted' }">
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} PETER. Attendance without biometric storage.
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
