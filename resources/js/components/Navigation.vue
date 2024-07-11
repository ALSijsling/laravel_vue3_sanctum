<script setup>

</script>

<template>
    <nav class="flex justify-between bg-gray-200 text-xl p-3 drop-shadow-sm">
        <div>
            <router-link :to="{name: 'home'}">Home</router-link>
        </div>
        <div>
            <router-link class="mr-3" :to="{name: 'dashboard'}">Dashboard</router-link>
            <router-link :to="{name: 'login'}">Log In</router-link>
        </div>
    </nav>
</template>