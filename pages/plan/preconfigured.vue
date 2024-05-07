<template>
    <v-container class="fill-height">
      <v-row class="fill-height">
        <v-col cols="12" class="d-flex align-center justify-center">
          <v-carousel height="400"> <!-- Increased the carousel height -->
            <!-- Carousel Items -->
            <v-carousel-item>
              <v-sheet tile>
                <v-row>
                  <!-- TRIP 1 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600" 
                    image="https://www.readytogo.fr/files/fichepays/Londres_1465312861_Bons%20plans%20Londres%20min.jpg"
                      title="TRIP 1" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="LONDON" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Immerse yourself in the vibrant energy of London</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 1 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(1)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
  
                  <!-- TRIP 2 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://th.bing.com/th/id/OIP.Y5tvnad6wqggI2uzPW6meQHaE8?rs=1&pid=ImgDetMain"
                      title="TRIP 2" style="background-color: rgba(255, 255, 255, 0.5);">
                    
                      <v-card-text>
                        <v-card width="550" title="TUNISIA" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Discover the crossroads of civilizations in Tunisia</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 2 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(2)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
  
                  <!-- TRIP 3 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://th.bing.com/th/id/OIP.yp6OxhKdECJR7Pda1TR0rwHaE7?rs=1&pid=ImgDetMain"
                      title="TRIP 3" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="FRANCE" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Indulge in romance and culinary delights in France</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 3 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(3)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
  
            <!-- TRIP 4 -->
            <v-carousel-item>
              <v-sheet tile>
                <v-row>
                  <!-- TRIP 4 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://a.cdn-hotels.com/gdcs/production192/d1352/b4b96668-a5c9-4637-aaaf-a7c8a226f77a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
                      title="TRIP 4" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="TURKEY" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Experience Turkey's captivating fusion of cultures</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 4 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(4)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
  
                  <!-- TRIP 5 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://www.sarahdegheselle.com/wp-content/uploads/2020/10/AdobeStock_282381041-1-scaled-scaled.jpeg"  
                    title="TRIP 5" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="ITALY" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Explore Italy's timeless beauty and rich flavors</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 5 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(5)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
  
                  <!-- TRIP 6 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://th.bing.com/th/id/R.c12b6e8efbab535065a408c19e9adeda?rik=IK3NAwFmOcZ8sw&pid=ImgRaw&r=0"
                      title="TRIP 6" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="EGYPT" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Uncover ancient mysteries along the Nile in Egypt</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 6 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(6)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <!-- Add 3 more carousel items for TRIP 7, TRIP 8, and TRIP 9 similarly -->
            <!-- TRIP 7 -->
            <v-carousel-item>
              <v-sheet tile>
                <v-row>
                  <!-- TRIP 7 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://cdn.getyourguide.com/img/country/58de1486a0b8d.jpeg/88.jpg"
                      title="TRIP 7" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="JAPAN" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Explore Japan's blend of tradition and innovation</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 7 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(7)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                  <!-- TRIP 8 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://i.dailymail.co.uk/i/pix/2011/12/29/article-2079835-03108F68000005DC-534_468x356.jpg"
                      title="TRIP 8" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="BRAZIL" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Experience vibrant culture and stunning landscapes</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 8 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(8)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                  <!-- TRIP 9 -->
                  <v-col cols="4">
                    <v-card class="mx-auto" height="350" max-width="600"
                    image="https://th.bing.com/th/id/OIP.vbbedhCGqzTanrLrOYoogQHaE8?w=626&h=418&rs=1&pid=ImgDetMain"
                      title="TRIP 9" style="background-color: rgba(255, 255, 255, 0.5);">
                      <v-card-text>
                        <v-card width="550" title="AUSTRALIA" subtitle="" style="background-color: transparent;">
                          <div class="font-weight-bold">Discover iconic landmarks and natural beauty</div>
                        </v-card>
                      </v-card-text>
                      <!-- Bottom Button for TRIP 9 -->
                      <v-row justify="center" class="bottom-button">
                        <v-btn size="x-large" text @click="showBottomSheet(9)">SEE MORE</v-btn>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
  
      <!-- Custom Loader Buttons -->
      <v-row justify="center" class="text-center">
        <v-col cols="auto">
          <v-btn text="Click Me" size="x-large" @click="sheet = !sheet">SPIN</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn text="Click Me" size="x-large" @click="sheet = !sheet">FILTER</v-btn>
        </v-col>
      </v-row>
  
      <!-- Bottom Sheet -->
      
      <v-bottom-sheet v-model="sheet" inset>
        <v-card class="text-center" height="200">
          <v-card-text>
            <v-btn variant="text" @click="sheet = !sheet">filter</v-btn>
            <br>
            <br>
            <div>the informations that you will enter to do the filter according to it </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: false,
        sheet: false,
      };
    },
    methods: {
      showBottomSheet(tripNumber) {
        console.log(`Bottom Sheet for TRIP ${tripNumber} will be shown.`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .fill-height {
    min-height: 100vh;
  }
  
  .bottom-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .spin-button,
  .bottom-button {
    width: 200px;
    height: 80px;
  }
  
  /* Custom style for the text */
  .font-weight-bold {
    background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
    color: white; /* White text color */
    padding: 10px; /* Optional: Add padding for better readability */
    border-radius: 5px; /* Optional: Add rounded corners */
    text-shadow: 1px 1px 1px black; /* Black text outline */
  }
  
  
  
  </style>
  