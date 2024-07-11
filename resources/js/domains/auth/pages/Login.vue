<script setup lang="ts">
    import { reactive } from 'vue';
    import LogInForm from '../components/LogInForm.vue';
    import { loginUser } from '../store';

    const user = reactive({});
</script>

<template>
    <LogInForm @submitUser="(user) => loginUser('/login', user)" :user="user" />
</template>