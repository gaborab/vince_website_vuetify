<template>
    <div>
      <Header class="pb-10 mb-10"></Header>
      <v-parallax :src="this.titleImg" height="600" class="mt-10 pt-10 hidden-sm-and-down">
        <div class="pt-1">
            <v-divider></v-divider>
            <p class="font-weight-medium text-center titleText">{{this.title}}</p>
            <v-divider></v-divider>
        </div>
      </v-parallax>
      <div class="mobileimgtext hidden-md-and-up">
            <v-img :src="this.titleImg" class="mobileintro"  height="220"></v-img>
            <hr class="mobilehr1">
            <h1 class="font-weight-medium titleText mobileTitleText text-center white--text text-no-wrap">{{this.title}}</h1>
            <hr class="mobilehr2">
      </div>
      
      <v-row justify="center" class="mt-10 hidden-sm-and-down">
        <v-col v-for="folderData in data" :key="folderData.name" cols="12" class="d-flex flex-column  align-center">
          
          <v-hover v-slot="{ hover }">
            <v-card width="60%" @click="switchPage(folderData.name)" >
                <v-img :src="folderData.coverUrl" height="500"/>
                    <template v-slot:placeholder>
                        <div class="align-center justify-center fill-height">
                            <v-progress-circular indeterminate color="grey"></v-progress-circular>
                        </div>
                    </template>
                    <v-fade-transition>
                        <div v-if="hover" class="cover white--text black textdiv">
                            <p class="text-h3 font-weight-light pt-10 mt-10">{{folderData.name}}</p>
                            <v-btn class="white--text pb-8" text plain>
                                <v-icon color="" size="20" >mdi-arrow-right</v-icon>
                                Visit Page
                            </v-btn>
                        </div>
                        
                    </v-fade-transition>
                
            </v-card>
        </v-hover>
        </v-col>
      </v-row>

      <v-row class="hidden-md-and-up mx-6" >
        <v-card v-for="folderData in data" :key="folderData.name" class="mb-2" @click="switchPage(folderData.name)">
          <MobileGalleryWidget :img="folderData.coverUrl" :title="folderData.name"></MobileGalleryWidget>
        </v-card>
      </v-row>
      
      <Footer></Footer>
    </div> 
  </template>
  
<script>
  
  import {getSubfolders} from '@/api.js';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import router from '@/router';
  import MobileGalleryWidget from '@/components/widgets/MobileGalleryWidget.vue';
  
  export default {
    
    
    name: 'TopicView',
    components: {
      Header,
      Footer,
      MobileGalleryWidget
    },
    props:{
        title: String,
        storageAddress: String,
        titleImg: String
    },
    
    data(){
      return {
        data:[],
        loading: true,
      }
    },
  
    created(){
      
      // getSubfolderData(this.storageAddress).then((res) => {
        
      //   this.data=res;
      //   this.loading=false;
      //   this.data.sort();
      // });
      getSubfolders(this.storageAddress, true).then(res => {
        this.data=res;
      });
      
    },
    methods:{
        switchPage(folderName){
            
            router.push({
                name: 'SubEventPage',
                params: {
                    'topicName' : this.storageAddress,
                    'subfolderName' : folderName
                }
            })
        }
    }
  
    
  }
</script>
  
<style scoped>
  .textdiv{
    padding-left: 95px !important;
    /* margin-top:50px !important; */
    bottom: 0;
    position: absolute;
    width: 100%;
    
  }

  .titleText{
    font-size: calc(32px + 1.8vw) !important;
  }

  .v-divider{
    border-color: white !important;
    width: 8vw !important;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .cover{
        opacity: 0.8;
        height: 100%;
        color: transparent;
  }

  .mobileimgtext{
        position: relative;
        height: 280px;
        overflow: hidden;
    }
    .mobileTitleText, .mobilehr1, .mobilehr2{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mobilehr1{
      top: 50%;
      width: 30%;
      max-width: 110px;
    }
    .mobilehr2{
      top: 30%;
      width: 30%;
      max-width: 110px;
    }
</style>