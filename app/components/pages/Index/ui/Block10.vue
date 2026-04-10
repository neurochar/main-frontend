<script setup lang="ts">
    import { openHowItsWorks } from '~/components/features/HowItsWorks/modals/useHowItsWorks';
    import { openRegistration } from '~/components/features/Registration/modals/useRegistration';
</script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.bg">
            <div :class="[$style.item, $style.item_1]"></div>
            <div :class="[$style.item, $style.item_2]"></div>
        </div>
        <div :class="$style.wrapper">
            <div :class="$style.title">Попробуйте Нейрочар на своей вакансии</div>
            <div :class="$style.desc">Создайте профиль профессии и получите более объективную оценку кандидатов. Первая вакансия — бесплатно.</div>
            <div :class="$style.buttons">
                <button
                    type="button"
                    :class="['button_1', 'big', $style.start_button]"
                    @click="openRegistration()"
                >
                    Начать бесплатно <span>➔</span>
                </button>
                <button
                    type="button"
                    :class="['button_1', 'big', 'glass']"
                    @click="openHowItsWorks()"
                >
                    Как это работает?
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_wrapper {
        padding: 100px 0;
        position: relative;

        > .bg {
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            inset: 0;
            z-index: -1;
            pointer-events: none;

            .item {
                position: absolute;
                border-radius: 50%;
                filter: blur(120px);
            }

            .item_1 {
                top: 0;
                left: 33.333%;
                width: 500px;
                height: 500px;
                background: rgba(0, 150, 255, 0.1);
            }

            .item_2 {
                bottom: 0;
                right: 33.333%;
                width: 400px;
                height: 400px;
                background: rgba(255, 170, 0, 0.08);
                filter: blur(100px);
            }
        }

        .width-size-sm-less({
            padding: 30px 0;
        });

        > .wrapper {
            .std-wrapper();

            > .title {
                max-width: 750px;
                margin: 0 auto;
                text-align: center;
                font-size: 48px;
                font-weight: 500;

                .width-size-sm-less({
                    font-size: 24px;
                });
            }

            > .desc {
                margin: 10px auto 0 auto;
                text-align: center;
                font-size: 18px;
                color: var(--font-color-3);
                max-width: 750px;
                text-align: center;

                .width-size-sm-less({
                    font-size: 16px;
                });
            }

            > .buttons {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                margin-top: 40px;

                .width-size-sm-less({
                    margin-top: 20px;
                });
            }
        }
    }

    .start_button {
        > span {
            display: inline-block;
            width: 25px;
            text-align: left;
            margin-left: 10px;
            transition: padding-left 0.25s ease;
        }

        .hover({
            > span {
                padding-left: 9px;
            }
        });
    }
</style>
