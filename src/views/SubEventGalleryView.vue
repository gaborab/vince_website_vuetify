<template>
  <div class="container">
    <Header class="mb-10 pb-8"></Header>
    
    <v-row class="ml-6 py-4 hidden-sm-and-down" align="center">
        <v-icon size="50" class="mt-10 pt-4 ml-6" color="black" @click="$router.go(-1)">mdi-arrow-left</v-icon>
        <p class="text-h3 text-lg-h2 font-weight-medium mt-10 pt-10 pl-8  pb-2">{{this.subfolderName}}</p>
    </v-row>

    <v-row class="hidden-md-and-up pb-4 pt-10" align="center">
        <div class="hidden-xs-only ml-5"></div>
        <v-icon size="40" class="ml-4" color="black" @click="$router.go(-1)">mdi-arrow-left</v-icon>
        <p class="ml-3 font-weight-medium text-sm-h4 text-h5 mt-4 mobileText">{{this.subfolderName}}</p>
    </v-row>
    <v-row align="center" justify="center" class="px-10">
        <v-col v-for="url in urls" :key="url" class="d-flex justify-center align-center flex-column " cols="12" lg="4" md="6" xl="3" sm="6">
            
                <v-hover v-slot="{ hover }" >
                
                    
                    <a :href="url" class="imgLink" target="_blank">
                        <v-img :src="url" height="350px" :class="hover? 'zoom' : 'zoomOut'" ></v-img>
                    </a>
                    
            
                </v-hover>
            
        </v-col>
    </v-row>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { getGalleryTopicData } from '@/api';

export default {
    

    name: 'Sub-Event-View',
    props:{
        topicName:String,
        subfolderName:String
    },
    components:{
        Header,
        Footer
    },
    data(){
        return {
            urls:[],
        }
    },
    created(){
        getGalleryTopicData(this.subfolderName).then((res) => {
            
            this.urls=res;
            
        });
    }
}
</script>

<style scoped>
    .container{
        max-width: 100%;
    }

    .zoom{
        transform: scale(1.08) !important;
        transition-duration: 300ms;
        transition-delay: 0ms;
    }

    .zoomOut{
        transform: scale(1.0) !important;
        transition-duration: 100ms;
        
    }

    .imgLink{
        width: 100% !important;
    }
    
    
</style>