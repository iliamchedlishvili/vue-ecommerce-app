<script setup>
import { ref } from 'vue'

const products = ref([
    { id: 1, name: 'Product A', price: 100, description: "Product A Description" },
    { id: 2, name: 'Product B', price: 150, description: "Product B Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
])
</script>
<template>
    <div v-for="product in products" :key="product.id" class="card m-1 p-1 bg-light">
        <h4>
            {{ product.name }}
            <span class="badge rounded-pill bg-primary" style="float: right;">
                ${{ product.price.toFixed(2) }}
            </span>
        </h4>
        <div class="card-text bg-text p-1">
            {{ product.description }}
        </div>
    </div>
</template>
<style scoped></style>