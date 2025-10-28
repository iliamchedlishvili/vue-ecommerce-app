<script setup>
</script>
<template>
    <div class="p-2">
        <form>
            <div style="width:300px; margin:20px auto">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" name="username" required />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input class="form-control" type="password" name="password" required />
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