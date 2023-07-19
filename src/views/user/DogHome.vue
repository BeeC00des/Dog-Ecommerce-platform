<template>
    <main-header />
    <section class="hero__section">
        <div class="container">
            <div class="hero__text pl-12">
                <h4 class="text-2xl">Buy-in-offer</h4>
                <h1 class="text-7xl">Super value deals</h1>
                <h4 class="text-3xl">Save more with coupons & get up to 20% off!</h4>
                <router-link to="/store">
                    <action-button btnvalue="Check store" />
                </router-link>
            </div>
        </div>
    </section>

    <main-footer/>
</template>

<script>
import ActionButton from "@/components/buttons/cta-btn.vue";
import MainFooter from "@/components/sections/FooterSection.vue";
import MainHeader from "@/components/sections/HeaderSection.vue";

import axios from "axios";
import { mapActions } from "vuex";

export default {
    name: "DogShop",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        ...mapActions(["set_products"]),
    },
    components: {
        ActionButton,
        MainHeader,
        MainFooter
    },
    
   
};
</script>

<style scoped>
/* Hero Section */
.hero__section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 75px);
    background-image: url("@/assets/images/dog-bg-plain.png");
    background-position: 50% 20%;
    background-size: cover;
    /* background-repeat: none; */
}

.hero__text {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.hero__text h4 {
    padding-bottom: 1rem;
}

.hero__text h1 {
    color: var(--dim-blue);
}

.hero__text p {
    margin-bottom: 1rem;
}

@media (min-width: 2000px) {
    .hero__section {
        background-position: 70% 12%;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #e3e6f3;
        height: 50vh;
    }
}

@media (min-width: 3000px) {
    .hero__section {
        background-position: 60% 30%;
        /* background-size: cover; */
    }
}
</style>
