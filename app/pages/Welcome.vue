<template>
  <Page class="page page--home">
    <FlexboxLayout flexDirection="column" justifyContent="space-around">
      <StackLayout>
        <Image src="~/assets/img/logo.png" stretch="aspectFit" class="logo" />
        <Label
          text="L’application de challenges sportifs entre amis ! "
          textWrap="true"
          horizontalAlignment="center"
          class="slogan"
        />
        <Button text="On y va !" class="btn btn--bg" @tap="goToNextPage" />
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
  }
};
</script>

<style scoped lang="scss">
.page {
  &--home {
    background-image: url("~/assets/img/bg-hp.png");
    background-size: cover;

    .logo {
      width: 70%;
    }

    .slogan {
      color: white;
      font-size: 21px;
      width: 80%;
      text-align: center;
      margin-top: 10;
      margin-bottom: 80;
    }
  }
}
</style>
