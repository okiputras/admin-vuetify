<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.count"
              v-bind="{ [`sm${card.flex}`]: true }"
            >
              <v-card>
                <v-card-title primary-title class="pb-0">
                  <div>
                    <h3 class="subheading">
                      <v-avatar class="grey" size="35">{{
                        card.count
                      }}</v-avatar>
                      {{ card.title }}
                    </h3>
                  </div>
                </v-card-title>
                <v-card-text
                  class="body-2 font-weight-regular pt-2 pb-2 pl-5 pr-4"
                >
                  {{ card.desc }}
                </v-card-text>
                <v-card-actions class="pt-2 pb-4">
                  <v-flex>
                    <div class="text-xs-center">
                      <v-btn color="info">Atur Produk Sekarang</v-btn>
                    </div>
                  </v-flex>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Atur Terminal',
        desc: 'Penjelasan tentang atur produk, kenapa harus atur dulu',
        count: 1,
        flex: 3
      },
      {
        title: 'Atur Terminal',
        desc: 'Penjelasan tentang atur produk, kenapa harus atur dulu',
        count: 2,
        flex: 3
      },
      {
        title: 'Atur Terminal',
        desc: 'Penjelasan tentang atur produk, kenapa harus atur dulu',
        count: 3,
        flex: 3
      },
      {
        title: 'Atur Terminal',
        desc: 'Penjelasan tentang atur produk, kenapa harus atur dulu',
        count: 4,
        flex: 3
      }
    ]
  })
}
</script>
