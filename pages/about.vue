<template>

    <v-card color="grey-lighten-4" flat height="200px" rounded="0">
        <v-toolbar extended extension-height="50">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Home</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>






    <div class="about-us">
        <!-- Home Icon -->


        <h1 class="about-title">About Us</h1>
        <div class="about-content">
            <div class="about-description">
                <p>
                    Welcome to DestiDream, your ultimate destination for personalized travel experiences! At DestiDream,
                    we believe that every journey should be as unique as the traveler embarking on it.

                    Our platform is designed to inspire and assist travelers in crafting their dream vacations with ease
                    and precision. Whether you're a seasoned globetrotter or planning your first adventure, our
                    innovative tools and expert guidance ensure that your travel plans exceed expectations.
                </p>
            </div>
            <div class="about-gif">
                <img src="https://i.gifer.com/PNl.gif" alt="About Us GIF" />
            </div>
        </div>

    </div>



</template>


<script>
export default {
    name: 'AboutUs',
}
</script>

<style scoped>
.about-us {
    max-width: 1600px;
    margin: 0 auto;
    padding: 50px;
    background-color: whitesmoke;
    color: black;
}

.about-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
}

.about-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* Align items vertically */
}

.about-description {
    flex: 1;
    margin-right: 20px;
}

.about-description p {
    font-size: 1.4rem;
    /* Increased font size for description */
    line-height: 1.6;
}

.about-photo img {
    max-width: 300px;
    /* Adjust the width of the photo */
    height: auto;
    display: block;
}
</style>        