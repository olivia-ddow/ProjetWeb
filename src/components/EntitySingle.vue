<template>
    <div class="container">
        <div class="presentation">
            <h2>{{ id }} {{ name }}</h2>
            <img v-bind:src="picture"/>
        </div>

        <div class="desc">
            <h3>Description</h3>
            <p>{{ description }}</p>
            <div v-if="common_locations">
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
    data(){
        return {
            name: "",
            attack: "",
            common_locations: "",
            cooking_effects: "",
            defense: "",
            description: "",
            drops: "",
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
    img{
        border: 1px solid #00e1ff;
    }

    .container{
       margin-top: 5%;
       margin-left: 10%;
       margin-right: 10%;
       display: flex; 
       flex-wrap: wrap;
       text-align: center
    }

    .container > div {
        flex: 50%;
            
    }

    .desc > p {
        text-align: left;
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3:after, h3:before {
        content: '';
        width: 150px;
        height: 2px;
        background: #00e1ff;
        margin: 0 10px;
    }
</style>