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
            <div :class="$style.title"><span>Регистрация вашего пространства</span></div>
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
        .std-wrapper();
    }

    .registration_block {
        margin-top: 100px;

        .width-size-sm-less({
            margin-top: 30px;
        });

        > .title {
            text-align: center;
            font-size: 48px;
            font-weight: 300;

            > span {
                display: inline-block;
                padding: 20px 30px;
                background-color: rgba(0, 0, 0, 0.2);
                border-radius: 30px;
            }

            .width-size-sm-less({
                font-size: 24px;
                padding: 15px 20px;
                border-radius: 20px;
            });
        }

        > .registration {
            max-width: 700px;
            margin: 50px auto 0 auto;

            .width-size-sm-less({
                margin-top: 30px;
            });
        }
    }
</style>
