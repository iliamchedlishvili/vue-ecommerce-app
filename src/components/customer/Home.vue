<script setup>
import Categories from './Categories.vue';
import ProductsList from './ProductsList.vue';
</script>
<template>
    <div class="row text-white">
        <div class="col-3 p-2">
            <Categories></Categories>
        </div>
        <div class="col-9 p-2 text-dark">
            <ProductsList></ProductsList>
        </div>
    </div>
</template>
<style scoped></style>