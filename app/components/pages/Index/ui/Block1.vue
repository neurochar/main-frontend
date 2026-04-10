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
            <div>
                <div :class="[$style.block_1_info, 'fade-in']">
                    <div :class="['badge', $style.badge]">
                        <span class="dot"></span>
                        Психометрия на службе HR
                    </div>
                    <div :class="$style.title">Оценивайте <span>soft skills</span> кандидатов до интервью</div>
                    <div :class="$style.text">
                        Нейрочар — сервис для HR-специалистов и представителей бизнеса, который позволяет на основе психометрии быстро и объективно оценить
                        личностные качества кандидата и принимать более взвешенные решения.
                    </div>
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
                <div :class="$style.block_1_img">
                    <div :class="[$style.img, 'fade-in']"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_wrapper {
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
            }

            .item_1 {
                top: 25%;
                left: 25%;
                width: 500px;
                height: 500px;
                background-color: hsla(190, 90%, 50%, 0.15);
                filter: blur(130px);
            }

            .item_2 {
                bottom: 25%;
                right: 25%;
                width: 600px;
                height: 600px;
                background-color: hsla(35, 90%, 55%, 0.1);
                filter: blur(160px);
            }
        }

        > .wrapper {
            .std-wrapper();

            > div {
                padding: 130px 0;
                display: flex;
                gap: 130px;
                align-items: center;

                .width-size-less(1500px, {
                    padding: 80px 0;
                    gap: 80px;
                });

                .width-size-less(1250px, {
                    flex-wrap: wrap;
                    gap: 60px;
                    justify-content: center;
                });

                .width-size-sm-less({
                    padding: 30px 0;
                });
            }
        }
    }

    .block_1_info {
        width: calc(50% - 65px);
        flex-shrink: 0;

        .width-size-less(1250px, {
            width: 100%;
        });

        > .badge {
            //
        }

        > .title {
            margin-top: 20px;
            font-size: 60px;
            font-weight: 500;
            line-height: 1.1;

            .width-size-sm-less({
                font-size: 28px;
            });

            > span {
                background: linear-gradient(to right, #0fd0f2, #f5a623);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        > .text {
            margin-top: 30px;
            font-size: 20px;
            line-height: 1.5;
            color: var(--font-color-3);

            .width-size-sm-less({
                margin-top: 20px;
                font-size: 16px;
            });
        }

        > .buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 40px;

            .width-size-sm-less({
                margin-top: 20px;
            });
        }

        &:global(.fade-in) {
            > .badge,
            > .title,
            > .text,
            > .buttons {
                opacity: 0;
                transform: translateY(40px);
                transition:
                    opacity 0.6s ease,
                    transform 0.6s ease;
            }

            &:global(.visible) {
                > .badge,
                > .title,
                > .text,
                > .buttons {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            > .title {
                transition-delay: 0.5s;
            }

            > .text {
                transition-delay: 1s;
            }

            > .buttons {
                transition-delay: 1.5s;
            }
        }
    }

    .block_1_img {
        width: calc(50% - 65px);
        flex-shrink: 0;

        .width-size-less(1250px, {
            display: none;
        });

        > .img {
            padding-top: 75%;
            background: url('@/assets/images/block-1.jpg') #03132d no-repeat center center;
            background-size: cover;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px hsla(190, 90%, 50%, 0.1);

            &:global(.fade-in) {
                opacity: 0;
                transform: scale(0.9);
                transition:
                    opacity 0.6s ease,
                    transform 0.6s ease;

                &:global(.visible) {
                    opacity: 1;
                    transform: scale(1);
                }
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
