<template>  
    <div class="to-gallery">
        <router-link :to="{name: 'gallery'}">
            <a value="Return to Gallery"><i class="arrow"></i>Return to Gallery</a>
        </router-link>
    </div>
    
    <div class="container">
        <div class="presentation">
            <h2>{{ padId }} {{ name }}</h2>
            <img v-bind:src="picture"/>
        </div>

        <div class="desc">
            <h3>Description</h3>
            <p>{{ description }}</p>
            <div class="location" v-if="common_locations">
                <h3>Common Locations</h3>
                <p v-for="(value, id) in common_locations" :key="id">{{value}}</p>
            </div>
        </div>

        <div class="others">
            <div v-if="drops">
                <h3>Drops</h3>
                <p v-for="(value, id) in drops" :key="id">{{value}}</p>
            </div>
            <div v-if="attack">
                <h3>Attack</h3>
                <p>{{ attack }}</p>
            </div>
            <div v-if="defense">
                <h3>Defense</h3>
                <p>{{ defense }}</p>
            </div>
            <div v-if="cooking_effects">
                <h3>Cooking Effects</h3>
                <p>{{ cooking_effects }}</p>
            </div>
            <div v-if="hearts_recovered">
                <h3>Hearts Recovered</h3>
                <p>{{ hearts_recovered }}</p>
            </div>
        </div>    
    </div>

</template>

<script>
import { getOneEntityData } from '@/services/botwAPI.js'
export default {
    computed: {
        padId() {
            let newId = ('000'+this.id).slice(-3);
            return newId;
        }
    },
    data(){
        return {
            name: "",
            id: "",
            attack: "",
            common_locations: [],
            cooking_effects: "",
            defense: "",
            description: "",
            drops: [],
            hearts_recovered: "",
            picture: "",
        }
    },
    methods:{
        async retrieveOneEntityData() {
                let entity;
                entity = await getOneEntityData(this.$route.params.name)
                this.id = entity.data.id 
                this.name = entity.data.name 
                this.attack = entity.data.attack
                this.common_locations = entity.data.common_locations
                this.cooking_effects = entity.data.cooking_effects
                this.defense = entity.data.defense
                this.description =  entity.data.description      
                this.drops = entity.data.drops
                this.hearts_recovered = entity.data.hearts_recovered
                this.picture = entity.data.image
            }
    },
    created(){
        this.retrieveOneEntityData()
    }

}
</script>

<style scoped>


    .to-gallery{
        margin-top: 3%;
        margin-left: 2%;
    }
    .arrow {
        border: solid grey;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(135deg);
    }

    a {
        text-decoration: none;
        font-family: 'RocknRollOne';
        color:grey;
    }

    .to-gallery:hover a{
        color: #00e1ff;
    }

    .to-gallery:hover .arrow{
        border: solid #00e1ff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(135deg);
    }

    img {
        margin-left: auto;
        margin-right: auto;
        border: 3px solid #00e1ff;
        box-shadow: 0 0 .2rem #fff, 
                    0 0 .2rem #fff, 
                    0 0 1rem #00e1ff, 
                    inset 0 0 3rem #00e1ff;
        outline: 3px solid #00e1ff;
        outline-offset: -15px;
    }

    .presentation h2 {
        text-shadow: 0 0 2px #00e1ff, 0 0 10px #00e1ff;
    }

    .container{
       margin-top: 1%;
       margin-left: 10%;
       margin-right: 10%;
       margin-bottom: 3%;
       display: flex; 
       flex-wrap: wrap;
       text-align: center;
       justify-content: center;
    }

    .container > div {
        flex: 50%;
            
    }

    .desc {
        margin-top: 5%;
    }
    .desc > p {
        text-align: left;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 2px #00e1ff, 0 0 35px #00e1ff;
    }

    h3:after, h3:before {
        content: '';
        height: 2px;
        background: #00e1ff;
        margin: 0 10px;
        filter: drop-shadow(0px 3px 4px #00e1ff);
    }

    .others h3:after, .others h3:before {
        width: 30%;
    }

    .location h3:after, .location h3:before {
        width: 25%;
    }

    .location {
        margin-top: 10%;
    }

    .desc h3:after, .desc h3:before {
        width: 30%;
    }

    /***Tablets ***/
    @media (max-width: 768px){
        .container > div {
            flex: 100%;
                
        }

        .to-gallery {
            margin-top: 8%;
        }

        .presentation h2 {
            font-size: 1.2em;
        }


    }
</style>