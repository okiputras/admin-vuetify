<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md6>
      <img src="~/assets/img/landing-Banner-2x.png" />
    </v-flex>
    <v-flex xs6 sm6 md6>
      <v-container>
        <p
          class="display-1 font-weight-medium mt-5
"
        >
          Rasakan Kenyamanan Bertransaksi
        </p>
        <p
          class="display-1 font-weight-medium
"
        >
          Cepat Dan Aman Dengan Hraga Murah.
        </p>
        <p class="body-2 grey--text font-weight-black">
          Bergabung Degan Serpul.id Sekrang!
        </p>
        <v-layout row wrap>
          <v-flex xs810 sm10 md10>
            <v-form ref="form" v-model="valid">
              <label class="font-weight-light grey--text require">
                Nama Lengkap Anda
              </label>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                outline
                class="mt-1 mb-0"
              ></v-text-field>
              <label class="font-weight-light grey--text require">
                Email
              </label>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                required
                outline
                class="mt-1 mb-0"
              ></v-text-field>
              <label class="font-weight-light grey--text require">
                Nomor Handphone
              </label>
              <v-text-field
                v-model="nohandphone"
                :rules="nohandphoneRules"
                outline
                class="mt-1 mb-0"
              ></v-text-field>
              <label class="font-weight-light grey--text require">
                Password(minimal 8 karakter kombinasi huruf dan angka)
              </label>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                outline
                class="mt-1 mb-0"
              ></v-text-field>
              <v-btn
                block
                color="rgb(73, 188, 247)"
                depressed=""
                dark
                :class="{ red: !valid, green: valid }"
                @click="submit"
                >Buat Akun</v-btn
              >
              <v-card flat="">
                <p class="text-md-center grey--text subheading">
                  Atau
                </p>
              </v-card>
              <v-btn block outline="" color="rgb(73, 188, 247)">Login</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<style lang="stylus" scoped src="./index.styl"></style>
<script>
export default {
  layout: 'plain',
  head() {
    return {
      title: process.env.SERPUL_APP_TITLE,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'dashboard_serpul',
          name: 'description',
          content: 'dashboard server pulsa'
        },
        {
          hid: 'server_pulsa_keywords',
          name: 'keywords',
          content: 'server_pulsa,pulsa,pulsa_murah'
        }
      ]
    }
  },
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'Name must be less than 5 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v =>
          /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ],
      nohandphone: '',
      nohandphoneRules: [
        v => !!v || 'No Handphone is required',
        v => /^[0]\d*$/.test(v) || 'No Handphone begin with 0',
        v =>
          (v && v.length >= 10 && (v && v.length <= 13)) ||
          'lenght must 10 - 13'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v =>
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) ||
          'passowrd must combine alphanumeric',
        v => (v && v.length >= 8) || 'minimal length must 8 or higher'
      ]
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate()
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>
