<template>
    <div class="title">
        <h1>Hyrule Compendium</h1>
    </div>
</template>

<script>
    export default{
        name: 'HeaderView'
    }
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: center;
        background-color: rgba(0,0,0,0.5);
        border-radius: 25px;
        box-shadow:  
            0 0 1rem #00e1ff, 
            inset 0 0 3rem #00e1ff;
       
    }
    
    h1 {
        font-family: 'Hylian Serif';
        font-size: 3em;
        font-style: normal;
    }

    /***Phone ***/
    @media (max-width: 480px){
        h1 {
            font-size: 2em;
        }
    }
</style>