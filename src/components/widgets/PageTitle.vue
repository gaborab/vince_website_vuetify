<template>
    <div class="pt-10 mt-10">
            <p :class="this.$vuetify.breakpoint.smAndDown ? 'text-h3 text-md-h2 font-weight-light my-10 text-center'
             :'text-h3 text-md-h2 font-weight-light my-10 py-10 text-center'">{{this.text}}</p>
        </div>
</template>

<script>
    export default {
      name: "Page-Title",
      props: {
          text: String,
      }
      
  }
</script>

<style scoped>

</style>