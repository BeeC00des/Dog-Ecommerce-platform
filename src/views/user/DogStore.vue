<template>
        <div class="container">
            <main-header/>
            <div class="flex justify-center items-center">
            <form class="w-6/12 pt-5"  @submit.prevent="searchDog">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"  v-model="breed" class="block w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a dog by breed..." required>
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            </div>
            

            <template v-if="dogs.length">
                <p class="mb-4 text-xl" v-show="dogs.length">
                    {{ searchResult }}
                </p>
                <dog-card :dogs="dogs"  class="px-12"/>
            </template>
            <template v-else>
                <preloader v-if="loading" />
                <div v-else>
                    <p>{{ searchResult }}</p>
                    <p class="h-[55vh] grid place-content-center text-xl">
                        No results found. Please try again.
                    </p>
                </div>
            </template>
        </div>
        <main-footer/>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DogCard from "@/components/cards/DogCard.vue";
import MainFooter from "@/components/sections/FooterSection.vue";
import MainHeader from "@/components/sections/HeaderSection.vue";
import Preloader from "@/components/preloaders/itemPreloader.vue";
import axios from "axios";

export default {
    name: "DogStore",
    components: { DogCard, Preloader, MainFooter, MainHeader},
    data() {
        return {
            breed: "",
            searchResult: "",
            loading: true,
        };
    },
    methods: {
        ...mapActions(["fetchDogs", "searchDogs", "errorInSearch"]),
        async searchDog() {
            this.loading = true;

            try {
                let response1 = await axios.get(
                    `https://dog.ceo/api/breed/${this.breed}/images/random/50`
                );
                // let response2 = await axios.get(
                //     `https://dog.ceo/api/breed/${this.breed}/images/random/50`
                // );

                this.searchDogs(
                    response1.data.message
                    // response1.data.message.concat(response2.data.message)
                );
                this.loading = false;
                this.searchResult = `Search results for "${this.breed}": `;
                
            } catch (error) {
                this.loading = false;
                console.log(error);
                this.searchResult = `No results for "${this.breed}".`;
                this.errorInSearch([]);
            }
        },
    },
    computed: {
        ...mapGetters(["getDogs"]),
        ...mapState(["dogs"]),
    },
    async created() {
        if (!this.dogs.length) {
            try {
                let response1 = await axios.get(
                    "https://dog.ceo/api/breeds/image/random/50"
                );
                // let response2 = await axios.get(
                //     "https://dog.ceo/api/breeds/image/random/50"
                // );
                const data = response1.data.message;
                
                // .concat(response2.data.message);
                this.fetchDogs(data);
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error);
            }
        }
    },
};
</script>
