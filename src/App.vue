<template>
  
  <header>
		<h1>BOTWDatabase</h1>
  </header>
  <body>
    <router-view></router-view>
  </body>
</template>

<script>

export default {
  name: 'BotwApp'
}
  
</script>

<style>

@font-face {
    font-family: "Hylian Serif";
    src: url(assets/fonts/HyliaSerifBeta-Regular.otf);
}

@font-face {
    font-family: "Sheikah Glyphs";
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
}

</style>
