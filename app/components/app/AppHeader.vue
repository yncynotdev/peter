<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const demoUrl = runtimeConfig.public.demoUrl;

const navigation = [
  { label: "About", to: "/#about" },
  { label: "How It Works?", to: "/#how-it-works" },
  { label: "Organizations", to: "/#organizations" },
  { label: "Changelog", to: "/changelog" },
];
</script>

<template>
  <UHeader :ui="{ root: 'bg-elevated backdrop-blur border-muted' }">
    <template #title>
      <div class="flex flew-row items-center gap-2.5">
        <NuxtImg src="/icon.png" class="size-7.5" />

        <NuxtLink to="/" class="font-display text-xl tracking-tight text-highlighted">
          PETER
        </NuxtLink>
      </div>
    </template>

    <UNavigationMenu :items="navigation" class="hidden md:flex" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Open demo"
        :to="demoUrl"
        target="_blank"
        trailing-icon="i-lucide-external-link"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="navigation" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
