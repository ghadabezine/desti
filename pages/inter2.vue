<template>
  <v-container>
    <v-autocomplete clearable chips label="Filter" :items="['cafe', 'museum', 'park', 'restaurant', 'nightclub']"
      v-model="selectedFilters" multiple>
    </v-autocomplete>

    <div class="d-flex justify-space-around align-center">
      <v-row justify="center" class="primary">
        <v-col cols="10" sm="80" md="100" lg="6" v-for="(item, index) in filteredItems" :key="index">
          <v-card max-width="600" class="elevation-12 mx-auto my-8 d-flex flex-column"
            style="max-width: 3000px; margin: 30px;">
            <v-img :src="item.photo" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
            <v-card-actions>
              <v-btn outlined class="blue--text mt-4 mr-5" append-icon="$plus"
                style="margin-right: 20cm; margin-bottom: 0.5cm; max-height: 9cm;" >
                <span>add</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getActivity, addActivity } from '@/repositories/activity_repo';

const selectedFilters = ref([]);
const filteredItems = computed(() => {
  const items = getActivity();
  if (selectedFilters.value.length === 0) {
    return items;
  } else {
    return items.filter(item => selectedFilters.value.includes(item.type));
  }
});









</script>

<style scoped>
.elevation-12 {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
