<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list class="pt-0">
        <!-- manual list -->
        <v-list-tile to="/dashboard">
          <v-list-tile-action>
            <v-icon>credit_card</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-title>Transaksi</v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
        <!-- end manual list -->
        <!-- group -->
        <v-list-group
          v-for="item in itemsku"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            to="/dashboar"
          >
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <!-- endgroup -->
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <!-- manual list -->
        <v-list-tile router exact @click.stop="miniVariant = !miniVariant">
          <v-list-tile-action>
            <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-title>Sembunyikan</v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
        <!-- end manual list -->
      </v-list>
    </v-navigation-drawer>
    <!-- toolbar right -->
    <v-toolbar class="white darken-4" :clipped-left="clipped" fixed app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Serpul</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar class="mr-0" size="36"
        ><img src="http://i.pravatar.cc/150?img=53"
      /></v-avatar>
      <v-menu class="ml-0" offset-y="offset-y">
        <v-btn slot="activator" flat="flat" small="small" color="black"
          >John Doe
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-icon class="mr-2">settings</v-icon>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-icon class="mr-2">exit_to_app</v-icon>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- end toolbar right -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-flex>
        <div class="text-xs-center">
          <p class="text-xs-center">SERPUL &copy; 2019</p>
        </div>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'account_balance_wallet',
          title: 'Keuangan ',
          to: '/inspire'
        },
        {
          icon: 'settings',
          title: 'Pengaturan ',
          to: '/inspire'
        },
        {
          icon: 'help',
          title: 'Butuh Bantuan? ',
          to: '/inspire'
        },
        {
          icon: 'assignment_return',
          title: 'Keluar ',
          to: '/inspire'
        }
      ],
      itemsku: [
        {
          action: 'person',
          title: 'Administrator',
          items: [
            { title: 'Prefix Operator' },
            { title: 'Product Terminal' },
            { title: 'Terminal' },
            { title: 'Daftar Reseller' }
          ]
        },
        {
          action: 'folder',
          title: 'Laporan',
          items: [
            { title: 'Prefix Operator' },
            { title: 'Product Terminal' },
            { title: 'Terminal' },
            { title: 'Daftar Reseller' }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Vuetify.js'
    }
  }
}
</script>
