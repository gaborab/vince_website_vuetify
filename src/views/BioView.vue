<template>
    <div>
        <Header></Header>
        
        <PageTitle text="Biography"></PageTitle>
        <!-- <v-parallax src="/images/helm.jpg" height="1200" class="gokart">
            <v-row class="ma-6 pa-6">
                <v-col></v-col>
                <v-col xl="5" lg="6" md="8" sm="10" xs="12" class="ma-10">
                    <p class="text-h3 text-md-h2 font-weight-light ma-10 pt-10 text-end text">Biography</p>
                    <p class="text-h3 text-md-h2 font-weight-light ma-10 pt-10 text-end">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iste, recusandae id odit, impedit sint dicta distinctio quam possimus soluta praesentium enim maiores a nobis non! Iusto nam cum sequi.</p>
                </v-col>
            </v-row>
        </v-parallax> -->
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PageTitle from "@/components/widgets/PageTitle.vue";
import Footer from "@/components/Footer.vue";
export default {


    name: 'Bio-View',
    components:{
        Header,
        PageTitle,
        Footer
    }
}
</script>

<style>
    .gokart{
        opacity: 0.;
    }

    .text{
        color: black !important;
        
    }
</style>