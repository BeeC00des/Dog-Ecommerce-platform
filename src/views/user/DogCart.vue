<template>
    <h1 class="text-black">welcome to your cart details</h1>
    <action-button
                            btnvalue="Add To Cart"
                            @click="addItemToCart"
                        />
</template>

<script>

import ActionButton from "@/components/buttons/action-btn.vue";

export default {

components: { ActionButton },

name: "DogCart"

}

</script>