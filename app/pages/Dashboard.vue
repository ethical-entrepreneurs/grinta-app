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
        <Label text="Grintas disponible" class="title"></Label>
        <ListView height="80%" class="list-group" for="team in teams">
          <v-template>
            <FlexboxLayout class="team" flexDirection="column" alignContent="space-between" @tap="goToTeam">
                <Label :text="team.name" class="team__name"></Label>
                <Label :text="`Score: ${team.score}`"></Label>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import DashboardTeam from "./DashboardTeam";

  export default {
    methods: {
      seeGrintas() {
        console.log('see grintas');
      },
      myAccount() {
        console.log('my account');
      },
      goToTeam() {
        console.log('go to team');
        this.$navigateTo(DashboardTeam);
      }
    },
    data() {
      return {
        teams: [
          {
            name: "Grinta Futsal Only",
            score: 1233
          },
          {
            name: "Grinta del fuego",
            score: 231
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  FlexboxLayout.team {
    Label.team__name {
      font-size: 18px;
    }
  }

  .title {
    font-size: 24px;
    margin-bottom: 38px;
  }
  .content {
    margin: 38px;
  }
</style>
