<script setup lang="ts">
    defineProps<{
        wrapperClass?: string;
        nClass?: string;
        textClass?: string;
    }>();
</script>

<template>
    <span :class="[$style.wrapper, wrapperClass]">
        <span :class="[$style.n, nClass]"></span>
        <span :class="[$style.text, textClass]">ЕЙРОЧАР</span>
    </span>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .wrapper {
        display: inline-flex;
        align-items: baseline;
        font-size: 0;
        line-height: 1;
    }

    .n {
        background: url('@/assets/icons/n-logo.svg') no-repeat left bottom;
        background-size: auto 100%;
    }

    .text {
        letter-spacing: 2px;
    }
</style>
