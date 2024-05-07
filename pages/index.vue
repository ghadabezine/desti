<template>
  <MainLayout>
    <v-container
      style="background-image: url('https://img.freepik.com/free-photo/view-3d-airplane-with-travel-destination-landscape_23-2151022186.jpg?t=st=1712827520~exp=1712831120~hmac=d589efeb16e619b6b53d2f75862115bf4a5b6cae2fcf2c10185eafc0108dbf66&w=1800'); background-size: cover; background-position: center; height: 500px; width: 1000px; overflow: hidden; margin-top: 100px; border-radius: 20px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
      <div class="title-description">
        <h2 class="title"> DestiDream </h2>
      </div>
      <v-row justify="center" align="center" style="margin-top: 200px;">
        <v-col cols="12" sm="6" md="4" lg="3" class="d-flex justify-center">
          <v-btn class="mx-4" color="transparent" dark elevation="10">
            pre-configured plans
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>

          <v-btn class="mx-4" color="transparent" dark elevation="10">
            make your plan
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-row align="center" class="row-outline" style="margin-top: 50px;"> <!-- Adjust margin-top here -->
      <v-col cols="30" sm="6" class="d-flex justify-center align-center flex-column">
        <v-img :width="400" aspect-ratio="1/1" cover
          src="https://img.freepik.com/free-vector/illustrated-isometric-outline-time-management-concept_52683-55735.jpg?t=st=1712831998~exp=1712835598~hmac=3e19ea3ae3c3c6bdb00e270978fdda0bd5edee4c2980bf05a659e60a73e91835&w=1380"
          style="margin-top: 70px;">
        </v-img>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center align-center flex-column">
        <div style="font-family:Georgia, 'Times New Roman', Times, serif">
          <h2 align="center" style="color: #4a90e2; font-weight: 600; font-size: 2.3rem;">Step 1</h2>
          <router-link to="/plan/create" class="router-link">
            <h2 align="center" style="font-weight: 600; font-size: 2rem; margin-top: 10px;">Create your plan for free
            </h2>
          </router-link>
          <router-link to="/preconfigured-plans" class="router-link">
            <h2 style="font-weight: 600; font-size: 2rem;">or choose from our curated plans</h2>
          </router-link>
        </div>
      </v-col>
    </v-row>

    <v-row align="center" class="row-outline" style="margin-top: 50px;"> <!-- Adjust margin-top here -->
      <v-col cols="12" sm="6" class="d-flex justify-center align-center flex-column">
        <div style="font-family:Georgia, 'Times New Roman', Times, serif">
          <h2 align="center" style="color: #4a90e2; font-weight: 600; font-size: 2.3rem;">Step 2</h2>
          <h2 style="font-weight: 600; font-size: 2rem; margin-top: 10px;">Embark on your ground adventure</h2>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img :width="400" aspect-ratio="1/1" cover
          src="https://img.freepik.com/free-vector/colorful-summer-vacation-concept_1284-36695.jpg?t=st=1712832435~exp=1712836035~hmac=0cd5e6afc3b0721cebbe3ea8063cc469fecbb7fa214f05610ba8920f1da32243&w=1480"
          style="margin-top: 70px;">
        </v-img>
      </v-col>
    </v-row>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<style scoped>
.title-description {
  text-align: center;
  margin-top: 80px;
}

.title {
  font-size: 100px;
  font-style: italic;
  font-family: 'Times New Roman', Times, serif;
  color: white;
}

.small-toolbar {
  justify-content: center;
  margin-left: 60px;
  margin-top: 200px;
}

.small-search input {
  height: 30px;
  padding-top: 6px;
}

.router-link {
  text-decoration: none;
  /* Remove underline */
  color: inherit;
  /* Inherit text color */
}

.router-link:hover {
  color: #8f8f8f;
  /* Change color on hover */
}

.row-outline {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add shadow for floating effect */
  border-radius: 12px;
  /* Add border radius for rounded corners */
  overflow: hidden;
  /* Hide overflow to prevent shadow from being cut off */
  margin-bottom: 20px;
  /* Add margin to separate rows */
}
</style>
