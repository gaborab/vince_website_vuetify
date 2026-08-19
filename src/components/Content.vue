<template>
    <div id="content">
        <v-row>
            
            <v-col class="hidden-md-and-up">
                <p :class="this.smTitleStyle">About me</p>
            </v-col>

            <v-col xl='6' l='8'  sm='12' align-end >
                <v-parallax src="/images/fu.jpg" class="mx-5 mt-5 hidden-sm-and-down" height="800"></v-parallax>
                
                <div class="black pa-1 mx-3 mt-8 hidden-md-and-up"><v-img src="images/fu.jpg"></v-img></div>
            </v-col>
            
            <v-col>
                <!-- <p :class="this.$vuetify.breakpoint.smAndDown? this.smTitleStyle : this.lgTitleStyle">About me</p> -->
                <p :class="this.lgTitleStyle+' hidden-sm-and-down'">About me</p>
                <p :class="this.$vuetify.breakpoint.smAndDown? 'smBodyText' : 'bodyText'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptatum magni sunt esse a quam sed, velit ducimus debitis dicta dolor? Error, placeat. Aperiam ex nam cum aliquam vitae. Aperiam.</p>
                <p :class="this.$vuetify.breakpoint.smAndDown? 'smBodyText' : 'bodyText'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi molestiae placeat perferendis quidem non asperiores eos nesciunt nisi, sed repellat dignissimos, atque cupiditate provident dolorem, itaque consectetur unde dolore!</p>
            </v-col>                
            
        </v-row>
        <p class="text-h3 text-md-h2 font-weight-light ma-10 pt-10 text-center hidden-sm-and-down">My work</p>
        <p class="text-h3 text-md-h2 font-weight-light ma-10 text-center hidden-md-and-up">My work</p>
        
        <div class="ma-10 pa-8 hidden-sm-and-down">
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="10" class="gallery">
                    <v-row>
                        <v-col cols="3"  class="ma-0 pa-0"><div class="gallery1"><v-img src="/images/bled2.jpg" height="800" class="galleryPics"></v-img></div></v-col>
                        <v-col cols="3" class="ma-0 px-1 py-0"><v-img src="/images/sztrajk.jpg" height="800" class="galleryPics"></v-img></v-col>
                        <v-col cols="3" class="ma-0 pr-1 py-0 pl-0"><v-img src="/images/brekeke.jpg" height="800" class="galleryPics"></v-img></v-col>
                        <v-col cols="3" class="ma-0 pa-0"><div class="gallery2"><v-img src="/images/gokart.jpg" height="800" class="galleryPics"></v-img></div></v-col>
                    </v-row>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </div>
        <div class="my-8 mx-8 hidden-md-and-up">
            <v-row>
                <v-col class="black pa-1">
                    
                    <div class="mb-1"><v-img height="250 " src="/images/bled2.jpg" transition="scroll-x-transition"></v-img></div>
                    <div class="mb-1"><v-img height="250 " src="/images/sztrajk.jpg" transition="scroll-x-transition"></v-img></div>
                    <div class="mb-1"><v-img height="250 " src="/images/brekeke.jpg" transition="scroll-x-transition"></v-img></div>
                    <div class=""><v-img height="250 " src="/images/gokart.jpg" transition="scroll-x-transition"></v-img></div>
                </v-col>
            </v-row>
        </div>
        <ActionButton text="View Gallery" route="/gallery" :onPressed="()=>{}"></ActionButton>
        
        
        
        
    </div>
</template>

<script>
    import ActionButton from "@/components/widgets/ActionButton.vue";
    export default {
        

        name: 'Content-Segment',
        components:{
            ActionButton,
        },
        data(){
            return{
                smTitleStyle : "text-h3 text-md-h2 font-weight-light ml-6  pt-10 mb-n3 text-center",
                lgTitleStyle : "text-h3 text-md-h2 font-weight-light ma-10 pt-4",
                
            }
        }
    }
</script>

<style>
    .bodyText, .smBodyText{
        font-size: 20px ;
        letter-spacing: 0.2px;
        font-family: 'Roboto';
        margin-top: 5px;
        margin-left: 25px;
        margin-right: 25px;
    }

    .smBodyText{
        text-align: center;
    }

    .gallery{
        clip-path: polygon(10% 0, 100% 0, 92% 100%, 0 100%);
        
    }

    .on-hover{
        opacity: 0.5;
        background-color: black;
    }

</style>