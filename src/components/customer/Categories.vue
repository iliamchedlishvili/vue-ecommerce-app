<script setup>
import { ref } from 'vue'

const categories = ref([
    { id: 1, name: 'Drinks' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'Other' },
])
</script>
<template>
    <div class="d-grid gap-2">
        <button class="btn btn-outline-primary" type="button">Home</button>
        <button v-for="category in categories" class="btn btn-outline-primary" type="button" :key="product.id">
            {{ category.name }}
        </button>
    </div>
</template>
<style scoped></style>