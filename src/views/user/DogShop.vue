<template>
    <main-header />
    <section class="hero__section">
        <div class="container">
            <div class="hero__text">
                <h4>Trade-in-offer</h4>
                <h1>Super value deals</h1>
                <h2>On all products</h2>
                <p>Save more with coupons & get up to 70% off!</p>
                <router-link to="/store">
                    <action-button btnvalue="Start Shopping" />
                </router-link>
            </div>
        </div>
    </section>

    <new-arrivals :newArrivals="newArrivals" />

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
    computed: {
        featuredProducts() {
            return this.products.slice(1, 5);
        },
        newArrivals() {
            return this.products.slice(5, 9);
        },
    },
    async created() {
        let res1 = await axios.get("https://gorana.onrender.com/products");
        this.products = res1.data.results.map((product) => {
            product.images[0] = product.images[0].replace("http", "https");
            return product;
        });
        this.set_products(this.products);
    },
};
</script>

<style scoped>
/* Hero Section */
.hero__section {
    display: flex;
    align-items: left;
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
