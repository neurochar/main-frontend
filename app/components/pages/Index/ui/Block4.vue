<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div>
                <div :class="[$style.block_left, 'fade-in']">
                    <div :class="$style.title">Пример профиля кандидата</div>
                    <div :class="$style.text">
                        После прохождения теста вы получаете чёткий, структурированный отчёт по каждому кандидату. Никакой субъективности — только данные.
                    </div>
                    <div :class="$style.points">
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Оценка по 16 факторам личности (шкала 0–100)</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Индекс соответствия роли на основе профиля вакансии</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Сравнение кандидатов в одной таблице</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Рекомендации по вопросам для глубинного интервью</div>
                        </div>
                    </div>
                </div>
                <div :class="$style.block_right">
                    <div :class="[$style.profile_result, 'fade-in']">
                        <div :class="$style.top">
                            <div :class="$style.left">
                                <div :class="$style.title">Профиль кандидата</div>
                                <div :class="$style.name">Алексей Соколов</div>
                                <div :class="$style.job_title">Старший менеджер по продажам</div>
                            </div>
                            <div :class="$style.right">
                                <div :class="$style.value">89</div>
                                <div :class="$style.desc">Индекс соответствия</div>
                            </div>
                        </div>
                        <div :class="[$style.metrics, 'fade-in']">
                            <div>
                                <div :class="$style.top">
                                    <div :class="$style.title">Общительность (A)</div>
                                    <div :class="$style.value">78</div>
                                </div>
                                <div :class="$style.line">
                                    <div :class="$style.bg"></div>
                                    <div :class="$style.cursor"></div>
                                </div>
                            </div>
                            <div>
                                <div :class="$style.top">
                                    <div :class="$style.title">Эмоциональная устойчивость (C)</div>
                                    <div :class="$style.value">91</div>
                                </div>
                                <div :class="$style.line">
                                    <div :class="$style.bg"></div>
                                    <div :class="$style.cursor"></div>
                                </div>
                            </div>
                            <div>
                                <div :class="$style.top">
                                    <div :class="$style.title">Доминантность (E)</div>
                                    <div :class="$style.value">85</div>
                                </div>
                                <div :class="$style.line">
                                    <div :class="$style.bg"></div>
                                    <div :class="$style.cursor"></div>
                                </div>
                            </div>
                            <div>
                                <div :class="$style.top">
                                    <div :class="$style.title">Нормативность поведения (G)</div>
                                    <div :class="$style.value">93</div>
                                </div>
                                <div :class="$style.line">
                                    <div :class="$style.bg"></div>
                                    <div :class="$style.cursor"></div>
                                </div>
                            </div>
                            <div>
                                <div :class="$style.top">
                                    <div :class="$style.title">Самоконтроль (Q3)</div>
                                    <div :class="$style.value">88</div>
                                </div>
                                <div :class="$style.line">
                                    <div :class="$style.bg"></div>
                                    <div :class="$style.cursor"></div>
                                </div>
                            </div>
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
        background: var(--bg-color-1);
        border-top: 1px solid var(--border-color-1);
        border-bottom: 1px solid var(--border-color-1);
        padding: 60px 0;

        .width-size-sm-less({
            padding: 30px 0;
        });

        > .wrapper {
            .std-wrapper();

            > div {
                display: flex;
                gap: 130px;
                align-items: center;

                .width-size-less(1500px, {
                    gap: 80px;
                });

                .width-size-less(1250px, {
                    flex-wrap: wrap;
                });

                .width-size-sm-less({
                    gap: 30px;
                });
            }
        }
    }

    .block_left {
        width: calc(50% - 65px);
        flex-shrink: 0;

        .width-size-less(1250px, {
            width: 100%;
        });

        > .title {
            font-size: 46px;
            font-weight: 500;
            line-height: 1.1;

            .width-size-sm-less({
                font-size: 24px;
            });
        }

        > .text {
            margin-top: 30px;
            font-size: 18px;
            line-height: 1.5;
            color: var(--font-color-3);

            .width-size-sm-less({
                margin-top: 15px;
                font-size: 14px;
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

            &:global(.fade-in) {
                opacity: 0;
                transform: translateY(40px);
                transition:
                    opacity 0.6s ease,
                    transform 0.6s ease;

                .width-size-sm-more({
                    transition-delay: 1s;
                });

                &:global(.visible) {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }

        &:global(.fade-in) {
            > .title,
            > .text,
            > .points {
                opacity: 0;
                transform: translateY(40px);
                transition:
                    opacity 0.6s ease,
                    transform 0.6s ease;
            }

            &:global(.visible) {
                > .title,
                > .text,
                > .points {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            > .text {
                transition-delay: 0.5s;
            }

            > .points {
                transition-delay: 1s;
            }
        }
    }

    .block_right {
        width: calc(50% - 65px);
        flex-shrink: 0;

        .width-size-less(1250px, {
            width: 100%;
        });

        > .profile_result {
            background-color: var(--body-bg-color);
            border-radius: 16px;
            border: 1px solid var(--border-color-1);
            padding: 30px;

            .width-size-sm-less({
                padding: 20px;
            });

            &:global(.fade-in) {
                opacity: 0;
                transform: translateY(40px);
                transition:
                    opacity 0.6s ease,
                    transform 0.6s ease;

                &:global(.visible) {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            > .top {
                padding-bottom: 20px;
                border-bottom: 1px solid var(--border-color-1);
                display: flex;
                justify-content: space-between;
                align-items: center;

                > .left {
                    > .title {
                        text-transform: uppercase;
                        font-size: 12px;
                        color: var(--font-color-3);
                    }

                    > .name {
                        margin-top: 5px;
                        font-size: 20px;
                        font-weight: 500;

                        .width-size-sm-less({
                            font-size: 16px;
                        });
                    }

                    > .job_title {
                        margin-top: 5px;
                        font-size: 14px;
                        color: var(--font-color-3);

                        .width-size-sm-less({
                            font-size: 12px;
                        });
                    }
                }

                > .right {
                    text-align: right;

                    > .value {
                        font-size: 36px;
                        line-height: 1;
                        font-weight: bold;
                        color: var(--color-1);
                    }

                    > .desc {
                        margin-top: 5px;
                        font-size: 12px;
                        color: var(--font-color-3);
                    }
                }
            }

            > .metrics {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 20px;

                > div {
                    > .top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        > .title {
                            font-size: 14px;

                            .width-size-sm-less({
                                font-size: 12px;
                            });
                        }

                        > .value {
                            font-size: 14px;
                            font-weight: bold;
                            color: var(--color-1);
                        }
                    }

                    > .line {
                        margin-top: 8px;
                        position: relative;

                        > .bg {
                            height: 6px;
                            border-radius: 3px;
                            background-color: var(--bg-color-3);
                        }

                        > .cursor {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 0;
                            height: 6px;
                            border-radius: 3px;
                            background: linear-gradient(to right, var(--color-1), var(--color-3));
                            transition: width 0.6s ease;
                        }
                    }
                }

                &:global(.visible) > div:nth-child(1) {
                    > .line {
                        > .cursor {
                            width: 78%;
                        }
                    }
                }

                &:global(.visible) > div:nth-child(2) {
                    > .line {
                        > .cursor {
                            width: 85%;
                            transition-delay: 0.5s;
                        }
                    }
                }

                &:global(.visible) > div:nth-child(3) {
                    > .line {
                        > .cursor {
                            width: 93%;
                            transition-delay: 1s;
                        }
                    }
                }

                &:global(.visible) > div:nth-child(4) {
                    > .line {
                        > .cursor {
                            width: 88%;
                            transition-delay: 1.5s;
                        }
                    }
                }

                &:global(.visible) > div:nth-child(5) {
                    > .line {
                        > .cursor {
                            width: 91%;
                            transition-delay: 2s;
                        }
                    }
                }
            }
        }
    }
</style>
