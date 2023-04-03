<template>
    <h2>Database</h2>
    
    <div class="filter">
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(monsters)">Monsters</button>
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(creatures)">Creatures</button>
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(food)">Food</button>
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(equipments)">Equipments</button>
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(treasures)">Treasures</button>
        <button class="filter" v-bind:class="{ active: currentFilter }" v-on:click="setFilter(materials)">Materials</button>
        <!--<p>{{ currentFilter }}</p>-->
    </div>

    
    <div class="entities-gallery">
        <router-link v-for="(entity, index) in currentFilter" :key="index" :to="{name: 'entity', params: {filter: entity.category, name: entity?.name}}">
            <EntityCard 
            :name="entity?.name"
            :picture="entity?.image"/> 
        </router-link>
    </div>
</template>

<script>
import EntityCard from './EntityCard.vue'
import { getAllData } from '@/services/botwAPI.js'
    export default {
        name: 'entitiesGallery',
        components: {
            EntityCard
        },
        data(){
            return {
                currentFilter: this.monsters,
                monsters:{},
                creatures:{},
                food:{},
                equipments:{},
                treasures:{},
                materials:{},
                //entitiesData: []
            }
        },
        methods: {
            setFilter: function(filter) {
                this.currentFilter = filter;
            },
            async retrieveEntitiesData() {
                let entitiesData
                entitiesData = await getAllData() 
                this.monsters = entitiesData.data.monsters
                this.creatures = entitiesData.data.creatures.non_food
                this.food = entitiesData.data.creatures.food
                this.equipments = entitiesData.data.equipment
                this.treasures = entitiesData.data.treasure
                this.materials = entitiesData.data.materials 
            }
        },
        created() {
            this.retrieveEntitiesData()
        },
       
        
    }  

</script>

<style scoped>
    .entities-gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    h2 {
        text-align: center;
        font-size: 2em;
        color: rgb(42, 42, 42);
    }
</style>