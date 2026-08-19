<template>
  <div>
    
                        
        <v-img :src="this.img" height="200">
                <div class="white--text pt-4 pl-5">
                    <div class="smImgText px-2 rounded-lg"><p class="text-h5 font-weight-700 py-2">{{this.title}}</p></div>
                    <div class="my-5"></div>
                    <div class="smImgButton">
                        <v-btn class="white--text ml-n3 mt-n3 " small color="black">
                            <v-icon size="20">mdi-arrow-right</v-icon>
                            Visit Page
                        </v-btn>
                    </div>
                </div>
        </v-img>
                    
  </div>
</template>

<script>
export default {
    name: 'Mobile-Gallery-Widget',
    props: {
        title: String,
        route: String,
        img: String
    }
}
</script>

<style scoped>
    .smImgText{
        background-color: black;
        width: fit-content;
    }

    .smImgButton{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .v-btn{
        height: 35px !important;
    }

    .v-btn:not(.v-btn--round).v-size--small {
        padding: 0 6px !important;
    }
</style>