<script setup lang="ts"></script>

<template>
    <div :class="$style.block_main">
        <div :class="$style.logo_block">
            <div :class="$style.logo"><div></div></div>
            <div :class="$style.text_1">AI-платформа для рекрутинга</div>
        </div>
        <div :class="$style.registration_block">
            <div :class="$style.title"><span>Регистрация</span></div>
            <div :class="$style.desc">Мы ещё дорабатываем платформу, поэтому сейчас можно пользоваться ей <span>бесплатно</span></div>
            <FeatureRegistration :class="$style.registration" />
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_main {
        .std-wrapper(100px, 0, 40px, 0);
    }

    .logo_block {
        width: 100%;

        > .logo {
            margin: 0 auto;
            max-width: 400px;
            position: relative;
            background: url('@/assets/icons/logo_2.svg') no-repeat center center;
            background-size: 100% auto;

            > div {
                padding-top: 14.25%;
            }
        }

        > .text_1 {
            margin: 30px 0 0 0;
            text-align: center;
            font-size: 26px;
            font-weight: 100;

            .width-size-sm-less({
                font-size: 20px;
            });
        }
    }

    .registration_block {
        margin-top: 100px;

        .width-size-sm-less({
            margin-top: 40px;
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
                font-size: 28px;
                padding: 15px 20px;
                border-radius: 20px;
            });
        }

        > .desc {
            margin-top: 30px;
            text-align: center;
            font-weight: 100;
            font-size: 18px;

            .width-size-sm-less({
                margin-top: 20px;
                font-size: 14px;
            });

            > span {
                font-weight: bold;
            }
        }

        > .registration {
            max-width: 318px;
            margin: 50px auto 0 auto;

            .width-size-sm-less({
                margin-top: 40px;
            });
        }
    }
</style>
