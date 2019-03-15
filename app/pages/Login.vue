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
  import InviteFriend from './InviteFriend';
  import axios from 'axios';

  export default {
    methods: {
      loginDecathlon() {
        console.log('login decathlon');

        // axios
        //   .get('https://api-eu.decathlon.net/connect/oauth/authorize?client_id=795e71b3-f738-4784-9107-6898ae00dd26&redirect_uri=https://jarvis01.synology.me:8444/confirm_login&response_type=code&state=tedst&scope=openid%20email%20profile')
        //   .then(response => console.log(response))
        //   .catch(error => console.error(error));

        this.$navigateTo(InviteFriend);
      },
      createAccount() {
        console.log('create account');
      }
    },
  }
</script>

<style scoped>
</style>
