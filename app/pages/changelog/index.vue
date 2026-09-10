<script setup lang="ts">
const items = ref([
  {
    date: "September 10, 2026",
    title: "Improve Infrastructure and Revamped Icon",
    description:
      " Improved PETER’s infrastructure with CI/CD, unit and E2E testing, and a more reliable development workflow, alongside minor fixes and refinements. ",
    thumbnail: "/thumbnail/v0.9.5.png",
    to: "/changelog/improve-infrastructure",
  },
  {
    date: "September 01, 2026",
    title: "Legacy Integration Complete",
    description:
      "Completed the transition from PETER's legacy implementation to its new infrastructure and system architecture.",
    thumbnail: "/thumbnail/v0.9.4.png",
    to: "/changelog/legacy-integration-complete",
  },
]);
</script>

<template>
  <UPage>
    <UPageHero
      title="Changelog"
      description="Follow the latest updates and improvements of PETER"
      :ui="{
        title: 'font-display',
      }"
    />

    <UPageBody :ui="{ base: 'mx-auto max-w-6xl px-6 py-16' }">
      <UTimeline
        :items="items"
        :default-value="1"
        size="xs"
        :ui="{
          title: 'sm:text-md md:text-lg lg:text-xl font-display ',
          description: 'sm:text-sm md:text-md lg:text-lg',
          date: 'sm:text-xs/5 md:text-sm/5 lg:text-md/5 text-black-500',
        }"
      >
        <template #description="{ item }">
          <span>
            {{ item.description }}
            <NuxtLink :to="item.to">
              <NuxtImg :src="item.thumbnail" class="mt-4 rounded-md" />
            </NuxtLink>
          </span>
        </template>
      </UTimeline>
    </UPageBody>
  </UPage>
</template>
