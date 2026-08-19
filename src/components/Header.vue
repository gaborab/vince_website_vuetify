<template>
    <nav>
        <div class="headerDiv">
            <v-app-bar color="white"  height="90" hide-on-scroll fixed>
            
                <router-link to="/">
                    <v-app-bar-title class="hidden-sm-and-down">Pipoly Vince</v-app-bar-title>
                    <v-app-bar-title class="hidden-md-and-up smallTitle">Pipoly Vince</v-app-bar-title>
                </router-link>
                
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon class="hidden-md-and-up black--text mr-1" @click="toggleAppDrawer"></v-app-bar-nav-icon>
                
                <v-navigation-drawer app v-model="drawerOpen" temporary right>
                    <v-row >
                        <v-col>
                            <p class="drawerTitle mt-6 text-center px-5">Pipoly Vince</p>
                            
                            <v-list >
                                <v-list-item v-for="link in links" :key="link.pageName">
                                    <v-list-item-content>
                                        <!-- <v-list-item-title>{{link.pageName}}</v-list-item-title> -->
                                        
                                        <HeaderButton :text="link.pageName" :route="link.route"></HeaderButton>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                            <div class="text-center mt-2"><UrlButton icon="fa-brands fa-instagram" url="https://www.instagram.com/pvincephoto/"></UrlButton></div>
                            <div class="text-center drawerCloseButton"><v-btn @click="toggleAppDrawer" text color="black"><v-icon>fa-times</v-icon></v-btn></div>
                        </v-col>
                    </v-row>
                </v-navigation-drawer>

                <div class="hidden-sm-and-down">
                    <!-- <v-btn text color="black"><span class="buttontext text-capitalize mr-1">Biography</span></v-btn> -->
                    <v-row align="center">
                        <HeaderButton text="Biography" class="mr-2" route="/biography"></HeaderButton>
                        <HeaderButton text="Gallery" class="mr-2" route="/gallery"></HeaderButton>
                        <HeaderButton text="Contact" class="mr-2" route="/contact"></HeaderButton>
                        <!-- <v-btn text color="black"><span class="buttontext text-capitalize mr-1">Gallery</span></v-btn>
                        <v-btn text color="black"><span class="buttontext text-capitalize mr-6">Contact</span></v-btn> -->
                        <!-- <v-divider vertical class="mx-3 mt-4" inset></v-divider> -->
                        <UrlButton class="ml-2" icon="fa-brands fa-instagram" url="https://www.instagram.com/pvincephoto/"></UrlButton>
                    </v-row>
                </div>
                
            </v-app-bar>
        </div>
    </nav>
</template>

<script>
import HeaderButton from "@/components/widgets/HeaderButton.vue";
import UrlButton from "@/components/widgets/UrlButton.vue";

export default {
    name: "Site-Header",
    components: {
        HeaderButton, 
        UrlButton: UrlButton
    },

    data(){
        return {
            drawerOpen: false,

            links:[
                {pageName: 'Biography', route: "/biography"},
                {pageName: 'Gallery', route: "/gallery"},
                {pageName: 'Contact', route: "/contact"},
            ]
        }
    },

    methods:{
        toggleAppDrawer(){
            this.drawerOpen=!this.drawerOpen;
        }
    }
}
</script>

<style >

    

    

    .v-navigation-drawer--temporary{
        width: 100% !important;
        z-index: 5 !important;
    }
    


    .smallTitle{
        font-size: 1.05rem !important;
        margin-left: -15px;
        margin-top: 8px;
    }

    .drawerTitle{
        text-align: center;
        font-family: 'Homemade Apple' !important;
        font-weight: 800;
        font-size: 24px;
        padding-top: 20px;
    }

    .drawerCloseButton{
        position: absolute;
        bottom: 80px;
        left: 50%;
        scale: 150%;
        transform: translateX(-33%);
    }

    .v-app-bar-title__content, .v-app-bar-title__placeholder{
        font-family: 'Homemade Apple' !important;
        font-size: 1.4em;
        margin-left: 25px;
        width: fit-content !important;
        height: 58px !important;
        font-weight:800;
        padding-left:2px;
        color: black;
        padding-top: 10px;
    }

    .v-divider{
        width: 20% !important;
        border-color: grey !important;
    }

    .buttontext{
        font-family: 'Quicksand';
        font-size: 1.3em;
    }
    
    a{
        text-decoration: none;
    }
    
</style>