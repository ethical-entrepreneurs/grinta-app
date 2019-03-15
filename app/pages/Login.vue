<template>
  <Page class="page page--login">
    <ActionBar class="action-back">
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
  import Grinta from '../services/Grinta';
  import Store from '../services/Store';

  export default {
    methods: {
      loginDecathlon() {
        console.log('login decathlon');

        Grinta
          .me()
          .then(response => {
            console.log('users/me', response);
            Store.set('user', response.data);
            this.$navigateTo(CreateTeam);
          })
          .catch(error => {
            console.error(error);
          });
      },
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
