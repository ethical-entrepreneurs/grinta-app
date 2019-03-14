<template>
  <Page class="page page--login">
    <FlexboxLayout flexDirection="column" justifyContent="space-around">
      <StackLayout>
        <Button text="Se connecter avec Décathlon" class="btn btn--primary" @tap="loginDecathlon" />
        <Label text="Ou" textWrap="true" horizontalAlignment="center"/>
        <Button text="Créer un compte" class="btn btn--secondary" @tap="createAccount" />
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  import InviteFriend from "./InviteFriend";
  import axios from "axios";

  export default {
    methods: {
      loginDecathlon() {
        const testAPI = "http://event.event-api-nginx.traefik-crm-europe-pic.preprod.subsidia.org/v1/groups";
        const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ik1BSU4ifQ.eyJzY29wZSI6WyJwcm9maWxlIiwib3BlbmlkIl0sImNsaWVudF9pZCI6ImRmZjM0NDUzMDIwNDc4ZGMyZjJlMDgzYmExYjBiYTU4MTFkNWE0NjciLCJpc3MiOiJpZHBkZWNhdGhsb24ucHJlcHJvZC5vcmciLCJqdGkiOiJxaWt5U0lZTzhZIiwic3ViIjoiWjAzQURBSSIsInVpZCI6IlowM0FEQUkiLCJleHAiOjE1NTI1NjkzNDZ9.em17ZuVD6t9DPx_2s9RA_ZGHwTt3ngiVsMuU6iec5aq3AXjlRKrgRlHFEC2foFiqdCXuYBVlO-TcwdPeIdvMypc4aExz_DzVZ9G73ozFcJVa9jsdJzcwae0zaFmfoIzgxdT6a45v2lkiQRj766Y7hUc9FcMEPTwrygIdWHHI0zFIysyU9cvZVn5DeMIfOSfKbf7RoLBW9LBb_6w4D4gmqAsCJ-nGoRxAM25ZyAo956VvwMm4gqVZm4hJXjc-AIL_RID1p2WCsVxo4NGHhkFabSYGJcRx1OGjjWtbWg93CN8HgxiZd8Gi5_zeNmyLNuyvber5IEBhLjUeOW3zvYKyOQ';

        const eventParams = {
          method: "GET",
          url: testAPI,
          headers: {
            'x-api-key': 'Y',
            'Authorization': `Bearer ${token}`,
            'cache-control': 'no-cache',
            'Accept': 'application/json'
          }
        };

        const params = { method: "GET", "url": "https://pokeapi.co/api/v2/pokemon/?limit=151" };

        axios(params).then(result => {
          console.log(result);
          this.$navigateTo(InviteFriend);
        }).catch(error => {
          console.error(error);
        });

      },
    },
  }
</script>

<style scoped>
</style>
