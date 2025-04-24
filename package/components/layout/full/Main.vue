<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from "vue";
import sidebarItems from "@/components/layout/full/vertical-sidebar/sidebarItem";
import { Icon } from "@iconify/vue";
import { LayoutFullLogo } from "#components";
import { useDisplay } from "vuetify";
import SidebarProfile from "./vertical-header/SidebarProfile.vue";
import Topbar from "./Topbar.vue";
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
const { mdAndDown } = useDisplay();
onMounted(() => {
  sDrawer.value = !mdAndDown.value; // hide on mobile, show on desktop
});
watch(mdAndDown, (val) => {
  sDrawer.value = !val;
});
</script>

<template>
  <Topbar />
  <!------Header-------->
  <v-app-bar elevation="0" height="70" class="top-header bg-primary px-6">
    <div class="d-flex align-center justify-space-between w-100">
      <div class="d-flex ga-lg-16 ga-3 align-center">
        <LayoutFullLogo class="d-sm-flex d-none" />
        <v-btn
          class="hidden-lg-and-up"
          @click="sDrawer = !sDrawer"
          rounded="pill"
          height="40"
          width="40"
        >
          <Icon icon="solar:list-bold" height="22" />
        </v-btn>

        <v-btn rounded="pill" class="ms-lg-6 pa-0" height="40" width="40">
          <Icon icon="solar:bell-linear" height="20" width="20" />
        </v-btn>
      </div>
      <div>
        <!-- Upgrade button -->
        <v-btn
          class="mr-2 bg-success"
          rounded="pill"
          href="https://www.wrappixel.com/templates/materialpro-nuxtjs/?ref=376#demos"
          target="_blank"
          >Check Pro Template</v-btn
        >
        <!-- User Profile -->
        <LayoutFullVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>

  <v-main>
    <!------Sidebar-------->
    <v-navigation-drawer
      left
      elevation="0"
      app
      class="leftSidebar"
      v-model="sDrawer"
      width="270"
    >
      <!-- ---------------------------------------------- -->
      <!---Navigation -->
      <!-- ---------------------------------------------- -->

      <perfect-scrollbar class="scrollnavbar">
        <div class="profile">
          <div class="profile-img py-10 px-3">
            <v-avatar size="50">
              <img src="/images/users/user-1.jpg" width="50" alt="user" />
            </v-avatar>
          </div>
          <div class="profile-name d-flex align-center px-4">
            <div class="profile-logout w-100">
              <SidebarProfile />
            </div>
          </div>
        </div>
        <v-list class="px-4 py-4">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu">
            <!---Item Sub Header -->
            <LayoutFullVerticalSidebarNavGroup
              :item="item"
              v-if="item.header"
              :key="item.title"
            />

            <!---If Has Child -->
            <LayoutFullVerticalSidebarNavCollapse
              class="leftPadding"
              :item="item"
              :level="0"
              v-else-if="item.children"
            />

            <!---Single Item-->
            <LayoutFullVerticalSidebarNavItem
              :item="item"
              v-else
              class="leftPadding"
            />
            <!---End Single Item-->
          </template>
        </v-list>
        <div>
          <LayoutFullVerticalSidebarExtraBox />
        </div>
      </perfect-scrollbar>
    </v-navigation-drawer>

    <v-container fluid class="page-wrapper">
      <div class="maxWidth">
        <NuxtPage />
      </div>
    </v-container>
  </v-main>
</template>
