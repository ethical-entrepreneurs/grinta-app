<template>
  <Page class="page page--add-friend">
    <ActionBar title="Grinta" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>
        <Label text="Félicitation !" textWrap="true" horizontalAlignment="center" class="title"/>
        <Image src="~/assets/icons/teamwork.png" stretch="aspectFit" />
        <Label text="Invite tes amis !" textWrap="true" horizontalAlignment="center"/>
        <Button text="Lien partageable" class="btn btn--primary" @tap="shareLink" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import * as SocialShare from 'nativescript-social-share'
  
  export default {
    methods: {
      shareLink() {
        SocialShare.shareUrl("https://grinta.decathlon.fr/group?id=12fijez4F1", "Rejoins mon groupe sportif sur l'application Grinta !");
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
  }
</style>
