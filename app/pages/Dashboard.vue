<template>
  <Page class="page page--dashboard">
    <ActionBar flat="true">
      <StackLayout orientation="horizontal">
        <Image width="33%" src="~/assets/icons/person.png" @tap="seeGrintas" verticalAlignment="center" horizontalAlignment="left" stretch="none" />
        <Label width="33%" text="Grinta" fontSize="38px" verticalAlignment="center" />
        <Image width="33%" src="~/assets/icons/person.png" @tap="myAccount" verticalAlignment="center" horizontalAlignment="right" stretch="none" />
      </StackLayout>
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <StackLayout class="content">
        <Label text="Grintas disponible" class="title" />
        <ListView class="list-group" :for="grinta in grintas" style="height:75%">
          <v-template>
            <FlexboxLayout flexDirection="row">
              <Image src="~/assets/icons/person.png" />
              <FlexboxLayout flexDirection="column">
                <Label :text="grinta.name" />
                <Label :text="grinta.team" />
                <Label :text="grinta.score" />
              </FlexboxLayout>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  export default {
    methods: {
      seeGrintas() {
        console.log('see grintas');
      },
      myAccount() {
        console.log('my account');
      }
    },
    data() {
      return {
        grintas: [
          {
            name: "Grinta Futsal Only",
            team: "Los Hermanos de Fives",
            score: 1233
          },
          {
            name: "Grinta del fuego",
            team: "Don diego de le vega"
            
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 24px;
  }
  .content {
    margin: 38px;
  }
</style>
