<script setup lang="ts">
const props = defineProps({
  heading: String,
});
</script>

<template>
  <v-card>
    <v-toolbar color="transparent">
      <v-toolbar-title class="font-weight-medium">
        {{ heading }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="pa-5">
      <slot />
    </div>
  </v-card>
</template>
