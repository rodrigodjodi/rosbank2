<template>
  <v-app id="inspire" dark>
<!-- DRAWER ESQUERDA -->
    <v-navigation-drawer v-if="user"
      v-model="drawer"
      :mini-variant.sync="mini"
      mini-variant-width="80"
      fixed
      permanent
      app
      clipped
    >
      <v-list>
        
      </v-list>
    </v-navigation-drawer>
<!-- TOOLBAR TOPO -->
    <v-toolbar v-if="user"
      color="blue-grey" 
      dark 
       clipped-right
       clipped-left
      app>
      <v-toolbar-side-icon @click.stop="mini = !mini"></v-toolbar-side-icon>
      
      <v-toolbar-title>{{ $route.meta.title }}</v-toolbar-title>
      <v-spacer/>
      <v-btn icon v-if="!drawerRight" @click.stop="drawerRight = true">
        <v-icon>add</v-icon>
      </v-btn>
      <v-menu bottom left>
        <v-avatar slot="activator">
          <v-icon dark>account_circle</v-icon>
        </v-avatar>
        <v-list>
          <v-list-tile @click="signOut">
            <v-list-tile-title>Sair</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
<!-- DRAWER DIREITA -->
    <v-navigation-drawer v-if="user"
    clipped
      v-model="drawerRight"
      right
      app
    >
      
    </v-navigation-drawer>
    
    <v-content>
      <router-view/>
    </v-content>
  
    <v-footer 
      color="blue-grey" 
      class="white--text" 
      app>
      <span>Djodi</span>
      <span ref="tooltip"></span>
      <v-spacer/>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {

  },
  props: {
    source: String
  },
  data: () => ({
    drawer: true,
    drawerRight: false,
    right: null,
    left: null,
    mini: true,
  }),
  computed: {
    ...mapState({
      user: state => state.smUser.user
    })
  },
  methods: {
    ...mapActions({
      signOut: 'smUser/handleSignOut'
    })
  }
};
</script>
