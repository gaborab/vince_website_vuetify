<template>
    <v-btn :to="route" text color="black"><span class="buttontext text-capitalize">{{text}}</span></v-btn>
  </template>
  
  <script>
  export default {
      name: "Header-Button",
      props: {
          text: String,
          route: String
      }
      
  }
  </script>
  
<style>
    .buttonText{
        font-size: 22px;
        font-family: 'Quicksand';
    }

    .v-btn{
        height: 52px !important;
    }

    .div{
        width: fit-content;
    }
</style>

        