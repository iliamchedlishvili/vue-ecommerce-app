<script setup>
import ProductDetails from './products/ProductDetails.vue';
import ProductsTable from './products/Products.vue';
</script>
<template>
   <div>
      <button>Products</button>
      <button>Users Management</button>
      <button>Orders</button>
   </div>
   <RouterView></RouterView>
</template>
<style scoped></style>