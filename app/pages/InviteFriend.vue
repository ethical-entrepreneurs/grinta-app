<template>
  <Page class="page page--add-friend">
    <ActionBar title="Grinta" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>
        <Label text="Félicitation !" textWrap="true" horizontalAlignment="center" class="title"/>
        <Image src="~/assets/icons/teamwork.png" stretch="aspectFit" width="50%" />
        <Label text="Invite tes amis !" textWrap="true" horizontalAlignment="center" class="sub-title"/>
        <Button text="Lien partageable" class="btn btn--primary" @tap="shareLink" />
        <Button text="Allez au dashboard" class="btn btn--secondary" @tap="goToDashboard" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import Dashboard from './Dashboard';
  import * as SocialShare from 'nativescript-social-share'

  export default {
    methods: {
      shareLink() {
        SocialShare.shareUrl("https://grinta.decathlon.fr/group?id=12fijez4F1", "Rejoins mon groupe sportif sur l'application Grinta !");
      },
      goToDashboard() {
        console.log('go to dashboard');
        this.$navigateTo(Dashboard);
      }
    },
  }
</script>

<style scoped>
  .action-bar {
    padding: 0;
    margin-bottom: 20;
  }

  .title {
    font-size: 32;
    margin-bottom: 20;
  }

  .sub-title {
    font-size: 28;
  }
</style>
