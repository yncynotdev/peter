<script setup>
import content from "./improve-infrastructure.md?raw";

definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard
    :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-4 sm:p-4 md:p-7' }"
  >
    <Markdown>{{ content }}</Markdown>
  </UPageCard>
</template>
