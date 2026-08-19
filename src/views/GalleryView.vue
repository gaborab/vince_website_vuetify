<template>
    <div>
        <Header></Header>
        <PageTitle text="Gallery"></PageTitle>
        <v-row class="hidden-sm-and-down">
            <v-spacer></v-spacer>
            
                
            <v-col v-for="galleryType in this.types" :key="galleryType.name" cols="3" class="my-2">
                <v-hover v-slot="{ hover }">
                    <v-card :to="galleryType.route">
                        
                            <v-img :src="galleryType.img" height="1000">
                                <v-fade-transition>
                                    <div v-if="hover" class=" cover white--text pt-10 pl-10 black">
                                        <p class="text-h3 font-weight-700 pt-4">{{galleryType.name}}</p>
                                        <v-btn class="white--text pb-8" text plain>
                                            <v-icon color="" size="20">mdi-arrow-right</v-icon>
                                            Visit Page
                                        </v-btn>
                                    </div>
                                    
                                </v-fade-transition>
                            </v-img>
                        
                    </v-card>
                </v-hover>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        <v-row class="hidden-md-and-up mx-6">
            <v-card :to="galleryType.route" v-for="galleryType in this.types" :key="galleryType.name" class="mb-2">
                <MobileGalleryWidget :img="galleryType.img" :title="galleryType.name"></MobileGalleryWidget>
            </v-card>
            
        </v-row>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/widgets/PageTitle.vue";
import Footer from "@/components/Footer.vue";
import MobileGalleryWidget from "@/components/widgets/MobileGalleryWidget.vue";

export default {


    name: 'Gallery-View',
    components:{
        Header,
        PageTitle,
        Footer,
        MobileGalleryWidget
    },
    data(){
        return { 
            types: [
                {
                    img: "https://storage.googleapis.com/vinceportfolio-1660492063078.appspot.com/concerts/Concert%201/_MG_1664.jpg",
                    name: "Events",
                    route: "/events",
                    
                },
                {
                    img: "https://storage.googleapis.com/vinceportfolio-1660492063078.appspot.com/concerts/concert.jpg",
                    name: "Concerts",
                    route: "/concerts",
                    
                },
                {
                    img: "https://storage.googleapis.com/vinceportfolio-1660492063078.appspot.com/sports/gokart.jpg",
                    name: "Sports",
                    route: "/sports",
                    
                }
            ]
        }
        
    }
}
</script>

<style scoped>
    .cover{
        opacity: 0.8;
        height: 100%;
        color: transparent;
    }

    
</style>