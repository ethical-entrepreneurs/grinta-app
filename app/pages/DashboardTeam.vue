<template>
  <Page class="page page--dashboard-team">
    <ActionBar title="DktTeam Dashboard" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>

        <Button text="Créer un Grinta Challenge" class="btn btn--primary" @tap="CreateGrinta" />
        <Label text="Sportifs:" textWrap="true" class="title" />
        
        <StackLayout for="user in team.users">
          <v-template>
            <StackLayout>
              <Label :text="user.name" />
              <Label :text="user.email" />
            </StackLayout>
          </v-template>
        </StackLayout>

      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import GrintaTuto from "./GrintaTuto";
  import Grinta from '../services/Grinta';

  export default {
    props: ['teamId'],
    data() {
      return {
        team: {}
      }
    },
    mounted() {
      console.log("DashboardTeam");
      console.log(this.teamId);

      Grinta
        .teamsGet(this.teamId)
        .then(response => {
          this.team = response.data.data;

          console.log(this.team.users);
        })
        .catch(error => console.log(error));
    },
    methods: {
      CreateGrinta() {
        console.log('Create()')
         this.$navigateTo(GrintaTuto)
      },
    },
  }
</script>

<style scoped>
  .action-bar {
    padding: 0;
    margin-bottom: 20;
  }

  .title {
    font-size: 18;
    margin-top: 20;
    margin-bottom: 10;
  }
</style>
