<script setup lang="ts">
    const pageTitle = 'Регистрация';

    useSeoMeta({
        title: pageTitle,
    });

    const props = defineProps<{
        urlId: string;
    }>();
</script>

<template>
    <div :class="$style.block_main">
        <div :class="$style.registration_block">
            <div :class="$style.title">Регистрация вашего пространства</div>
            <FeatureFinishRegistration
                :id="urlId"
                :class="$style.registration"
            />
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_main {
        .std-wrapper(100px, 100px, 30px, 30px);
    }

    .registration_block {
        > .title {
            text-align: center;
            font-size: 40px;
            font-weight: 500;

            .width-size-sm-less({
                font-size: 24px;
            });
        }

        > .registration {
            max-width: 695px;
            margin: 50px auto 0 auto;

            .width-size-sm-less({
                margin-top: 30px;
            });
        }
    }
</style>
