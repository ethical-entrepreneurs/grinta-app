<template>
  <Page class="page page--create-team">
    <ActionBar class="action-back">
      <NavigationButton android.systemIcon="ic_menu_back" />
    </ActionBar>
    <FlexboxLayout justifyContent="space-between" flexDirection="column" class="container">
      <StackLayout>
        <Label text="Créer mon équipe" class="title" textWrap="true" />
        <Image src="~/assets/img/team-1.png" stretch="aspectFit" width="50%" class="team-img img-rounded" />

        <Label text="Nom de l'équipe" class="label" textWrap="true" />
        <TextField class="input" autocorrect=false />

      </StackLayout>
      <StackLayout>
        <Button text="Suivant" class="btn btn--primary" textWrap="true" @tap="next" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import InviteFriend from './InviteFriend';

  export default {
    methods: {
      next() {
        this.$navigateTo(InviteFriend);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .page {
    &--login {
      .team-img {
        margin-bottom: 50;
      }
    }
  }
</style>
