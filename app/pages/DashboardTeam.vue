<template>
  <Page class="page page--dashboard-team">
    <ActionBar title="DktTeam Dashboard" class="action-bar" />
    <FlexboxLayout flexDirection="column">
      <StackLayout>

        <Button text="Create un Grinta Challenge" class="btn btn--primary" @tap="CreateGrinta" />
        <Label text="Sportifs:" textWrap="true" class="title" />
        
        <ListView for="user in team.users">
          <v-template>
            <StackLayout>
              <Label :text="user.name" />
            </StackLayout>
          </v-template>
        </ListView>

      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import GrintaTuto from "./GrintaTuto";

  export default {
    data() {
      return {
        team: {
          users: [
            {
              name: 'Eddy Malou'
            },
            {
              name: 'Sylvain Durif'
            },
          ],
        },
      }
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
