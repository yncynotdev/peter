<script setup lang="ts">
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
  {
    title: "File Exports",
    description: "Generate PDF and Excel reports from attendance records",
    icon: "i-lucide-file-down",
  },
  {
    title: "Centralized System",
    description: "Access attendance data from anywhere through a centralized cloud-based system.",
    icon: "i-lucide-cloud",
  },
];
</script>

<template>
  <UPageSection
    id="about"
    v-reveal
    title="Attendance that feels simple, not intimidating."
    description="PETER helps organizations manage clock-ins, clock-outs, and attendance records while reducing buddy-punching. Face detection is used for attendance verification, and biometric data is not stored."
    :ui="{
      root: 'py-20 sm:py-24 bg-muted/35',
      title: 'font-display font-normal tracking-[-0.02em]',
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(item, index) in capabilities"
        :key="item.title"
        v-reveal="revealAt(index)"
        v-bind="item"
        :ui="{
          root: 'bg-elevated ring ring-muted shadow-lg shadow-default/5',
          title: 'font-display font-normal text-lg',
          description: 'text-toned leading-7',
        }"
      />
    </UPageGrid>
  </UPageSection>
</template>
