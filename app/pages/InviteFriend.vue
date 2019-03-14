<template>
  <Page class="page page--add-friend">
    <ActionBar title="Grinta" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>
        <Label text="Félicitation !" textWrap="true" horizontalAlignment="center" class="title"/>
        <Image src="~/assets/icons/teamwork.png" stretch="aspectFit" width="50%" />
        <Label text="Invite tes amis !" textWrap="true" horizontalAlignment="center" class="sub-title"/>
        <Button text="Lien partageable" class="btn btn--primary" @tap="shareLink" />
      </StackLayout>
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
  .action-bar {
    padding: 0;
    margin-bottom: 20vm;
  }

  .title {
    font-size: 32px;
    margin-bottom: 20vm;
  }

  .sub-title {
    font-size: 28px;
  }
</style>
