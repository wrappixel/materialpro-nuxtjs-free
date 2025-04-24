<script setup lang="ts">
const title = ref(
  "MaterialPro - Nuxt3 Typescript based Free Admin Dashboard Template"
);
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
      : "MaterialPro - Nuxt3 Typescript based Free Admin Dashboard Template";
  },
});
</script>

<template>
  <v-locale-provider>
    <!-- <Topbar /> -->
    <v-app>
      <LayoutFullMain />
    </v-app>
  </v-locale-provider>
</template>
