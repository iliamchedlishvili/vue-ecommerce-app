<script setup></script>
<template>
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