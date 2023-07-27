<template>
    <main-header />
    <section class="cart-section">
        <div class="container">
            <!-- v-if="cart.length" -->
            <section>
                <div class="cart-details">
                    <table>
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="(item, index) in cart" :key="index">
                                <td>
                                    <svg
                                        @click="deleteItem(index)"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-x-circle delete-btn"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                        />
                                        <path
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </td>
                                <td>
                                    <img
                                        :src="item.images[0]"
                                        :alt="item.brand"
                                        class="img"
                                    />
                                </td>
                                <td>{{ item.brand }}({{ item.size }})</td>
                                <td>
                                    <!-- {{ item.currency }}
                                    {{ item.price.toFixed(2) }} -->
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        v-model="item.quantity"
                                        placeholder="QTY"
                                        min="1"
                                        max="10"
                                        @input="updateTotalPrice(item)"
                                    />
                                </td>
                                <td>
                                    <!-- {{ item.currency }}
                                    {{
                                        (item.quantity * item.price).toFixed(2)
                                    }} -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="checkout-section px-16">
                    <div class="coupon">
                        <h3>Apply Coupon</h3>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                class="px-5"
                            />
                            <action-button btnvalue="Apply" />
                        </form>
                    </div>
                    <div class="checkout">
                        <h3>Cart Details</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Cart Total</td>
                                    <!-- <td>NGN {{ subtotal.toFixed(2) }}</td> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shipping Fee</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>
                                        <!-- <strong >NGN -->
                                           
                                            <!-- {{ subtotal.toFixed(2) }}</strong -->
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <router-link to="/checkout">
                            <action-button btnvalue="Proceed to Checkout" />
                        </router-link>
                    </div>
                </div>
            </section>
            <!-- v-else -->
            <div class="no-cart" >
                <div class="no-cart-text">
                    <img
                        src="@/assets/images/cart.png"
                        alt="empty-cart"
                    />
                    <h3>Your cart is empty!</h3>
                    <p>Browse our shop and discover our latest products.</p>
                </div>
                <router-link to="/store">
                    <action-button btnvalue="Start Shopping" />
                </router-link>
            </div>
        </div>
    </section>
    <main-footer />
</template>

<script>
import MainHeader from "@/components/sections/HeaderSection.vue";
import MainFooter from "@/components/sections/FooterSection.vue";
import ActionButton from "@/components/buttons/action-btn.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    components: { ActionButton, MainHeader, MainFooter },
   
    name: "DogCart",
    data() {
        return {
            total: 0,
        };
    },
    methods: {
        ...mapActions(["delete_item", "update_quantity"]),
        deleteItem(index) {
            this.delete_item(index);
        },

        // update total price of cart and increase the quantity of product in cart
        updateTotalPrice(item) {
            this.update_quantity(item);
            this.cart.forEach((item) => {
                this.total += item.quantity * item.price;
            });
        },
    },
    computed: {
        ...mapState(["cart"]),
        ...mapGetters(["subtotal"]),
    },
    // mounted() {
    //     this.cart.forEach((item) => {
    //         this.total += item.quantity * item.price;
    //     });
    // },
}
</script>

<style scoped>
.no-cart {
    display: grid;
    place-items: center;
    gap: 30px;
}

.no-cart-text {
    text-align: center;
}

.no-cart img {
    height: 150px;
    width: 30%;
}

.cart-details {
    overflow-x: auto;
}
.img {
    height: 70px;
    width: 70px;
    margin-inline: auto;
    object-fit: contain;
}

table {
    border-collapse: collapse;
    white-space: nowrap;
    width: 100%;
}
td {
    font-size: 2rem;
}

.delete-btn {
    cursor: pointer;
}

.cart-details table thead {
    border: 1px solid lightgrey;
    border-left: none;
    border-right: none;
}

.cart-details table thead tr td {
    font-weight: 600;
    text-transform: uppercase;
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td {
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td i {
    cursor: pointer;
}

/* Checkout */
.checkout-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.coupon {
    width: 40%;
}

form {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
}

form input {
    width: 100%;
}

.checkout {
    width: 40%;
    padding: 2.5rem;
    border: 1px solid lightgrey;
}

.checkout table {
    margin-bottom: 2rem;
}

.checkout td {
    border: 1px solid lightgrey;
    padding: 0.8rem;
}

@media (max-width: 699px) {
    .cart-details table {
        table-layout: fixed;
    }
    .cart-details table thead td {
        width: 200px;
    }
    .checkout-section {
        flex-direction: column;
        gap: 3rem;
    }
    .checkout,
    .coupon {
        width: 100%;
    }
}
</style>

