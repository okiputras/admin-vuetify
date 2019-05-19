<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <!-- if want center alignment ==> text-xs-center <== -->
      <div class="">
        <subcard />
        <tabs />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import subcard from '~/components/dashboard_subcard.vue'
import tabs from '~/components/dashboard_tabs.vue'
export default {
  components: {
    subcard,
    tabs
  },
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
    return {}
  }
}
</script>
