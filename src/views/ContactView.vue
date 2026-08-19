<template>
    <div class="container">
        <Header></Header>
        <PageTitle text="Contact"></PageTitle>
        <div class="mb-10">
            <v-row justify="center" align="center">
                <v-col cols="6" class="black ma-0 pa-1 mr-10 hidden-md-and-down" >
                    <v-parallax src="https://drive.google.com/uc?export=view&id=1HSYC_-Yz2GQs1_CSkcy_NfKNH7dH1_Xo" height="700" class="para"></v-parallax>
                </v-col>

                <v-col cols="9" class="hidden-lg-and-up pa-1 black mb-4 mt-6">
                    <v-img src="https://drive.google.com/uc?export=view&id=1HSYC_-Yz2GQs1_CSkcy_NfKNH7dH1_Xo"></v-img>
                </v-col>
                
                <v-col cols="10" md="8" lg="4" xl="4" class="">
                    <v-form ref="form" class="mx-2" v-model="valid">
                        <v-row justify="center" align="center">
                            <v-col cols="12" md="6" lg="6" xl="6">
                                <v-text-field class="txtfield" v-model="name" :rules="nameRules" label="Name" outlined clearable rounded color="black"></v-text-field>
                            </v-col>
                            
                            <v-col cols="12" md="6" lg="6" xl="6" :class="this.$vuetify.breakpoint.smAndDown ? 'mt-n6' : ''">
                                <v-text-field v-model="email" :rules="emailRules" label="Email" outlined clearable rounded color="black"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-textarea v-model="message" :rules="messageRules" label="Message" outlined clearable rounded color="black"></v-textarea>
                    </v-form>
                    <div class="btn">
                        <ActionButton text="Send Message" :onPressed="submitForm"></ActionButton>
                    </div>
                    
                </v-col>
            </v-row>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/widgets/PageTitle.vue";
import Footer from "@/components/Footer.vue";
import ActionButton from "@/components/widgets/ActionButton.vue";
import {sendMessage} from "@/api.js"


export default {
    

    name: 'Contact-View',
    components:{
        Header,
        PageTitle,
        Footer,
        ActionButton
    },
    data(){
        return {
            valid: false,
            name: '',
            nameRules: [
                value => !!value|| "Please enter your name"
            ],
            email: '',
            emailRules: [
                value => !!value || "Please enter your email address",
                value => /.+@.+\..+/.test(value) || 'Invalid email address'
            ],
            message: '',
            messageRules: [
                value => !!value || "Please write a message"
            ]
        }
    },
    
    methods:{
        submitForm(){
            console.log(this.valid)
            this.$refs.form.validate();
            if(this.valid){
                sendMessage(this.name, this.email, this.message);
            }
        }
    }
}
</script>

<style scoped>

    
    .container{
        max-width: 100%;
    }

    /* .v-parallax__image .para{
        transform: none !important;
        width: 80% !important;
        
    } */
    
    

    .btn{
        scale: 75%;
    }

.v-text-field--outlined >>> fieldset {
  border-width: 2px;
  border-radius: 20px;
}

.v-input--is-focused .v-input {
  
  color: black !important;
}
</style>

<style>
    .para img{
        left: 50%;
        bottom: 115%;
        height: 850px;
        width: 850px;
    }
</style>