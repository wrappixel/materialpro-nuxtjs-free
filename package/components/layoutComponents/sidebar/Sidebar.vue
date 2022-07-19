<script setup lang="ts">
import { ref, watch } from "vue";
import sidebarItems from "./sidebarItems";

const sidebarMenu = ref(sidebarItems);
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div class="scrollnavbar">
      <div class="profile">
        <div class="profile-pic">
          <v-avatar size="45">
            <img src="/images/users/user2.jpg" width="50" alt="Julia" />
          </v-avatar>
        </div>
        <div class="profile-name">
          <h5>Jonathan Deo</h5>
        </div>
      </div>
      <v-list class="pa-4">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!-- ---------------------------------------------- -->
          <!---Single Item-->
          <!-- ---------------------------------------------- -->
          <v-list-item :to="item.to" rounded="lg" class="mb-1">
            <v-list-item-avatar start class="v-list-item-avatar--start">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <div class="pa-4 ma-4 bg-light-primary rounded-lg text-center">
        <img src="/images/sidebar-buynow-bg.svg" />
        <h4 class="font-weight-regular mb-3">Get Template for Free</h4>
        <v-btn
          class="mb-2"
          href="https://www.wrappixel.com/templates/materialpro-free-nuxtjs-admin-template/"
          block
          >Download Free</v-btn
        >
        <v-btn
          color="primary"
          href="https://www.wrappixel.com/templates/materialpro-nuxtjs/"
          block
          >Check Pro</v-btn
        >
      </div>
    </div>
  </div>
</template>
