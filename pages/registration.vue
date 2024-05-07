<template>
  <v-container>
    <video autoplay muted loop playsinline id="background-video">
      <source src="C:\Users\ghada\Downloads\5598970-uhd_3840_2160_24fps.mp4" type="video/mp4">

    </video>
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card>
          <v-card-title class="headline">Registration</v-card-title>
          <v-card-text>
            <v-text-field v-model="form.firstname" label="First Name" placeholder="John" required></v-text-field>
            <v-text-field v-model="form.lastname" label="Last Name" placeholder="Doe" required></v-text-field>
            <v-text-field v-model="form.birthday" label="Birthday" placeholder="MM/DD/YYYY" required></v-text-field>
            <v-text-field v-model="form.email" label="Email" placeholder="example@example.com" required></v-text-field>
            <v-text-field v-model="form.password" type="password" label="Password" placeholder="Enter your password"
              required></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn @click="resetForm">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit">Submit</v-btn>
          </v-card-actions>
        </v-card>
        <!-- Snackbar for notification -->
        <v-snackbar v-model="snackbar.show" :timeout="3000" color="success" top right>
          {{ snackbar.message }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue';
import { addUser } from '@/entities/user';
import { UserImpl } from '@/repositories/user';

const form = reactive({
  firstname: '',
  lastname: '',
  birthday: '',
  email: '',
  password: ''
});

const snackbar = reactive({
  show: false,
  message: ''
});

function onSubmit() {
  const newUser = new UserImpl(form.firstname + ' ' + form.lastname, form.email, form.password, "Default Location");
  addUser(newUser);
  snackbar.message = 'User registered successfully!';
  snackbar.show = true;
  resetForm();
}

function resetForm() {
  form.firstname = '';
  form.lastname = '';
  form.birthday = '';
  form.email = '';
  form.password = '';
}
</script>
<style scoped>
.v-card {
  max-width: 500px;
  margin: auto;
  background: rgba(255, 255, 255, 0.95);
  /* Ensure card is mostly opaque to keep form visible */
}

#background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* Cover the full viewport width */
  height: 100vh;
  /* Cover the full viewport height */
  object-fit: cover;
  /* Ensure the video covers the area without distorting the aspect ratio */
  z-index: -1;
}

.v-container {
  position: relative;
  /* Ensure the container is above the video */
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
