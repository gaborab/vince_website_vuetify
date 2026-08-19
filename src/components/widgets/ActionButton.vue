<template>
  <div class="text-center mb-10"><v-btn :to="route" dark class="py-8" @click="onPressed"><span class="buttonText text-capitalize pa-2">{{text}}</span></v-btn></div>
</template>

<script>
export default {
    name: "Action-Button",
    props: {
        text: String,
        onPressed: Function,
        route:String
    }
    
}
</script>

<style>
    .buttonText{
        font-size: 22px;
        font-family: 'Quicksand';
    }
</style>