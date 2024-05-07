<template>
  <MainLayout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="display-2">Create my plan</h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="18" class="text-center">
          <h3 class="mr-4 display-2">Destination</h3>
        </v-col>
        <v-col cols="25">
          <v-select label="Select" :items="['Paris', 'Italy', 'Spain', 'Tunisia']" dense
            style="width: calc(100% - 2px);"></v-select>


        </v-col>
      </v-row>

    </v-container>
    <v-container>
      <v-row>
        <v-col cols="18" class="text-center">
          <h3 class="display-2">Type</h3>
        </v-col>
        <v-col cols="25">
          <v-select label="Select" :items="['couple', 'solo', 'family', 'friends', 'business']" dense
            style="width: calc(100% - 2px);"></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="18" class="text-center">
          <h3 class="display-2">Budget</h3>
        </v-col>


        <v-col cols="25">
          <v-text-field label="Amount" model-value="10.00" prefix="$"></v-text-field>
        </v-col>
      </v-row>

    </v-container>
    <v-container>
      <v-row>
        <!-- Date picker for "To" -->
        <v-col cols="5" order-lg="2">
          <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
            offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field v-model="selectedDate2" label="To" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="selectedDate1" no-title scrollable no-time clearable
              format="ddd MMM D YYYY"></v-date-picker>
          </v-menu>
        </v-col>
        <!-- Button to toggle the menu -->
        <v-col cols="1">
          <v-btn icon @click="menu1 = !menu1">
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-col>

        <!-- Date picker for "From" -->
        <v-col cols="5">
          <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
            offset-y>
            <template v-slot:activator="{ on }">
              <v-text-field v-model="selectedDate1" label="From" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="selectedDate2" no-title scrollable no-time clearable
              format="ddd MMM D YYYY"></v-date-picker>
          </v-menu>
        </v-col>


        <v-col cols="1">
          <v-btn icon @click="menu2 = !menu2">
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <router-link to="/creating" class="router-link">
            <v-btn @click="createPlan">
              create
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()


function createPlan() {
  // treatement

  router.push('/') // example
}


</script>
<style scoped>
.display-2,
h3 {
  font-family: 'Roboto', sans-serif;
}
</style>
