<template>
  <Page class="page page--login">
    <FlexboxLayout flexDirection="column" justifyContent="space-around">
      <StackLayout>
        <Label text="cocuou"/>
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
      }
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
