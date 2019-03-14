<template>
  <Page class="page page--home">
    <FlexboxLayout flexDirection="column" justifyContent="space-around">
      <StackLayout>
        <Label text="Bienvenue sur" textWrap="true" horizontalAlignment="center"/>
        <Image src="~/assets/img/logo.png" stretch="aspectFit" />
      </StackLayout>
      <StackLayout>
        <Label text="l'app de challenge sportif entre amis !" textWrap="true" horizontalAlignment="center"/>
        <Button text="Let's Go !" class="btn btn--primary" @tap="goToNextPage" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Login from "./Login";
  export default {
    methods: {
      goToNextPage() {
        this.$navigateTo(Login);
      }
    },
  }
</script>