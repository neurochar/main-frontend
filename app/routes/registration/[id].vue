<script setup lang="ts">
    definePageMeta({
        validate: async (route) => {
            return typeof route.params.id === 'string';
        },
    });

    const route = useRoute();
</script>

<template>
    <LazyPageRegistration :url-id="String(route.params.id)" />
</template>

<style lang="less"></style>
