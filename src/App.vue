<template>
  <div id="app">
    <v-app style="background: #F8F7F2;" >
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
