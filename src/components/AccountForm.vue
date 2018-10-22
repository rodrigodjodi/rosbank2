<template>
  <v-layout column>
    <v-toolbar 
        flat 
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Nova conta</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="$emit('close')"
              >
                <v-icon>clear</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
    <v-form ref="form"
      v-model="valid" 
      class="px-2"
    >
      <v-text-field
        v-model="payload.name"
        :rules="rules.name"
        label="Nome"
        hint=""
        persistent-hint
        placeholder=""
        required
      />

      <v-text-field
        v-model="payload.balance"
        v-money
        :rules="rules.balance"
        label="Saldo"
        hint=""
        persistent-hint
        placeholder=""
        required
      />

      <v-btn @click="clear">limpar</v-btn>
      <v-btn color="primary"
      :disabled="!valid"
      @click="newAccoount"
      >
        nova conta
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  name: "AccountForm",
  data: () => ({
    valid: false,
    payload: {
      name: "",
      type: "",
      balance: 0,
      color: "#4D4D4D"
    },
    rules: {
      name: [
        v => !!v || "Esse campo é obrigatório.",
        v => (v.match("^[A-Za-z0-9- ]{2,16}$") ? true : "Padrão incorreto.")
      ],
      balance: [v => !!v || "Esse campo é obrigatório."]
    }
  }),
  methods: {
    clear() {
      this.payload = {
        name: "",
        type: "",
        balance: 0,
        color: "#4D4D4D"
      };
    },
    newAccoount() {
      this.$store
        .dispatch("smAccounts/create", this.payload)
        .then(() => {
          //TODO: notificação de confirmação
          this.clear();
          this.$emit("close");
        })
        .catch(err => {
          //TODO: tratamento de erro na interface
          console.error("Problema na criação: " + err);
        });
    }
  }
};
</script>
