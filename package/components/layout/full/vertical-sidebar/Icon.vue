<script setup>
const props = defineProps({ item: Object, level: Number });
import { Icon } from '@iconify/vue';
</script>

<template>
  <template v-if="level > 0">
    <component
      :is="item"
      size="14"
      stroke-width="1.5"
      class="iconClass"
    ></component>
  </template>
  <template v-else>
    <!-- <component
      :is="item"
      size="20"
      stroke-width="1.5"
      class="iconClass"
    ></component> -->
    <Icon  :icon="'solar:' + item" height="19" width="19"   :class="'position-relative z-index-2 '" />
  </template>
</template>
