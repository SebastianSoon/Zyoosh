<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

onBeforeMount(() => {
  router.push('/landing')
})

</script>

<template>
    <router-view />
</template>

<style scoped></style>
