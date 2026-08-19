<template>
  <div class="home">
    <Header ></Header>
    <IntroImg></IntroImg>
    <Content></Content>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import IntroImg from "@/components/IntroImg.vue";
  import Content from "@/components/Content.vue";

  export default {
    name: 'Home-View',

    components: {
        Header,
        IntroImg,
        Content,
    },
  }
</script>
