<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12">
                    <v-card>
                        <v-card-title class="text-center">Destidream</v-card-title>
                        <v-card-text>
                            <v-row align="center">
                                <v-col cols="12" md="4" class="text-center">
                                    <v-avatar color="surface-variant">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"
                                            alt="Profile Picture">
                                    </v-avatar>
                                    <div class="text-h5">Joseph Amara</div>
                                    <v-btn icon @click="openSettingsDialog"><v-icon>mdi-settings</v-icon></v-btn>
                                    <v-btn icon><v-icon>mdi-help</v-icon></v-btn>
                                    <v-btn icon color="error"><v-icon>mdi-logout</v-icon></v-btn>
                                </v-col>
                                <v-col cols="12" md="8">
                                    <!-- My Trips and Saved Trips -->
                                    <v-card>
                                        <v-card-title>My Trips</v-card-title>
                                        <v-card-text>
                                            <v-btn @click="openTripPlanDialog" block>Trip to Paris</v-btn>
                                        </v-card-text>
                                    </v-card>
                                    <v-card style="margin-top: 20px;">
                                        <v-card-title>Saved Trips</v-card-title>
                                        <v-card-text>
                                            <div>Trip to Paris</div>
                                            <div>Trip to Italy</div>
                                            <div>Trip to Maldives</div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- Feedback Section -->
            <v-row justify="center">
                <v-col cols="12">
                    <h2 class="text-center mb-4">Feedback</h2>
                    <v-text-field v-model="feedback" label="Your Feedback" outlined dense
                        class="feedback-input"></v-text-field>
                    <v-rating v-model="rating" :half-increments="true" :dense="true" label="Rate the activities"
                        color="yellow"></v-rating>
                    <v-btn @click="submitFeedback" color="primary" class="submit-btn">Submit Feedback</v-btn>
                </v-col>
            </v-row>
            <!-- Trip Plan Dialog -->
            <v-dialog v-model="dialog" max-width="600">
                <v-card>
                    <v-card-title class="text-h5">Trip Plan: Paris</v-card-title>
                    <v-card-text>
                        <div v-for="(day, index) in tripPlan" :key="index">
                            <h3>{{ day.title }}</h3>
                            <ul>
                                <li v-for="(activity, activityIndex) in day.activities" :key="activityIndex">
                                    <strong>{{ activity.time }}</strong>: {{ activity.description }}
                                </li>
                            </ul>
                            <br> <!-- Add a line break after each day -->
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
        <!-- Footer -->
        <v-footer class="grey lighten-4 pa-3" style="position: absolute; bottom: 0; width: 100%;">
            <v-row justify="space-between">
                <v-col cols="4">
                    <a href="#" class="grey--text">Terms of Use</a>
                </v-col>
                <v-col cols="4" class="text-center">
                    <a href="#" class="grey--text">Privacy Policy</a>
                </v-col>
                <v-col cols="4" class="text-right">
                    <a href="#" class="grey--text">FAQ</a>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            tripPlan: [
                // Trip plan data...
            ],
            feedback: '',
            rating: 0
        };
    },
    methods: {
        openTripPlanDialog() {
            this.dialog = true;
        },
        submitFeedback() {
            // Logic to submit feedback
        },
        openSettingsDialog() {
            // Logic to open settings dialog
        }
    }
};
</script>