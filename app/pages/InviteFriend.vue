<template>
  <Page class="page page--add-friend">
    <ActionBar class="action-back">
      <NavigationButton android.systemIcon="ic_menu_back" />
    </ActionBar>

    <FlexboxLayout justifyContent="space-between" flexDirection="column">
      <StackLayout>
        <Image src="~/assets/img/congrat-img.png" stretch="aspectFit" width="65%" />
        <Label text="Congrats !" textWrap="true" horizontalAlignment="center" class="title"/>
        <Label text="Ton équipe a bien été créee" textWrap="true" class="sub-title" />
        <Label text="Invite tes amis à la rejoindre ! " textWrap="true" class="sub-title" />
      </StackLayout>

      <StackLayout>
        <Button text="Partage le lien" class="btn btn--primary" textWrap="true" @tap="shareLink" />
        <Button text="Non merci" class="btn btn--secondary" textWrap="true" @tap="goToDashboard" />
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
        // this.goToDashboard()
      },
      goToDashboard() {
        console.log('go to dashboard');
        this.$navigateTo(Dashboard);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page {
    &--add-friend {
      background-color: #49B2DC;

      Image {
        top: 40;
      }

      .title {
        color: white;
        margin-bottom: 20;
      }

      .sub-title {
        color: white;
        margin: 0;
      }
    }
  }
</style>
