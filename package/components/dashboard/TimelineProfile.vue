

<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col lg="3" cols="12" sm="3" class="border-e">
          <strong class="text-15 font-weight-semibold opacity-80">Full Name</strong>
          <br />
          <p class="text-muted text-15 textSecondary">Johnathan Deo</p>
        </v-col>
        <v-col lg="3" cols="12" sm="3" class="border-e">
          <strong class="text-15 font-weight-semibold opacity-80">Mobile</strong>
          <br />
          <p class="text-muted text-15 textSecondary">(123) 456 7890</p>
        </v-col>
        <v-col lg="3" cols="12" sm="3" class="border-e">
          <strong class="text-15 font-weight-semibold opacity-80">Email</strong>
          <br />
          <p class="text-muted text-15 textSecondary w-100 text-truncate">johnathan@admin.com</p>
        </v-col>
        <v-col lg="3" cols="12" sm="3">
          <strong class="text-15 font-weight-semibold opacity-80">Location</strong>
          <br />
          <p class="text-muted text-15 textSecondary">London</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <p class="mt-4 border-t pt-4 text-15 textSecondary">
    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
    justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
    eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
    semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
    eu, consequat vitae, eleifend ac, enim.
  </p>
  <p class="pt-4 text-15 textSecondary">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries
  </p>
  <p class="pt-4 text-15 textSecondary">
    It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <div class="mt-4">
  <h3 class="text-h5 ">Skill Set</h3>
  <div class="border-t mt-4">
    <h5 class="mt-4 mb-0 text-16 font-weight-medium">
      Wordpress
      <span class="float-right">80%</span>
    </h5>
    <v-progress-linear
      model-value="80"
      color="success"
      bg-color="grey200"
      class="mt-2"
      rounded
      
    ></v-progress-linear>
    <h5 class="mt-4 mb-0 text-16 font-weight-medium">
      HTML 5
      <span class="float-right">90%</span>
    </h5>
    <v-progress-linear
      model-value="90"
      color="warning"
      bg-color="grey200"
      class="mt-2"
      rounded
    ></v-progress-linear>
    <h5 class="mt-4 mb-0 text-16 font-weight-medium">
      jQuery
      <span class="float-right">50%</span>
    </h5>
    <v-progress-linear
      model-value="50"
      color="error"
      bg-color="grey200"
      class="mt-2"
      rounded
    ></v-progress-linear>
    <h5 class="mt-4 mb-0 text-16 font-weight-medium">
      Photoshop
      <span class="float-right">70%</span>
      <v-progress-linear
        model-value="70"
        color="info"
        bg-color="grey200"
        class="mt-2"
        rounded
      ></v-progress-linear>
    </h5>
  </div>
  </div>

  
</template>


