<script setup lang="ts">
import BaseCard from "@/components/pages/BaseCard.vue";
import ButtonsDefault from "@/components/pages/buttons/ButtonsDefault.vue";
import ButtonsOutlined from "@/components/pages/buttons/ButtonsOutlined.vue";
import ButtonsBlock from "@/components/pages/buttons/ButtonsBlock.vue";
import ButtonsIcon from "@/components/pages/buttons/ButtonsIcon.vue";
import ButtonsRounded from "@/components/pages/buttons/ButtonsRounded.vue";
import ButtonsSizing from "@/components/pages/buttons/ButtonsSizing.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12">
      <BaseCard heading="Default">
        <ButtonsDefault />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12">
      <BaseCard heading="Outlined">
        <ButtonsOutlined />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4">
      <BaseCard heading="Block">
        <ButtonsBlock />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Icons">
        <ButtonsIcon />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <BaseCard heading="Rounded">
        <ButtonsRounded />
      </BaseCard>
    </v-col>

    <v-col cols="12" sm="12" class="d-flex align-items-stretch">
      <BaseCard heading="Button Size">
        <ButtonsSizing />
      </BaseCard>
    </v-col>
  </v-row>
</template>
