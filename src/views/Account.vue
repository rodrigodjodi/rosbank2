<template>
    <h1>{{$store.state.smAccounts.userAccounts[$route.params.idconta].name}}</h1>
</template>

<script>
export default {
  name: "AccountView"
};
</script>

<style>
</style>
