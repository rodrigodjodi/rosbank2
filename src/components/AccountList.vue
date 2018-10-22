
<template>
  <v-list two-line>
    <v-list-tile v-for="(account, id) in userAccounts" :key="id"
        :style="`border-left-color:${account.color.hex}`">
      <v-list-tile-content @click="$router.push(`/contas/${id}`)">
          <v-list-tile-title>{{account.name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{account.balance}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>inboxes</v-icon>
        </v-list-tile-action>
      </v-list-tile>
  </v-list>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AccountList",
  components: {},
  computed: {
    ...mapState({
      userAccounts: state => state.smAccounts.userAccounts,
      userEmail: state => state.smUser.user.email
    })
  },
  created() {},
  destroyed() {
    console.log("accountList destroyed");
  }
};
</script>

<style>
</style>