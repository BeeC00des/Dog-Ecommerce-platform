<template>
    <main-header/>
    <section class="my-2 flex-1">
        <div class="container ">
            <div class="">
                <section class="w-10/12 flex items-center justify-start mx-auto">
                    <router-link to="/"
                        class="bg-green-800 text-2xl dark:bg-white dark:text-darkBlue text-white py-2 px-6 rounded hover:ring-2 transition duration-100 font-semibold hover:ring-black hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:ring-white dark:hover:text-green">
                        Back
                    </router-link>
                </section>
            </div>
            <section class="w-10/12 flex items-start justify-center mx-auto">
                <div class="w-4/12">
                    <img class="h-5/6 rounded" :src="dog" />
                    <!-- :alt="dog.split('/')[4].charAt(0).toUpperCase() + dog.split('/')[4].slice(1)" -->
                    <!-- <p class="text-md font-medium mt-2">
                        Apply Image Effect:
                    </p> -->
                    <div class="flex flex-wrap gap-3 items-center text-xl text-black mt-6">
                        <button @click="cartoonifyImage" class="border-2 border-rose-600 rounded-xl px-4 py-2">
                            Cartoonify
                        </button>
                        <button @click="applyGrayScale" class="border border-green-700 rounded-xl px-4 py-2">
                            Grayscale
                        </button>
                        <button @click="applySepia" class="border border-green-700 rounded-xl px-4 py-2">
                            Sepia
                        </button>
                        <button @click="applyNoEffect" class="border border-green-700 rounded-xl px-4 py-2">
                            Normal
                        </button>
                    </div>
                </div>
                <div class="w-6/12 mx-6">
                    <div class="w-full bg-white shadow-lg rounded-md py-4 px-4 border-red-500">
                        <p class="text-3xl font-semibold">
                            Breed name:
                            <span class="font-normal">{{
                                dog.split("/")[4].charAt(0).toUpperCase() + dog.split("/")[4].slice(1)
                            }}</span>
                        </p>
                        <p class="text-2xl mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                            omnis quam quae laudantium laboriosam nobis nemo repellat rerum
                            corrupti velit vitae minus eligendi voluptas rem necessitatibus
                            dolorem expedita, ab soluta? Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ipsam omnis quam quae laudantium laboriosam nobis
                            nemo repellat rerum corrupti velit vitae minus eligendi voluptas rem
                            necessitatibus dolorem expedita, ab soluta
                        </p>
                        <div class="flex items-center justify-end">
                            <router-link to="/cart" @click="addItemToCart">
                                <action-button
                                btnvalue="Add To Cart"/>
                            </router-link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ActionButton from "@/components/buttons/action-btn.vue";
import MainHeader from "@/components/sections/HeaderSection.vue";
export default {

    components: { ActionButton , MainHeader},
    name: "DogDetail",
    methods: {
        ...mapActions(["getDog"]),
    },
    computed: {
        ...mapState(["dog"]),
    },
    created() {
        this.getDog(this.$route.params.id2);

    },
};


</script>

<style>
button {
    border: 1px solid green;
}
</style>