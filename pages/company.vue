<template>
    <v-container>
        <video autoplay muted loop playsinline id="background-video">
            <source src="C:\Users\ghada\Downloads\vecteezy_avion-volando-en-el-cielo_35448314.mp4" type="video/mp4">

        </video>
        <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" sm="10" md="8" lg="6">

                <v-card>
                    <v-card-title>
                        My Company
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" @submit.prevent="submitForm">
                            <v-select v-model="formData.serviceType" :items="serviceTypes" label="Type of Service"
                                outlined required></v-select>
                            <v-select v-model="formData.ageRestriction" :items="ageRestrictions" label="Age Restriction"
                                outlined required></v-select>
                            <v-text-field v-model="formData.budget" label="Budget" outlined required></v-text-field>
                            <v-textarea v-model="formData.description" label="Description" outlined
                                required></v-textarea>
                            <v-file-input v-model="formData.photos" label="Company Photos" outlined accept="image/*"
                                multiple></v-file-input>
                            <v-btn color="primary" type="submit">Submit</v-btn>
                            <v-btn color="error" @click="resetForm">Reset</v-btn>
                        </v-form>
                    </v-card-text>


                </v-card>
            </v-col>
        </v-row>
        <!-- Snackbar for messages -->
        <v-snackbar v-model="showSnackbar" :color="messageType.value">
            {{ message.value }}
            <v-btn color="white" text @click="showSnackbar = false">Close</v-btn>
        </v-snackbar>

    </v-container>
</template>


<script setup>
import { ref } from 'vue';
import { addActivity } from '@/repositories/activity_repo';

const formData = ref({
    serviceType: '',
    ageRestriction: '',
    budget: '',
    description: '',
    photos: []
});

const activities = ref([]); // List to store activities locally

const serviceTypes = ['Restaurant', 'Hotel', 'Nightclub', 'Cultural Venues'];
const ageRestrictions = ['No Age Restriction', '18+', '21+', '25+'];
const message = ref('');
const messageType = ref('');
const showSnackbar = ref(false);  // Controls the visibility of the snackbar

const submitForm = async () => {
    const newActivity = {
        name: formData.value.serviceType,
        description: formData.value.description,
        duration: '',
        budget: formData.value.budget,
        photos: formData.value.photos.map(file => file.name)
    };

    try {
        await addActivity(newActivity); // Ensure the activity is added
        activities.value.push(newActivity); // Add to local list
        message.value = 'Activity added successfully!';
        messageType.value = 'success';
        showSnackbar.value = true; // Show the snackbar on success
        resetForm();
    } catch (error) {
        message.value = 'Failed to add activity. Please try again.';
        messageType.value = 'error';
        showSnackbar.value = true; // Show the snackbar on failure
        console.error('Error adding activity:', error);
    }
};

const resetForm = () => {
    formData.value = {
        serviceType: '',
        ageRestriction: '',
        budget: '',
        description: '',
        photos: []
    };
    showSnackbar.value = false; // Hide the snackbar on form reset
};
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