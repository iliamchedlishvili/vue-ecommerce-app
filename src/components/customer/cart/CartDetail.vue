<script setup></script>
<template>
    <div class="row">
        <div class="col mt-2">
            <h2 class="text-center">Your Cart</h2>
            <table class="table table-bordered table-striped p-2">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th class="text-end">Price</th>
                        <th class="text-end">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td colspan="4" class="text-center">
                            Your cart is empty. 
                       </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="text-center">
                <button class="btn btn-primary m-1">
                    Continue Shopping
                </button>
                <button class="btn btn-secondary m-1">
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>