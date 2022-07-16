<template>
  <v-card>
    <v-card-text>
      <div>
        <h2 class="mb-7">Alerts</h2>
      </div>
      <div class="mb-7">
        <v-alert type="success" color="primary">I'm a success alert.</v-alert>
        <br />
        <v-alert type="info">I'm an info alert.</v-alert>
        <br />
        <v-alert type="warning">I'm a warning alert.</v-alert>
        <br />
        <v-alert type="error">I'm an error alert.</v-alert>
      </div>
      <br />
      <div>
        <h2 class="mb-7 mt-5">Alert Variants</h2>
      </div>
      <div>
        <v-alert density="compact" type="success" color="primary">
          I'm a compact alert with a <strong>type</strong> of info
        </v-alert>

        <br />

        <v-alert density="comfortable" type="success" variant="tonal">
          I'm a comfortable alert with the <strong>text</strong> prop and a
          <strong>type</strong> of success
        </v-alert>

        <br />

        <v-alert density="default" type="warning">
          I'm a default alert with the <strong>border</strong> prop and a
          <strong>type</strong> of warning
        </v-alert>

        <br />

        <!-- Density is "default" by default -->
        <v-alert prominent type="error" variant="outlined">
          I'm a default alert with the <strong>prominent</strong> prop and a
          <strong>type</strong> of error
        </v-alert>
      </div>
      <br />
      <div>
        <h2 class="mb-7 mt-5">Alert Closable</h2>
      </div>
      <div>
        <v-alert
          v-model="alert"
          variant="tonal"
          closable
          close-label="Close Alert"
          color="deep-purple accent-4"
          title="Closable Alert"
        >
          Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut
          neque. Cras dapibus. Vivamus consectetuer hendrerit lacus. Sed mollis,
          eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing
          dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum
          aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit
          mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae,
          posuere imperdiet, leo.
        </v-alert>

        <div v-if="!alert" class="text-center">
          <v-btn @click="alert = true"> Reset </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const alert = ref(true);
</script>
