<script setup lang="ts">
import { ref } from "vue";
const messages = ref([
  {
    title: "Pavan Kumar",
    avatar: "1.jpg",
    avatarstatus: "success",
    desc: "info@wrappixel.com",
  },
  {
    title: "Sonu Nigam",
    avatar: "2.jpg",
    avatarstatus: "error",
    desc: "pamela1987@gmail.com",
  },
  {
    title: "Arijit singh",
    avatar: "3.jpg",
    avatarstatus: "warning",
    desc: "cruise1298.fiplip@gmail.com",
  },
  {
    title: "Pavan Kumar",
    avatar: "4.jpg",
    avatarstatus: "success",
    desc: "kat@gmail.com",
  },
]);
function href() {
  return undefined;
}
</script>
<template>
  <v-card>
    <v-card-text class="pa-0">
      <div class="bg-primary pa-5">
        <h2 class="">My Contacts</h2>
        <h5 class="font-weight-light">Checkout my contacts here</h5>
      </div>

      <div class="pa-4">
        <v-list>
          <v-list-item v-for="(item, i) in messages" :key="i" @click="href">
            <v-list-item-title>
              <div class="d-flex align-center py-3">
                <div class="mr-3">
                  <v-badge
                    bordered
                    bottom
                    :color="item.avatarstatus"
                    dot
                    offset-x="0"
                    offset-y="0"
                  >
                    <v-avatar size="40">
                      <img
                        :src="`/images/users/${item.avatar}`"
                        :alt="item.title"
                        width="40"
                      />
                    </v-avatar>
                  </v-badge>
                </div>
                <div class="mx-3">
                  <h4 class="font-weight-medium">{{ item.title }}</h4>
                  <h6 class="truncate-text">{{ item.desc }}</h6>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>
