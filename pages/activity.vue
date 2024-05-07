<template>
    <v-container fluid>
        <v-row>
            <!-- Sidebar -->
            <v-col cols="4">
                <v-card class="sidebar-card">
                    <v-card-title class="sidebar-title">Activities</v-card-title>
                    <v-divider></v-divider>
                    <v-select v-model="selectedActivity" :items="existingActivities" label="Select Activity"
                        outlined></v-select>
                    <router-link to="/company" class="router-link">
                        <v-btn class="mt-4" color="primary" outlined>Add Activity</v-btn>
                    </router-link>
                </v-card>
            </v-col>

            <!-- Main Content -->
            <v-col cols="8">
                <v-card class="main-content-card">
                    <v-card-title class="main-content-title">Activity Details</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="6">
                                <v-row>
                                    <v-col cols="12">
                                        <v-card-title>{{ selectedActivity }}</v-card-title>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-rating v-model="dummyRating" color="yellow" background-color="transparent"
                                            dense readonly></v-rating>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6" class="text-right">
                                <v-btn icon @click="confirmDelete">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <!-- Align the image to the left -->
                        <v-row>
                            <v-col cols="12">
                                <v-img :src="getPhoto(selectedActivity)" aspect-ratio="2"></v-img>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text>
                        <p><strong>Description:</strong> {{ getDescription(selectedActivity) }}</p>
                        <p><strong>Duration:</strong> {{ getDuration(selectedActivity) }}</p>
                        <p><strong>Budget:</strong> {{ getBudget(selectedActivity) }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Confirmation Dialog -->
        <v-dialog v-model="dialogDelete" max-width="300">
            <v-card>
                <v-card-title class="headline">Confirmation</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this activity?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red darken-1" @click="dialogDelete = false">Cancel</v-btn>
                    <v-btn color="green darken-1" @click="deleteActivity">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            existingActivities: ['Residence Inn by Marriott, Tunisia', 'Crowne Plaza Hotels & Resorts, Spain', 'Staybridge Suites Museum, Italy'],
            selectedActivity: null,
            dialogDelete: false,
            dummyRating: 5, // dummyRating to display all stars filled
            activityDetails: {
                'Residence Inn by Marriott, Tunisia': {
                    description: 'Luxury beachfront resort with all-inclusive packages',
                    duration: '3 nights, 2 adults',
                    budget: '600 TND',
                    rating: 3,
                    photo: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/492889185.jpg?k=92400246cf41b080e7aebc50fb10da557dab4eb386be5550913e46f807a5b0e2&o=&hp=1' // URL of the photo for this activity
                },
                'Crowne Plaza Hotels & Resorts, Spain': {
                    description: 'Luxurious accommodation with stunning views',
                    duration: '3 nights, 1 adult',
                    budget: '500 EUR',
                    rating: 4,
                    photo: 'https://www.cpireland.crowneplaza.com/application/files/3416/6497/9430/CPBL_Exterior_night.jpg' // URL of the photo for this activity
                },
                'Staybridge Suites Museum, Italy': {
                    description: 'Cozy studio apartment near famous museums',
                    duration: '2 nights, 2 adults',
                    budget: '250 USD',
                    rating: 5,
                    photo: 'https://lifeinitaly.com/wp-content/uploads/2023/05/image-31.png' // URL of the photo for this activity
                }
            }
        };
    },
    methods: {
        addActivity() {
            this.existingActivities.push(this.selectedActivity);
        },
        confirmDelete() {
            this.dialogDelete = true;
        },
        deleteActivity() {
            const index = this.existingActivities.indexOf(this.selectedActivity);
            if (index !== -1) {
                this.existingActivities.splice(index, 1);
            }
            this.dialogDelete = false;
        },
        getDescription(activity) {
            return this.activityDetails[activity] ? this.activityDetails[activity].description : '';
        },
        getDuration(activity) {
            return this.activityDetails[activity] ? this.activityDetails[activity].duration : '';
        },
        getBudget(activity) {
            return this.activityDetails[activity] ? this.activityDetails[activity].budget : '';
        },
        getPhoto(activity) {
            return this.activityDetails[activity] ? this.activityDetails[activity].photo : '';
        }
    }
};
</script>

<style scoped>
.sidebar-card {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
}

.sidebar-title {
    font-size: 24px;
    color: #333;
    text-align: center;
}

.main-content-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-content-title {
    font-size: 24px;
    color: #333;
    text-align: center;
}

.text-right {
    text-align: right;
}
</style>