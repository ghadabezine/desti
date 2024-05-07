<template>
    <v-container>
        <video autoplay muted loop playsinline id="background-video">
            <source src="C:\Users\ghada\Downloads\vecteezy_avion-volando-en-el-cielo_35448314.mp4" type="video/mp4">

        </video>
        <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card>
                    <v-card-title align="center" class="headline">Login</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="usernameOrEmail" label="Email or Username" required></v-text-field>
                        <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="openForgotPasswordDialog">Forgot your password?</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                    </v-card-actions>
                    <!-- Signup options -->
                    <div class="text-center mt-4">
                        Don't have an account?
                        <router-link to="/registration">Sign up now as traveller</router-link>
                        or
                        <router-link to="/company">Sign up now as company</router-link>
                    </div>
                </v-card>

            </v-col>
        </v-row>
        <!-- Forgot password dialog -->
        <v-dialog v-model="forgotPasswordDialog" persistent max-width="400px">
            <v-card>
                <v-card-title class="headline">Forgot Your Password?</v-card-title>
                <v-card-text>
                    <v-radio-group v-model="forgotPasswordOption">
                        <v-radio label="Email" value="email"></v-radio>
                        <v-radio label="Phone Number" value="phone"></v-radio>
                    </v-radio-group>
                    <v-text-field v-model="forgotPasswordInfo"
                        :label="forgotPasswordOption === 'email' ? 'Email' : 'Phone Number'"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn text @click="sendResetLink">Send Reset Link</v-btn>
                    <v-btn text @click="closeForgotPasswordDialog">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
    <v-snackbar v-model="showSnackbar" :timeout="3000">
        {{ snackbarMessage }}
    </v-snackbar>
</template>

<script setup>
import { ref } from 'vue';
import { findUser } from '@/entities/user';
import { useRouter } from 'vue-router';

const usernameOrEmail = ref('');
const password = ref('');
const forgotPasswordDialog = ref(false);
const forgotPasswordOption = ref('email');
const forgotPasswordInfo = ref('');
const showSnackbar = ref(false);
const snackbarMessage = ref('');

function login() {
    const user = findUser(usernameOrEmail.value);
    if (user && user.password === password.value) {
        snackbarMessage.value = 'Login successful!';
        showSnackbar.value = true;
        router.push('/profile');

    } else {
        snackbarMessage.value = 'Invalid username/email or password';
        showSnackbar.value = true;
    }
}

function openForgotPasswordDialog() {
    forgotPasswordDialog.value = true;
}

function closeForgotPasswordDialog() {
    forgotPasswordDialog.value = false;
}

function sendResetLink() {
    console.log('Sending reset link to:', forgotPasswordInfo.value);
    forgotPasswordDialog.value = false;
    snackbarMessage.value = 'Reset link sent successfully!';
    showSnackbar.value = true;
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
