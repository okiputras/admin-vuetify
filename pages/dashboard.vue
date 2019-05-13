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
  }
}
</script>
