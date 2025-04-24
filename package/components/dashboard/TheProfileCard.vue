<template>
    <VCard elevation="10" class="overflow-hidden">
        <div class="pa-2">
            <img src="/images/background/profile-bg.jpg" height="110" class="w-100 rounded-md" />
        </div>
        <div class="d-flex justify-center mt-n5">
            <v-avatar size="112" class="mt-n15">
                <img src="/images/users/user-2.jpg" width="112" alt="user" />
            </v-avatar>
        </div>
        <v-card-text class="pt-3 px-6">
            <div class="text-center">
                <h2 class="mb-0 text-h3">Angela Dominic</h2>
                <div class="textSecondary text-subtitle-1">Web Designer &amp; Developer</div>
                <v-btn  color="primary" rounded="pill" class="mt-3" flat>Follow</v-btn>
                <v-row class="mt-6 pt-2 border-t">
                    <v-col cols="4">
                        <h2 class="mb-0 text-h3">1099</h2>
                        <div class="text-subtitle-1 textSecondary">Articles</div>
                    </v-col>
                    <v-col cols="4">
                        <h2 class="mb-0 text-h3">23,469</h2>
                        <div class="text-subtitle-1 textSecondary">Followers</div>
                    </v-col>
                    <v-col cols="4">
                        <h2 class="mb-0 text-h3">6035</h2>
                        <div class="text-subtitle-1 textSecondary">Following</div>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
    </VCard>
</template>
