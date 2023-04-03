<template>
    <div class="entity-card">
        <img class="picture" v-bind:src="picture"/>
        <div>
        <h2 class="name">{{name}}</h2>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'EntityCard',
        props: {
            name: {type: String, required: true},
            picture: {type:String, required: true}
        },        
    }  
</script>

<style scoped>
    .entity-card > .picture {
        width:10em;
        height:10em;
        text-align: center;
    }
    .entity-card {
        display: flex;
        flex: 0 1 20%;
        flex-direction: column;
        margin: 10px;
    }
    .name {
        text-align: center;
        font-size: 20px;
        color:rgb(47, 73, 47);
    }
</style>