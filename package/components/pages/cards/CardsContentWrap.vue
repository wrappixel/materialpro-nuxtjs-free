<script setup lang="ts">
import { ref } from "vue";

const messages = ref([
  {
    from: "You",
    message: `Sure, I'll see you later.`,
    time: "10:42am",
    color: "deep-purple lighten-1",
  },
  {
    from: "John Doe",
    message: "Yeah, sure. Does 1:00pm work?",
    time: "10:37am",
    color: "green",
  },
  {
    from: "You",
    message: "Did you still want to grab lunch today?",
    time: "9:47am",
    color: "deep-purple lighten-1",
  },
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Content Wrap -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="pa-3">
    <v-row justify="space-around">
      <v-card>
        <v-img
          height="200"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          cover
          class="text-white"
        >
          <v-layout full-height>
            <v-app-bar
              density="comfortable"
              color="rgba(0, 0, 0, 0)"
              flat
              theme="dark"
            >
              <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </template>

              <v-toolbar-title class="text-h6"> Messages </v-toolbar-title>

              <template v-slot:append>
                <v-icon icon="mdi-dots-vertical"></v-icon>
              </template>
            </v-app-bar>
          </v-layout>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-1 mb-2">Today</div>

          <v-timeline density="compact">
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>
