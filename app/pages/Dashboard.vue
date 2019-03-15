<template>
  <Page class="page page--dashboard">
    <ActionBar class="action action-back" title="Mes teams">
      <NavigationButton android.systemIcon="ic_menu_back" />
    </ActionBar>
    <FlexboxLayout flexDirection="column">
      <StackLayout class="content">
        <FlexboxLayout flexDirection="column" class="bg">
          <Label text="TeamDeOuf" class="title title__page" textWrap="true" horizontalAlignment="center"  />
          <StackLayout class="test" />
        </FlexboxLayout>
        <Label text="Grinta challenges à venir" class="title container" textWrap="true" />
        <ListView height="80%" class="list-group container" for="team in teams" separatorColor="transparent">
          <v-template>
            <FlexboxLayout class="challenge" flexDirection="column" alignContent="space-between" @tap="goToTeam(team.identifier)">
              <Label :text="team.name" class="challenge__name" />

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
  import DashboardTeam from './DashboardTeam';
  import Grinta from '../services/Grinta';

  export default {
    methods: {
      seeGrintas() {
        console.log('see grintas');
      },
      myAccount() {
        console.log('my account');
      },
      goToTeam(identifier) {
        console.log('go to team', identifier);
        this.$navigateTo(DashboardTeam, { props: { teamId: identifier }});
      }
    },
    data() {
      return {
        teams: []
      }
    },
    mounted: function () {
      console.log('mounted');

      Grinta.teamsMine()
        .then(response => {
          console.log('grinta teams mine response');
          this.teams = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
</script>

<style lang="scss" scoped>
  .page {
    &--dashboard {
      background-color: #F5F5F6;

      .test {
        width: 100%;
        height: 200;
        border-style: solid;
        border-width: 0 0 100% 500;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #F5F5F6;
        border-left-color: transparent;
        margin-top: -150;
      }
      .bg {
        background-image: url('~/assets/img/bg-team.png');
        text-align: center;
        display: flex;
      }

      .title {
        margin-top: 30;
      }

      .title__page {
        width: 100%;
        color: #fff;
        text-align: center;
        margin-left: 100;
        margin-top: 50;
      }

      .challenge {
        background: #FFF;
        padding: 20;

        &__name {
          font-size: 28;
          font-weight: bold;
          font-style: italic;
        }

        &__container{
          /*background: #D8D8D8;*/
          padding: 10;
        }

        &__sport {
          font-size: 16;

          &-icon {
            margin-right: 20;
          }
        }

        &__etat {
          font-size: 16;

          &.valid {
            color: #02BE8A;
          }
        }
      }

      .title {
        text-align: left;
      }

      .list-group {
        background-color: transparent;
      }

      .team {
        background: white;
        padding: 10 20;
        margin-bottom: 10px;
      }
    }
  }
</style>
