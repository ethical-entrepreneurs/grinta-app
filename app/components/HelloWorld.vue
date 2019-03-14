<template>
  <Page class="page">
    <ActionBar title="Home" class="action-bar" />
    <ScrollView>
      <StackLayout class="home-panel">
        <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  export default {
    data() {
      return {};
    },
  }
</script>

<style scoped>
  .home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
  }

  .description-label {
    margin-bottom: 15;
  }
</style>
