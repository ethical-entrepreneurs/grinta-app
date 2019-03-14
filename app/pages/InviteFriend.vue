<template>
  <Page class="page page--add-friend">
    <!-- <ActionBar title="Home" class="action-bar" /> -->
    <FlexboxLayout flexDirection="column">
      <Label text="Félicitation" textWrap="true" horizontalAlignment="center"/>
      <Image src="~/assets/icons/teamwork.png" stretch="aspectFit" />
      <Label text="Invite tes amis" textWrap="true" horizontalAlignment="center"/>
      <Button text="Lien partageable" class="btn btn--primary" @tap="shareLink" />
    </FlexboxLayout>
  </Page>
</template>

<script>
  export default {
    methods: {
      shareLink() {
        console.log('share');
      },
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
