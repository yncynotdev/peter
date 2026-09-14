<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const demoUrl = runtimeConfig.public.demoUrl;
</script>

<template>
  <UPageCTA
    v-reveal
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
</template>
