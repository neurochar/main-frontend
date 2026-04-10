<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="[$style.blocks, 'fade-in']">
                <div :class="$style.blocks_1">
                    <div :class="$style.title">Почему первичный отбор занимает так много времени</div>
                    <div :class="$style.points">
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Десятки одинаковых резюме без реального понимания кандидата</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Телефонные скрининги отнимают часы при низкой конверсии</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Субъективные впечатления вместо объективных данных</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Ошибки найма дорого обходятся — до 30% годовой зарплаты</div>
                        </div>
                    </div>
                </div>
                <div :class="$style.blocks_2">
                    <div :class="$style.title">Что меняет Нейрочар</div>
                    <div :class="$style.points">
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Объективный психометрический профиль до первого звонка</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Экономия до 5 часов в неделю на первичном отборе</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Сравнение кандидатов по данным, а не по интуиции</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Меньше ошибок найма — выше удержание сотрудников</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_wrapper {
        border-top: 1px solid var(--border-color-1);
        padding: 100px 0;

        .width-size-sm-less({
            padding: 30px 0;
        });

        > .wrapper {
            .std-wrapper();

            .blocks {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 50px;

                > div {
                    background-color: var(--bg-color-2);
                    border-radius: 16px;
                    border: 1px solid var(--border-color-1);
                    padding: 30px;

                    > .title {
                        font-size: 30px;
                        font-weight: 500;
                        line-height: 1.1;

                        .width-size-sm-less({
                            font-size: 24px;
                        });
                    }

                    > .points {
                        margin-top: 30px;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        > div {
                            display: flex;
                            gap: 15px;

                            .width-size-sm-less({
                                align-items: center;
                            });

                            > .icon {
                                width: 24px;
                                height: 24px;
                                flex-shrink: 0;
                                background-color: var(--color-1);
                                mask: url('@/assets/icons/circle-check.svg') no-repeat center center;
                                mask-size: contain;
                            }

                            > .text {
                                color: var(--font-color-3);
                                font-size: 16px;
                                margin-top: 1px;

                                .width-size-sm-less({
                                    font-size: 12px;
                                    margin-top: 0;
                                });
                            }
                        }
                    }

                    &.blocks_1 {
                        > .title {
                            color: var(--font-color-3);
                        }

                        > .points {
                            > div {
                                display: flex;
                                gap: 15px;

                                .width-size-sm-less({
                                    align-items: center;
                                });

                                > .icon {
                                    mask-image: url('@/assets/icons/ban.svg');
                                    background-color: var(--font-color-3);
                                }
                            }
                        }
                    }

                    &.blocks_2 {
                        > .title {
                            color: var(--color-1);
                        }

                        > .points {
                            > div {
                                > .text {
                                    color: var(--font-color-1);
                                }
                            }
                        }
                    }
                }

                &:global(.fade-in) {
                    > div {
                        opacity: 0;
                        transform: translateY(40px);
                        transition:
                            opacity 0.6s ease,
                            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                    }

                    &:global(.visible) {
                        > div {
                            opacity: 1;
                            transform: translateY(0);

                            &:nth-child(2) {
                                transition-delay: 0.5s;
                            }
                        }
                    }
                }

                .width-size-less(1000px, {
                    grid-template-columns: repeat(1, 1fr);
                });

                .width-size-sm-less({
                    gap: 20px;

                    > div {
                        padding: 20px;
                    }
                });
            }
        }
    }
</style>
