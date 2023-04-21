<template>
  <body>
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </body>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'BotwApp',
  components: {
    'TheHeader': HeaderView,
    'TheFooter': FooterView
  }
}
  
</script>

<style>

@font-face {
    font-family: "Hylian Serif";
    src: url(assets/fonts/HyliaSerifBeta-Regular.otf);
}

@font-face {
    font-family:"Sheikah Glyphs";
    src: url(assets/fonts/BotW_Sheikah.ttf);
    
}

@font-face {
    font-family: "RocknRollOne";
    src: url(assets/fonts/RocknRollOne-Regular.ttf);
    
}

body{
  box-sizing: border-box;
  background-color: rgb(24, 22, 29) /*#1c2d36*/;
  background-image: url("assets/images/bg.png");
  color: #00e1ff;
  font-family: 'RocknRollOne';
  font-style: italic;
}

</style>
