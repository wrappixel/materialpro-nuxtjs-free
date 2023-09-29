<template>
    <VCard elevation="10" class="overflow-hidden ">
      <img src="/images/backgrounds/login-register.jpg" class="w-100" />
      <div class="d-flex justify-center mt-n15">
        <v-avatar size="100">
          <img src="/images/profile/1.jpg" width="100" alt="user" />
        </v-avatar>
      </div>
      <v-card-text class="pa-6">
        <div class="p-4 text-center">
          <h2 class="mb-0 mt-4 text-h4">Jonathan Dominic</h2>
          <div>Web Designer &amp; Developer</div>
          <v-btn rounded color="primary" dark x-large class="mt-3 px-7"
            flat>Follow</v-btn
          >
          <v-row class="mt-6 pb-4">
            <v-col cols="4">
              <h2 class="mb-0 text-h4">1099</h2>
              <div>Articles</div>
            </v-col>
            <v-col cols="4">
              <h2 class="mb-0 text-h4">23,469</h2>
              <div>Followers</div>
            </v-col>
            <v-col cols="4">
              <h2 class="mb-0 text-h4">6035</h2>
              <div>Following</div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </VCard>
  </template>
  