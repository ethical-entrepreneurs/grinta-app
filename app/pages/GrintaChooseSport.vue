<template>
  <Page class="page page--grinta-tuto">
    <ActionBar title="Creation d'une Grinta" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>
        <Label text="Choisis ton sport" textWrap="true" horizontalAlignment="center" class="title"/>
        
        <ListPicker :items="sports" selectedIndex="0"></ListPicker>

        <Button text="Suivant" class="btn btn--primary" @tap="next" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  export default {
    data() {
      return {
        sports: [
          'Foot',
          'Handball',
          'Rugby',
        ],
      }
    },
    methods: {
      next() {
        this.$navigateTo(InviteFriend);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .action-bar {
    padding: 0;
    margin-bottom: 20;
  }

  .title {
    font-size: 32;
    margin-bottom: 20;
    margin-top: 20;
  }

  .description {
    &__container {
      margin-bottom: 10;
    }

    &__item {

    }

    &__number {
      width: 30;
      height: 30;
      background-color: yellow;
      border-radius: 50%;
      text-align: center;
      border: 1px solid black;
      margin-right: 10;
    }
  }
</style>
