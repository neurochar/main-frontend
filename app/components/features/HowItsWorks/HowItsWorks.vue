<script setup lang="ts">
    import type { UseModalReturnType } from 'vue-final-modal';

    const props = defineProps<{
        modalObj: () => UseModalReturnType<any>;
    }>();
</script>

<template>
    <div :class="$style.wrapper">
        <div :class="$style.videoContainer">
            <video
                :class="$style.video"
                src="/demo.mp4"
                autoplay
                muted
                controls
            />
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .wrapper {
        width: 100%;
    }

    .videoContainer {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
