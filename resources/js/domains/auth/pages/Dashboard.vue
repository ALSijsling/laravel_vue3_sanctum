<script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    const user = ref();

    onMounted(async () => {
        axios.get('api/user').then(response => {
            user.value = response.data;
        })
    });
</script>

<template>
    <h3 class="font-bold text-xl">Welcome {{ user.name }}</h3>
</template>