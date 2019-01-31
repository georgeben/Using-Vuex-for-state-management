<template>
    <div>
        <h1>Dashboard</h1>
        <button @click="logOut">Log out</button>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        logOut(){
            localStorage.removeItem('user');
            this.$router.push('/')
        }
    }
}
</script>
