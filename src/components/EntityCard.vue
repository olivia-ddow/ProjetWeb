<template>
    <div class="entityCard" @mouseover="hover=name" @mouseleave="hover='Entity'">
        <img class="picture" v-bind:src="picture"/>
        <div>
        <h2 class="name"><span>{{hover}}</span></h2>
        <h2 class="id">{{padId}}</h2>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'EntityCard',
        computed: {
            padId() {
                let newId = ('000'+this.id).slice(-3);
                return newId;
            }
        },
        data(){
            return{
                hover: 'Entity',
            }        
        },
        props: {
            name: {type: String, required: true},
            id: {type: Number, required: true},
            picture: {type:String, required: true}
        }      
    }  
</script>

<style scoped>
    .entityCard > .picture {
        width:12em;
        height:12em;
        margin-left: auto;
        margin-right: auto  ;
        border: 3px solid rgb(42, 42, 42);
        outline: 3px solid rgb(42, 42, 42);
        outline-offset: -9px;
        opacity: 53%;
    }
    .entityCard:hover > .picture {
        border: 3px solid #00e1ff;
        box-shadow: 0 0 .2rem #fff, 
                    0 0 .2rem #fff, 
                    0 0 1rem #00e1ff, 
                    inset 0 0 3rem #00e1ff;
        outline: 3px solid #00e1ff;
        opacity: 100%;
    }

    
    .entityCard {
        position: relative;
        display: flex;
        flex: 0 1 25%;
        flex-direction: column;
        margin: 20px;
    }

    .entityCard:hover .name {
        font-family: 'RocknRollOne';
        font-style: italic;
        font-size: 1.1em;
        color: #00e1ff;
        text-shadow: 0 0 10px #00e1ff, 0 0 20px #00e1ff;
    }

    .name{
        text-align: center;
        font-family: 'Sheikah Glyphs';
        font-size: 1.3em;
        color: grey;
    }

    .id{
        position: absolute;
        bottom: 18%;
        left: 5%;
        color: #01b4ccc4;
        text-shadow: none;
    }

    
</style>