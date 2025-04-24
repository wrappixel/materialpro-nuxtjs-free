<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import TimelineView from './TimelineView.vue';
import TimelineProfile from './TimelineProfile.vue';
import TimelineSettings from './TimelineSettings.vue';
import TimelineInbox from './TimelineInbox.vue';
const tab = ref('two');
</script>
<template>
    <VCard elevation="10">
        <v-card-text>
            <h2 class="card-title mb-1">Profile Activitiy</h2>
            <h5 class="card-subtitle">Ample Admin Vs Pixel Admin</h5>
            <div class="profile-activity">
                <v-tabs v-model="tab" fixed-tabs color="primary" class="mt-5 d-flex ga-3" height="100">
                    <v-tab value="one" >
                        <div>
                            <Icon icon="solar:user-circle-outline" height="25" />
                        </div>
                        Profile
                    </v-tab>
                    <v-tab value="two">
                        <div>
                            <Icon icon="solar:accessibility-outline" height="25" />
                        </div>
                        Activitiy</v-tab
                    >
                    <v-tab value="three">
                        <div>
                            <Icon icon="solar:inbox-line-outline" height="25" />
                        </div>
                        Inbox</v-tab
                    >
                    <v-tab value="four">
                        <div>
                            <Icon icon="solar:settings-linear" height="25" />
                        </div>
                        Settings</v-tab
                    >
                </v-tabs>
            </div>

            <v-window v-model="tab" class="mt-6">
                <v-window-item value="one">
                    <TimelineProfile />
                </v-window-item>
                <v-window-item value="two"><TimelineView /></v-window-item>
                <v-window-item value="three"><TimelineSettings /> </v-window-item>
                <v-window-item value="four"><TimelineInbox /></v-window-item>
            </v-window>
        </v-card-text>
    </VCard>
</template>
