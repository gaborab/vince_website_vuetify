<template>
    <div id="intro">
        <v-parallax src="/images/lakebled.jpg" class="introImg my-10 hidden-sm-and-down" height="700">
            <div>
                <h1 class="text-h3 text-md-h2 name font-weight-light my-5 text-center">Pipoly Vince</h1>
                <hr>
                <p class="subtitle text-body-1 text-md-h5">professional photographer</p>
            </div>
        </v-parallax>
        
            
        <div class="mobileimgtext hidden-md-and-up">
            <v-img src="\images\lakebled.jpg" class="mobileintro"></v-img>
            <h1 class="text-h4 text-md-h2  mobilename font-weight-light my-5 text-center white--text text-no-wrap">Pipoly Vince</h1>
            <hr class="mobilehr">
            <p class="subtitle mobilesub text-body-1 text-md-h5 pt-10 mt-8 white--text text-no-wrap">professional photographer</p>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'Intro-Image'
}
</script>

<style scoped>
    .name, .mobilename{
        font-family: 'Quicksand';
        
        
    }

    .mobileimgtext{
        position: relative;
        height: 400px;
        overflow: hidden;
    }
    .mobilename, .mobilesub, .mobilehr{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mobilehr{
        top: 53%;
    }

    hr{
        width:13%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: -10px;
        min-width: 120px;
        max-width: 260px;
    }

    .subtitle{
        text-align: center;
        font-variant: small-caps;
        font-size: 25px;
    }


    .mobileintro{
        transform: scale(1.4);
        
        height: 400px;
    }
</style>