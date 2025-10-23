<script setup>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import { ref } from 'vue'

const visible = ref(false);

const products = ref([
    { id: 1, name: 'Product A', price: 100, description: "Product A Description" },
    { id: 2, name: 'Product B', price: 150, description: "Product B Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
    { id: 3, name: 'Product C', price: 200, description: "Product C Description" },
])

function submitForm() {
    // Handle form submission logic here
    visible.value = false; // Close the dialog after submission
}

</script>
<template>
    <div style="margin-top:20px;">
        <Button label="New" icon="pi pi-external-link" @click="visible = true" />
    </div>
    <div class="card" style="margin-top: 30px;">
        <DataTable :value="products" tableStyle="min-width: 50rem" showGridlines paginator :rows="10"
            :rowsPerPageOptions="[5, 10, 20, 50]">
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="description" header="Description"></Column>
            <Column field="price" header="Price"></Column>
        </DataTable>
    </div>
    <Dialog v-model:visible="visible" modal header="Product Details" :style="{ width: '20rem' }">
        <form @submit.prevent="submitForm">
            <div>
                <div style="margin-top:20px;">
                    <InputText name="productname" type="text" placeholder="Product Name" style="width:200px" />
                </div>
                <div style="margin-top:20px;">
                    <InputText name="quantity" type="text" placeholder="Quantity" />
                </div>
                <div style="margin-top:20px;">
                    <Button type="submit" severity="secondary" label="Save" />    
                </div>
              
            </div>
        </form>
    </Dialog>
</template>
<style scoped></style>