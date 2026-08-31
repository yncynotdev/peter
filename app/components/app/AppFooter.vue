<script setup lang="ts">
import type { NavigationMenuItem, FooterColumn } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Terms of Service",
    to: "/policy/terms-of-service",
    target: "_blank",
  },
  {
    label: "Privacy Policy",
    to: "/policy/privacy-policy",
    target: "_blank",
  },
];

const columns: FooterColumn[] = [
  {
    label: "Contents",
    children: [
      { label: "About", to: "#about" },
      { label: "How It Works?", to: "#how-it-works" },
      { label: "Organizations", to: "#organizations" },
    ],
  },
  {
    label: "Policies",
    children: [
      {
        label: "Terms of Service",
        to: "/policy/terms-of-service",
        target: "_blank",
      },
      {
        label: "Privacy Policy",
        to: "/policy/privacy-policy",
        target: "_blank",
      },
    ],
  },
];
</script>

<template>
  <UFooter :ui="{ root: 'border-muted bg-elevated' }">
    <UFooterColumns :columns="columns">
      <template #right>
        <p class="text-muted text-sm">
          All Rights Reserved. © {{ new Date().getFullYear() }} PETER
        </p>
      </template>
    </UFooterColumns>
  </UFooter>
</template>
