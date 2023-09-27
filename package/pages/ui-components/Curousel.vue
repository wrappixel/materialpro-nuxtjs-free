<script setup>
import UiChildCard from '@/components/shared/UiChildCard.vue';
const model = ref(0);
const colors = ref([
  "primary",
  "secondary",
  "info",
  "error",
  "warning",
]);
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12">
      <UiChildCard title="Curousel">
        <v-card elevation="10" rounded="md">
          <v-carousel v-model="model" rounded="md">
            <v-carousel-item v-for="(color, i) in colors" :key="i">
              <v-sheet :color="color" height="100%" tile>
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h2">Slide {{ i + 1 }}</div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </UiChildCard>
    </v-col>
  </v-row>
</template>
