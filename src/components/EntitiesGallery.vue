<template>
    <div class="galleryOptions">
        <div class="categories" v-for="category in categories" :key="category">
            <button v-if="category !== 'creatures' && category !== 'food'" @click="setFilter(this.entitiesData.data[category])">{{  capitalizeFirstLetter(category) }}</button>
            <button v-else-if="category === 'creatures'" @click="setFilter(this.entitiesData.data.creatures.non_food)">{{ capitalizeFirstLetter(category) }}</button>
            <button v-else @click="setFilter(this.entitiesData.data.creatures.food)">{{ capitalizeFirstLetter(category) }}</button>        
        </div>
    </div>

    <div class="subFilter">
            <select v-model="EntitySortType" id="entity-sort">
                <option value="IDLow">ID ascending</option>
                <option value="IDHigh">ID descending</option>
                <option value="AZName">A to Z names</option>
                <option value="ZAName">Z to A names</option>
            </select>
        
        <input type="text" v-model="search" placeholder="Search an entity in the category">
    </div>

    
    <div class="gallery">   
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
        watch: {
            search: function(newSearch) {
                localStorage.setItem("search", newSearch)
            },
            EntitySortType: function(newEntitySortType) {
                localStorage.setItem("EntitySortType", newEntitySortType)
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
                myCategory:"",
                categories: ["monsters", "creatures", "food", "equipment", "treasure", "materials"],
                search: localStorage.getItem("search") || "",
                EntitySortType: localStorage.getItem("EntitySortType") || "IDLow"
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
    .gallery, .galleryOptions, .subFilter{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }

    .galleryOptions, .subFilter{
        justify-content: space-evenly;
    }

    .galleryOptions {
        border-bottom: 2px solid #00e1ff;
        box-shadow:  0 1rem 1rem -1rem #00e1ff;
        padding-bottom: 1.2em;
    }

    a { 
        text-decoration: none; 
    }
    .categories button{
        color: grey;
        border: none;
        background-color: transparent;
        transition: color 0.2s ease-in;
        font-family: 'RocknRollOne';
        font-size: 1.5em;
    }
    .categories button:hover {
        color: #00e1ff;
        text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
        cursor: pointer;
            
    }
    .subFilter select{
        background-color: rgba(0,0,0,.5);
        color: #00e1ff;
        border: 1px solid #00e1ff;
        outline: 1px solid #00e1ff;
        outline-offset: 8px;
        padding: .8em;
        font-family: 'RocknRollOne';
    }

    .subFilter option{
        background-color: black;
        color: #00e1ff;
        font-family: Helvetica;
    }

    .subFilter input {
        background-color: rgba(0,0,0,.25);
        color: #00e1ff;
        font-family:'RocknRollOne'; 
        border: none;
        border-bottom: 2px solid #00e1ff;
        box-shadow:  0 1rem 1rem -1rem #00e1ff;
        width: 20em;
    }



    /***Phone ***/
    @media (max-width: 480px){
        .categories button{
                font-size: 1.2em;
        }
        .subFilter{
                margin-top: 10%;
        }        
        .subFilter input{
                margin-top: 10%;
        }
    }

</style>