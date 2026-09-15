<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const demoUrl = runtimeConfig.public.demoUrl;

const navigation = [
  { label: "Home", to: "/" },
  // { label: "Contact", to: "#contact" },
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

      <UBadge variant="subtle">v0.9.6</UBadge>
    </template>

    <UNavigationMenu :items="navigation" class="hidden md:flex" />

    <template #right>
      <UColorModeButton class="hidden sm:inline-flex" />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']" class="hidden sm:flex">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/yncynotdev/peter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>

      <UButton
        label="Open demo"
        :to="demoUrl"
        target="_blank"
        trailing-icon="i-lucide-external-link"
        class="hidden md:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="navigation" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
