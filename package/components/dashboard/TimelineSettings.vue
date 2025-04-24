<script setup lang="ts">
import { ref } from "vue";
const dtext = ref("George deo");
const emailtext = ref("");
const password = ref("");
const placetext = ref("");
const show1 = ref(false);
const items = ref(["IT", "Blade Runner", "Thor"]);
const rules = ref({
  required: (value: string) => !!value || "Required.",
  min: (v: string) => v.length >= 8 || "Min 8 characters",
  emailMatch: () => "The email and password you entered don't match",
});
</script>
<template>
  <div class="py-4">
    <v-row>
      <v-col cols="12">
        <v-label class="mb-1">Name</v-label>
        <v-text-field type="text" hide-details v-model="dtext"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Email</v-label>
        <v-text-field type="email" v-model="emailtext" hide-details></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Password</v-label>
        <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
          hint="At least 8 characters" counter @click:append="show1 = !show1" hide-details></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Address</v-label>
        <v-text-field type="text" v-model="placetext" placeholder="Enter Address" hide-details></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Select</v-label>
        <v-select :items="items" hide-details></v-select>
      </v-col>
      <v-col cols="12"><v-btn variant="flat" color="primary">Submit</v-btn></v-col>
    </v-row>
  </div>
</template>


