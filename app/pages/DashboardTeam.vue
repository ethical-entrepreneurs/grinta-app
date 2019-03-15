<template>
  <Page class="page page--dashboard-team">
    <ActionBar class="action action-back" :title="team.name || 'team dashboard'">
      <NavigationButton android.systemIcon="ic_menu_back" />
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <StackLayout class="content">
        <Button text="Créer un Grinta Challenge" class="btn btn--primary" @tap="CreateGrinta" />
        <FlexboxLayout flexDirection="column" class="bg">
          <Label text="Upcoming Grintas" class="title title__page" textWrap="true" horizontalAlignment="center"  />
          <StackLayout class="test" />
        </FlexboxLayout>
        <Label text="Grinta challenges à venir" class="title container" textWrap="true" />
        <ListView height="80%" class="list-group container" for="challenge in team.challenges" separatorColor="transparent">
          <v-template>

            <FlexboxLayout class="challenge" flexDirection="column" alignContent="space-between">
              <Label :text="challenge.name" class="challenge__name" />

              <FlexboxLayout class="challenge__container">
                <Image class="challenge__sport-icon" src="~/assets/icons/sport-foot.png" stretch="aspectFit" width="10%" />
                <FlexboxLayout class="challenge__description" flexDirection="column">
                  <Label class="challenge__sport" text="Challenge Football" />
                  <Label class="valid challenge__etat" text="8/8 payer" />
                </FlexboxLayout>
              </FlexboxLayout>

            </FlexboxLayout>
          </v-template>
        </ListView>
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
        team: {},
        users: [],
      }
    },
    mounted() {
      console.log("DashboardTeam");
      console.log(this.teamId);

      const self = this;

      Grinta
        .request(this.teamId)
        .then(response => {
          console.log(response.data);
          self.team = response.data;
          self.team.users.forEach(uri => {
            Grinta
              .request(uri)
              .then(response => self.users.push(response.data));
          });
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
