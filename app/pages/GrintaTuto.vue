<template>
  <Page class="page page--grinta-tuto">
    <ActionBar title="Creation d'une Grinta" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>
        <Label text="La Grinta c'est quoi ?" textWrap="true" horizontalAlignment="center" class="title"/>
        
        <FlexboxLayout class="description__container">
          <Label text="3 " class="description__number"/>
          <Label text="Sports" class="description__item"/>
        </FlexboxLayout>

        <FlexboxLayout class="description__container">
          <Label text="3 " class="description__number"/>
          <Label text="Challenges" class="description__item"/>
        </FlexboxLayout>

        <FlexboxLayout class="description__container">
          <Label text="3 " class="description__number"/>
          <Label text="fois plus de fun !" class="description__item"/>
        </FlexboxLayout>

        <Button text="Créer le 1er challenge" class="btn btn--primary" @tap="next" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import GrintaChooseSport from "./GrintaChooseSport";

export default {
  methods: {
    next() {
      this.$navigateTo(GrintaChooseSport);
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
