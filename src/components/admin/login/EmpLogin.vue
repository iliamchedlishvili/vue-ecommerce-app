<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const error = ref(null);
const loading = ref(false);
const router = useRouter();

const login = async () => {
    loading.value = true;
    error.value = null;

    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            username: username.value,
            password: password.value,
        });

        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token); //store token
        router.push('/admin');

    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            error.value = err.response.data.message;
        } else {
            error.value = 'Login failed. Please check your credentials.';
        }
        console.error('Login error:', err);
    } finally {
        loading.value = false;
    }
};
</script>
<template>
    <div class="p-2">
        <form @submit.prevent="login">
            <div style="width:300px; margin:20px auto">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="username" v-model="username" required />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" name="password" v-model="password" required />
                </div>
                <div class="text-center p-2">
                    <button class="btn btn-primary m-1" type="submit">
                        Log In
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped>
button {
    float: right;
}
</style>