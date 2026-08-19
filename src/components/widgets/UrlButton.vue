<template>
  <a :href="url" target="_blank">
        <v-hover v-slot="{ hover }">
            <v-icon :color="hover ? 'grey' : 'black'" size="30" class="mx-5">{{icon}}</v-icon>
        </v-hover>
    </a>
</template>

<script>
export default {
    name: 'Url-Button',
    props:{
        icon: String,
        url: String
    }
}
</script>

<style>

</style>