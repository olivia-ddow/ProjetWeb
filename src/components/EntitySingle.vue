<template>
    <h2>Hello {{ name }}</h2>
    <p>{{ description }}</p>
    <img v-bind:src="picture"/>
    <div v-if="common_locations">
        <p v-for="(value, id) in common_locations" :key="id">locations: {{value}}</p>
    </div>
    <div v-if="drops">
        <p v-for="(value, id) in drops" :key="id">drops: {{value}}</p>
    </div>
    <div v-if="attack">
        <p>attack: {{ attack }}</p>
    </div>
    <div v-if="defense">
        <p>defense: {{ defense }}</p>
    </div>
    <div v-if="cooking_effects">
        <p>cooking_effects: {{ cooking_effects }}</p>
    </div>
    <div v-if="hearts_recovered">
        <p>hearts_recovered: {{ hearts_recovered }}</p>
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
</style>