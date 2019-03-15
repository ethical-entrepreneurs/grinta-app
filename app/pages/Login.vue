<template>
  <Page class="page page--login">
    <ActionBar class="action action-back">
      <NavigationButton android.systemIcon="ic_menu_back" />
    </ActionBar>
    <FlexboxLayout flexDirection="column" class="container">
      <StackLayout>
        <Label text="Connexion" class="title" textWrap="true" />
        <Label text="Pour créer ton premier challenge connecte toi !" textWrap="true" class="sub-title" />
        <Button text="Connexion ou inscription avec Decathlon" class="btn btn--primary" textWrap="true" @tap="loginDecathlon" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import CreateTeam from './CreateTeam';
  import axios from 'axios';

  export default {
    methods: {
      loginDecathlon() {
        console.log('login decathlon');

        // axios
        //   .get('https://api-eu.decathlon.net/connect/oauth/authorize?client_id=795e71b3-f738-4784-9107-6898ae00dd26&redirect_uri=https://jarvis01.synology.me:8444/confirm_login&response_type=code&state=tedst&scope=openid%20email%20profile')
        //   .then(response => console.log(response))
        //   .catch(error => console.error(error));

        this.$navigateTo(CreateTeam);
      },
      createAccount() {
        console.log('create account');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page {
    &--login {
      .btn {
        font-size: 12;
        text-align: center;
      }
    }
  }
</style>
