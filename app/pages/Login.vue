<template>
  <Page class="page page--login">
    <FlexboxLayout flexDirection="column" justifyContent="space-around">
      <StackLayout>
        <Button text="Se connecter avec Décathlon" class="btn btn--primary" @tap="loginDecathlon" />
        <Label text="Ou" textWrap="true" horizontalAlignment="center"/>
        <Button text="Créer un compte" class="btn btn--secondary" @tap="createAccount" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import InviteFriend from "./InviteFriend";

  export default {
    methods: {
      loginDecathlon() {
        this.$navigateTo(InviteFriend);
      },
      // createAccount() {
      //   this.$navigateTo(DetailPeople);
      // },
    },
  }
</script>

<style scoped>
  /* .home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
  }

  .description-label {
    margin-bottom: 15;
  } */
</style>
