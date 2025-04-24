<script setup lang="ts">
import { Icon } from '@iconify/vue';
const SideProfile = [
    {
        id:1,
        color: 'primary',
        title: 'My Profile'
    },
    {
        id:2,
        color: 'secondary',
        title: 'My Notes'
    },
    {
        id:3,
        color: 'success',
        title: 'Inbox'
    },
    {
        id:4,
        color: 'warning',
        title: 'Account Settings'
    },
    {
        id:5,
        color: 'error',
        title: 'Logout'
    }
];
</script>

<template>
    <v-menu open-on-click>
        <template v-slot:activator="{ props }">
            <div class="d-flex justify-space-between align-center w-100 cursor-pointer" v-bind="props">
                <h5 class="font-weight-medium text-15 text-surface">Markarn Doe</h5>
                <Icon icon="solar:alt-arrow-down-bold" class="text-surface" height="15" />
            </div>
        </template>

        <v-sheet rounded="md" width="230" elevation="10">
            <perfect-scrollbar >
                <v-list class="pt-3 theme-list " lines="two" density="compact">
                    <v-list-item v-for="item in SideProfile" :key="item.id" class="custom-text-primary cursor-pointer py-3" min-height="auto" >
                        <div class="d-flex ga-3 align-center">
                            <h6 class="text-body-1 heading custom-title">{{ item.title }}</h6>
                        </div>
                    </v-list-item>
                </v-list>
            </perfect-scrollbar>
            <v-divider class="mt-2 pb-5"></v-divider>
            <div class="pb-6 px-5 text-center">
                <v-btn color="primary" class="w-100" rounded="pill" flat block to="">View Profile</v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
