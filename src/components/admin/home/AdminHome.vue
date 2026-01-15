<script setup></script>
<template>
    <div class="d-flex">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light border-end" style="width: 280px; min-height: 100vh;">
            <a href="/admin/home"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none border-bottom pb-3 w-100">
                <span class="fs-4 fw-bold">Admin Panel</span>
            </a>
            <ul class="nav nav-pills flex-column mb-auto mt-3">                
                <li class="nav-item">
                    <a href="#catalogCollapse"
                        class="nav-link text-dark d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse" role="button">
                        <span><i class="bi bi-grid me-2 text-primary"></i> Catalog</span>
                        <i class="bi bi-chevron-right small-arrow"></i>
                    </a>
                    <div class="collapse" id="catalogCollapse">
                        <ul class="nav nav-pills flex-column ps-4 small">
                            <li><router-link to="/admin/home/products"
                                    class="nav-link text-secondary py-1">Products</router-link></li>
                            <li><router-link to="/admin/home/categories"
                                    class="nav-link text-secondary py-1">Categories</router-link></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item mt-2">
                    <a href="#salesCollapse"
                        class="nav-link text-dark d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse" role="button">
                        <span><i class="bi bi-cart me-2 text-primary"></i> Sales</span>
                        <i class="bi bi-chevron-right small-arrow"></i>
                    </a>
                    <div class="collapse" id="salesCollapse">
                        <ul class="nav nav-pills flex-column ps-4 small">
                            <li><router-link to="/admin/home/orders"
                                    class="nav-link text-secondary py-1">Orders</router-link></li>
                            <li><router-link to="/admin/home/shipments"
                                    class="nav-link text-secondary py-1">Shipments</router-link></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item mt-2">
                    <a href="#customersCollapse"
                        class="nav-link text-dark d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse" role="button">
                        <span><i class="bi bi-cart me-2 text-primary"></i> Customers</span>
                        <i class="bi bi-chevron-right small-arrow"></i>
                    </a>
                    <div class="collapse" id="customersCollapse">
                        <ul class="nav nav-pills flex-column ps-4 small">
                            <li><router-link to="/admin/home/orders"
                                    class="nav-link text-secondary py-1">Customers</router-link></li>
                            <li><router-link to="/admin/home/shipments" class="nav-link text-secondary py-1">Activity
                                    Logs</router-link></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item mt-2">
                    <a href="#usersManagementCollapse"
                        class="nav-link text-dark d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse" role="button">
                        <span><i class="bi bi-cart me-2 text-primary"></i> Users Management</span>
                        <i class="bi bi-chevron-right small-arrow"></i>
                    </a>
                    <div class="collapse" id="usersManagementCollapse">
                        <ul class="nav nav-pills flex-column ps-4 small">
                            <li><router-link to="/admin/home/orders"
                                    class="nav-link text-secondary py-1">Users</router-link></li>
                            <li><router-link to="/admin/home/shipments" class="nav-link text-secondary py-1">Activity
                                    Logs</router-link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="flex-grow-1 p-4">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<style scoped></style>