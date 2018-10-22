<template>
  <account-list ></account-list>
</template>

<script>
import { mapState } from "vuex";
import AccountList from "@/components/AccountList";
export default {
  components: { AccountList },
  created() {
    this.$store.dispatch("smAccounts/retrieveUserAccounts");
  }
};
</script>
