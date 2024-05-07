<template>
    <v-app-bar color="white" dark>
        <v-toolbar-title class="ml-0 pl-3">
            Desti Dream
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field v-model="search" placeholder="Search" append-icon="mdi-magnify" outlined
            hide-details></v-text-field>

        <v-toolbar-items>
            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/about">About Us</v-btn>
            <v-btn text to="/plan/preconfigured">Pre-configured Plans</v-btn>
            <v-btn text to="/plan/create">Make Your Plan</v-btn>
            <v-btn text to="/contact">Contact Us</v-btn>
            <v-btn icon to="/login">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-main>
        <slot></slot>
    </v-main>

    <v-footer>
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" class="mx-2" color="grey" rounded="xl" variant="text">{{ link
                }}</v-btn>
        </v-row>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const search = ref('');
const links = ['Home', 'About Us', 'Pre-configured Plans', 'Make Your Plan', 'Contact Us'];
</script>

<style scoped>
/* Add scoped CSS styles here */
</style>