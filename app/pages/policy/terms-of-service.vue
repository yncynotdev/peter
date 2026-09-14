<script setup>
import content from "./terms-of-service.md?raw";

definePageMeta({
  layout: "policy",
});
</script>

<template>
  <UPageCard :ui="{ root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5 p-7' }">
    <Markdown>{{ content }}</Markdown>
  </UPageCard>
</template>
