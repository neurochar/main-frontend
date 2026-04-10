<script setup lang="ts">
    import type { UseModalReturnType } from 'vue-final-modal';

    const props = defineProps<{
        title: MaybeRef<string>;
        modalObj: () => UseModalReturnType<any>;
    }>();
</script>

<template>
    <SharedModalsDefaultModal :modal-obj="props.modalObj()">
        <SharedModalsDefaultWrapper
            :modal-obj="props.modalObj()"
            :class-name="$style.box_wrapper"
        >
            <template #title>{{ title }}</template>
            <template #content>
                <div :class="$style.content">
                    <FeatureHowItsWorks :modal-obj="modalObj" />
                </div>
            </template>
        </SharedModalsDefaultWrapper>
    </SharedModalsDefaultModal>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .box_wrapper {
        width: 100%;
        max-width: 1000px;
    }

    .content {
    }
</style>
