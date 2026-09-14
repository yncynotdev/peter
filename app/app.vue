<template>
  <!-- reduced-motion="user" makes every motion element honour prefers-reduced-motion. -->
  <MotionConfig reduced-motion="user">
    <UApp>
      <AppHeader />

      <UMain class="flex-1">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <AppFooter />
    </UApp>
  </MotionConfig>
</template>
