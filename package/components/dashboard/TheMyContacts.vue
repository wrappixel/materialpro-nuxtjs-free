<script setup lang="ts">
import { ref } from "vue";
import img1 from '/images/profile/1.jpg';
import img2 from '/images/profile/2.jpg';
import img3 from '/images/profile/3.jpg';
import img4 from '/images/profile/4.jpg';
const myContactsData = ref([
  {
    title: "Pavan Kumar",
    avatar: img1,
    avatarstatus: "success",
    desc: "info@wrappixel.com",
  },
  {
    title: "Sonu Nigam",
    avatar: img2,
    avatarstatus: "error",
    desc: "pamela1987@gmail.com",
  },
  {
    title: "Arijit singh",
    avatar: img3,
    avatarstatus: "warning",
    desc: "cruise1298.fiplip@gmail.com",
  },
  {
    title: "Pavan Kumar",
    avatar: img4,
    avatarstatus: "success",
    desc: "kat@gmail.com",
  },
]);
function href() {
  return undefined;
}
</script>
<template>
  <VCard elevation="10" class="overflow-hidden">
    <v-card-text class="pa-0">
      <div class="bg-primary pa-5">
        <h2 class="text-h5 mb-1">My Contacts</h2>
        <h5 class="text-subtitle-1">Checkout my contacts here</h5>
      </div>

      <div class="pa-6">
        <v-list>
          <v-list-item v-for="(item, i) in myContactsData" :key="i" @click="href">
            <v-list-item-title>
              <div class="d-flex align-center py-3">
                <div class="mr-3">
                  <v-badge bordered bottom :color="item.avatarstatus" dot offset-x="0" offset-y="0">
                    <v-avatar size="40">
                      <img :src="item.avatar" :alt="item.title" width="40" />
                    </v-avatar>
                  </v-badge>
                </div>
                <div class="mx-3">
                  <h4 class="text-h6 mt-n1 mb-1">{{ item.title }}</h4>
                  <div class="truncate-text text-subtitle-2 textSecondary">{{ item.desc }}</div>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </VCard>
</template>
