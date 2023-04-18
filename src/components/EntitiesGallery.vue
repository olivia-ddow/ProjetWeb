<template>

    <div class="gallery-options">
        <input type="text" v-model="search" placeholder="Search an entity">
        <div class="categories" v-for="category in categories" :key="category">
            <button v-if="category !== 'creatures' && category !== 'food'" @click="setFilter(this.entitiesData.data[category])">{{ category }}</button>
            <button v-else-if="category === 'creatures'" @click="setFilter(this.entitiesData.data.creatures.non_food)">{{ category }}</button>
            <button v-else @click="setFilter(this.entitiesData.data.creatures.food)">{{ category }}</button>        
        </div>
        <select v-model="EntitySortType" id="entity-sort">
            <option value="IDLow">ID ascending</option>
            <option value="IDHigh">ID descending</option>
            <option value="AZName">A to Z names</option>
            <option value="ZAName">Z to A names</option>
        </select>
    </div>


    
    <div class="entities-gallery">   
        <router-link v-for="(entity, index) in filteredEntities" :key="index" :to="{name: 'entity', params: {filter: entity?.category, name: entity?.name}}">
            <EntityCard 
            :id="entity?.id" 
            :name="capitalizeFirstLetter(entity?.name)"
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
        computed: {
            filteredEntities() {
                const filterFunc = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
                let data = Object.values(this.currentFilter).filter(filterFunc)
                if (this.EntitySortType === "IDLow"){
                    data = data.sort((a, b) => a.id - b.id)
                } else if (this.EntitySortType === "IDHigh"){
                    data = data.sort((a, b) => b.id - a.id)
                } else if (this.EntitySortType === "AZName"){
                    data = data.sort((a, b) => a.name.localeCompare(b.name))
                } else {
                    data = data.sort((a, b) => b.name.localeCompare(a.name))
                }
                return data
            }
        },
        data(){
            return {
                monsters:{},
                creatures:{},
                food:{},
                equipments:{},
                treasures:{},
                materials:{},
                currentFilter: {},
                entitiesData:{},
                categories: ["monsters", "creatures", "food", "equipment", "treasure", "materials"],
                EntitySortType: "IDLow",
                search: ""
            }
        },
        methods: {
            capitalizeFirstLetter(string) {
                const words = string.split(" ");
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                }
                return words.join(" ");
            },
            setFilter: function(filter) {
                this.currentFilter = filter
                console.log(this.currentFilter)
            },
            async retrieveEntitiesData() {              
                this.entitiesData = await getAllData() 
                this.currentFilter = this.entitiesData.data.monsters
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
        justify-content: center;
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }

    a { 
        text-decoration: none; 
    }
</style>