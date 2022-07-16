<script setup lang="ts">
import { ref } from "vue";

import BaseCard from "@/components/pages/BaseCard.vue";

import CardsProps from "@/components/pages/cards/CardsProps.vue";
import CardsSlots from "@/components/pages/cards/CardsSlots.vue";
import CardsContentWrap from "@/components/pages/cards/CardsContentWrap.vue";
import CardsMedia from "@/components/pages/cards/CardsMedia.vue";
import CardsWeather from "@/components/pages/cards/CardsWeather.vue";
import CardsTwitter from "@/components/pages/cards/CardsTwitter.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Props">
        <CardsProps />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="With Slots">
        <CardsSlots />
      </BaseCard>
    </v-col>
    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Content Wrap">
        <CardsContentWrap />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Card Media">
        <CardsMedia />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6" class="d-flex align-items-stretch">
      <BaseCard heading="Weather Card">
        <CardsWeather />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="6">
      <BaseCard heading="Twitter Card">
        <CardsTwitter />
      </BaseCard>
    </v-col>
  </v-row>
</template>
