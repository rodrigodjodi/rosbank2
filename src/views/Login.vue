<template>
 <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card flat>
          <v-card-title primary-title>
            <h1>Login</h1>
          </v-card-title>
          <v-card-actions>
              <v-btn @click="signIn"
               primary large block
              >Entrar com o Google</v-btn>
            </v-card-actions>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {};
  },
  methods: {
    signIn() {
      this.$store.dispatch("smUser/handleSignIn");
    }
  }
};
</script>
