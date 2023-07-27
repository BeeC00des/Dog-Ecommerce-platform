<template>
    <button aria-label="button" v-bind="$attrs" class="bg-green-800 text-2xl dark:bg-white dark:text-darkBlue text-white py-2 px-6 rounded hover:ring-2 transition duration-100 font-semibold hover:ring-black hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:ring-white dark:hover:text-green">
        {{ btnvalue }}
    <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        btnvalue: String,
    },
};
</script>

<style scoped>
/* button {
    border: none;
    background-color: var(--dim-blue);
    padding: 7px;
    border: 2px solid var(--dim-blue);
    font-size: 1.7rem;
    color: white;
}

button:hover {
    background-color: #083e46;
    border-color: #083e46;
} */
</style>
