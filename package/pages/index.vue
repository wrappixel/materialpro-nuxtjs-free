<script setup lang="ts">
import SalesOverview from "~~/components/dashboard/salesOverview/SalesOverview.vue";
import ProfileCard from "~~/components/dashboard/profile/ProfileCard.vue";
import MyContacts from "~~/components/dashboard/contacts/MyContacts.vue";
import Timeline from "../components/dashboard/timeline/Timeline.vue";
import Blog from "../components/dashboard/blog/Blog.vue";
</script>

<template>
  <v-row>
    <v-col cols="12" sm="12" lg="8"> <SalesOverview /></v-col>
    <v-col cols="12" sm="12" lg="4"><Blog /></v-col>
    <v-col cols="12" sm="12" lg="4">
      <ProfileCard />
      <div class="mb-7"></div>
      <MyContacts />
    </v-col>
    <v-col cols="12" sm="12" lg="8"><Timeline /></v-col>
  </v-row>
</template>
