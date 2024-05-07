<template>
    <v-row justify="center">
        <!-- TRIP 1 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://www.readytogo.fr/files/fichepays/Londres_1465312861_Bons%20plans%20Londres%20min.jpg"
                max-width="550" title="TRIP 1" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="LONDON" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Immerse yourself in the vibrant energy of London</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 1 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(1)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 2 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://th.bing.com/th/id/OIP.Y5tvnad6wqggI2uzPW6meQHaE8?rs=1&pid=ImgDetMain" max-width="550"
                title="TRIP 2" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="TUNISIA" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Discover the crossroads of civilizations in Tunisia</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 2 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(2)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 3 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://th.bing.com/th/id/OIP.yp6OxhKdECJR7Pda1TR0rwHaE7?rs=1&pid=ImgDetMain" max-width="550"
                title="TRIP 3" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="FRANCE" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Indulge in romance and culinary delights in France</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 3 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(3)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 4 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://a.cdn-hotels.com/gdcs/production192/d1352/b4b96668-a5c9-4637-aaaf-a7c8a226f77a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                max-width="550" title="TRIP 4" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="TURKEY" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Experience Turkey's captivating fusion of cultures</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 4 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(4)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 5 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://www.sarahdegheselle.com/wp-content/uploads/2020/10/AdobeStock_282381041-1-scaled-scaled.jpeg"
                max-width="550" title="TRIP 5" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="ITALY" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Explore Italy's timeless beauty and rich flavors</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 5 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(5)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 6 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://th.bing.com/th/id/R.c12b6e8efbab535065a408c19e9adeda?rik=IK3NAwFmOcZ8sw&pid=ImgRaw&r=0"
                max-width="550" title="TRIP 6" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="EGYPT" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Uncover ancient mysteries along the Nile in Egypt</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 6 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(6)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 7 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://cdn.getyourguide.com/img/country/58de1486a0b8d.jpeg/88.jpg" max-width="550"
                title="TRIP 7" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="JAPAN" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Explore Japan's blend of tradition and innovation</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 7 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(7)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 8 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://i.dailymail.co.uk/i/pix/2011/12/29/article-2079835-03108F68000005DC-534_468x356.jpg"
                max-width="550" title="TRIP 8" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="BRAZIL" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Experience vibrant culture and stunning landscapes in Brazil</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 8 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(8)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
        <!-- TRIP 9 -->
        <v-col cols="10" sm="4">
            <v-card class="mx-auto" height="300"
                image="https://th.bing.com/th/id/OIP.vbbedhCGqzTanrLrOYoogQHaE8?w=626&h=418&rs=1&pid=ImgDetMain"
                max-width="550" title="TRIP 9" style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card-text>
                    <v-card width="450" title="AUSTRALIA" subtitle="" style="background-color: transparent;">
                        <div class="font-weight-bold"
                            style="background-color: rgba(255, 255, 255, 0.5); color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; padding: 5px;">
                            Discover iconic landmarks and natural beauty in Australia</div>
                    </v-card>
                </v-card-text>
                <!-- Bottom Button for TRIP 9 -->
                <v-row justify="center" class="bottom-button">
                    <v-btn size="x-large" text @click="showBottomSheet(9)">SEE MORE</v-btn>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                        <v-pagination v-model="page" :length="15" class="my-4"></v-pagination>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script setup>
import { Trip } from '@/model/index';

import { getIndexItemList, addIndexItem } from '@/repositories/index_repo'

const data = {
    page: 1 // Added data property for pagination
};

function add() {
    let i = new index('coco');
    addIndexItem(i);
}
</script>


<style scoped>
.bottom-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>