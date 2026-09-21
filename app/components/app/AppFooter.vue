<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui";

const columns: FooterColumn[] = [
  {
    label: "Contents",
    children: [
      { label: "About", to: "/#about" },
      { label: "How It Works?", to: "/#how-it-works" },
      { label: "Organizations", to: "/#organizations" },
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
          All Rights Reserved. © {{ new Date().getFullYear() }} yncynotdev
          <br />
          PETER · Made possible with the support of Rom Jerico Reyes
        </p>

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/yncynotdev/peter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>
    </UFooterColumns>
  </UFooter>
</template>
