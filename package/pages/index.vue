<script setup lang="ts">
import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import TheActivityTimeline from '@/components/dashboard/TheActivityTimeline.vue';
import TheMyContacts from '@/components/dashboard/TheMyContacts.vue';
import TheProfileCard from '@/components/dashboard/TheProfileCard.vue';
import TotalSales from '@/components/dashboard/TotalSales.vue';
</script>

<template>
    <v-row>
        <!---Sales overview--->
        <v-col cols="12" sm="12" lg="8">
            <SalesOverview />
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <TotalSales />
        </v-col>
        <v-col cols="12" sm="12" lg="4">
            <TheProfileCard />
            <div class="mt-7"></div>
            <TheMyContacts />
        </v-col>
        <!---Activity timeline tabs--->
        <v-col cols="12" sm="12" lg="8">
            <TheActivityTimeline />
        </v-col>
    </v-row>
</template>
