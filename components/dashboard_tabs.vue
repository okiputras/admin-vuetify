<template>
  <div>
    <div>
      <p class="headline font-weight-bold mb-0 mt-4 mr-4">Detail Akun</p>
    </div>
    <v-tabs
      v-model="active"
      class="pt-0"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab v-for="(tab, i) in tabs" :key="i" ripple> {{ tab.title }} </v-tab>
      <!-- ========================================================================================================== -->
      <!-- ======================================================= TABS 1 =========================================== -->
      <!-- ========================================================================================================== -->
      <v-tab-item>
        <v-card flat class="pb-4">
          <!-- ======================================================= Card for veriikasi =========================================== -->
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex sm12 xs 12 md12 lg12>
                <v-card color="#e0f5ff" flat="">
                  <v-card-text>
                    <h3 class="subheading">
                      E-mail belum terverifikasi. Verifikasikan e-mail Anda
                      sekarang.
                    </h3>
                    <v-btn flat color="orange">Share</v-btn>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- ======================================================= FORM  =========================================== -->
          <!-- <v-layout justify-center>
            <v-flex xs12 sm10 md10 lg10>
              <v-card ref="form" class="pb-2">
                <v-card-text>
                  <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="address"
                    v-model="address"
                    :rules="[
                      () => !!address || 'This field is required',
                      () =>
                        (!!address && address.length <= 25) ||
                        'Address must be less than 25 characters',
                      addressCheck
                    ]"
                    label="Address Line"
                    placeholder="Snowy Rock Pl"
                    counter="25"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="city"
                    v-model="city"
                    :rules="[
                      () => !!city || 'This field is required',
                      addressCheck
                    ]"
                    label="City"
                    placeholder="El Paso"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="state"
                    v-model="state"
                    :rules="[() => !!state || 'This field is required']"
                    label="State/Province/Region"
                    required
                    placeholder="TX"
                  ></v-text-field>
                  <v-text-field
                    ref="zip"
                    v-model="zip"
                    :rules="[() => !!zip || 'This field is required']"
                    label="ZIP / Postal Code"
                    required
                    placeholder="79938"
                  ></v-text-field>
                  <v-autocomplete
                    ref="country"
                    v-model="country"
                    :rules="[() => !!country || 'This field is required']"
                    :items="countries"
                    label="Country"
                    placeholder="Select..."
                    required
                  ></v-autocomplete>
                </v-card-text>
                <v-card-actions>
                  <v-btn>Edit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout> -->
        </v-card>
      </v-tab-item>
      <!-- ========================================================================================================== -->
      <!-- ======================================================= TABS 2 =========================================== -->
      <!-- ========================================================================================================== -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>2</v-card-text>
        </v-card>
      </v-tab-item>
      <!-- ========================================================================================================== -->
      <!-- ======================================================= TABS 3 =========================================== -->
      <!-- ========================================================================================================== -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>3</v-card-text>
        </v-card>
      </v-tab-item>
      <!-- ========================================================================================================== -->
      <!-- ======================================================= TABS 4 =========================================== -->
      <!-- ========================================================================================================== -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>4</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <!-- ======================================================= Card Pelajari Premium =========================================== -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex sm12 xs 12 md12 lg12>
          <v-card>
            <v-card-text>
              <h3 class="subheading">
                E-mail belum terverifikasi. Verifikasikan e-mail Anda sekarang.
              </h3>
              <v-btn flat color="orange">Share</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: null,
      tabs: [
        {
          title: 'Informasi Akun'
        },
        {
          title: 'No Rekening'
        },
        {
          title: 'Kontak'
        },
        {
          title: 'Alamat'
        }
      ],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
