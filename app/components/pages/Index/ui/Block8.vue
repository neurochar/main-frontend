<script setup lang="ts">
    import { openRegistration } from '~/components/features/Registration/modals/useRegistration';
</script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="$style.title">Простая цена</div>
            <div :class="$style.desc">Платите только за те вакансии, которые закрываете. Без подписки, без скрытых условий.</div>
            <div :class="$style.blocks">
                <div class="fade-in">
                    <div :class="$style.top">
                        <div :class="$style.title">Стандартный</div>
                        <div :class="$style.price">
                            <div :class="$style.value">5 000</div>
                            <div :class="$style.unit">₽ / мес</div>
                        </div>
                        <div :class="$style.desc">за одну вакансию · без ограничений по кандидатам</div>
                    </div>
                    <div :class="$style.points">
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Неограниченное число кандидатов на вакансию</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">16-факторный профиль личности</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Индекс соответствия роли</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Опциональный прокторинг — контроль списывания</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Фактор лживости — оценка достоверности ответов</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Сравнительная таблица кандидатов</div>
                        </div>
                        <div>
                            <div :class="$style.icon"></div>
                            <div :class="$style.text">Рекомендации для интервью</div>
                        </div>
                    </div>
                    <div :class="$style.button">
                        <button
                            type="button"
                            :class="['button_1', 'full']"
                            @click="openRegistration()"
                        >
                            Начать
                        </button>
                    </div>
                    <div :class="$style.button_desc">Первая вакансия бесплатно — привязка карты не нужна</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_wrapper {
        padding: 100px 0;

        .width-size-sm-less({
            padding: 30px 0;
        });

        > .wrapper {
            .std-wrapper();

            > .title {
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

            .blocks {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 60px;
                flex-wrap: wrap;

                > div {
                    flex-shrink: 0;
                    width: 100%;
                    max-width: 512px;
                    background-color: var(--bg-color-2);
                    border-radius: 16px;
                    border: 1px solid var(--border-color-2);
                    padding: 30px;
                    box-shadow: 0 25px 50px -12px hsla(190, 90%, 50%, 0.1);

                    > .top {
                        > .title {
                            text-transform: uppercase;
                            font-size: 12px;
                            color: var(--font-color-3);
                        }

                        > .price {
                            display: flex;
                            align-items: baseline;
                            gap: 10px;

                            > .value {
                                font-weight: 500;
                                font-size: 48px;
                            }

                            > .unit {
                                color: var(--font-color-3);
                            }
                        }

                        > .desc {
                            color: var(--font-color-3);
                            font-size: 14px;
                        }
                    }

                    > .points {
                        margin-top: 30px;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        .width-size-sm-less({
                            margin-top: 20px;
                        });

                        > div {
                            display: flex;
                            gap: 15px;

                            .width-size-sm-less({
                                align-items: center;
                            });

                            > .icon {
                                width: 18px;
                                height: 18px;
                                flex-shrink: 0;
                                background-color: var(--color-1);
                                mask: url('@/assets/icons/circle-check.svg') no-repeat center center;
                                mask-size: contain;
                            }

                            > .text {
                                font-size: 14px;
                                margin-top: 0px;

                                .width-size-sm-less({
                                    font-size: 12px;
                                    margin-top: 0;
                                });
                            }
                        }
                    }

                    > .button {
                        margin-top: 30px;

                        .width-size-sm-less({
                            margin-top: 20px;
                        });
                    }

                    > .button_desc {
                        margin-top: 20px;
                        color: var(--font-color-3);
                        font-size: 12px;
                        text-align: center;

                        .width-size-sm-less({
                            margin-top: 15px;
                        });
                    }

                    &:global(.fade-in) {
                        opacity: 0;
                        transform: translateY(40px);
                        transition:
                            opacity 0.6s ease,
                            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

                        &:global(.visible) {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }

                .width-size-sm-less({
                    gap: 20px;
                    margin-top: 20px;

                    > div {
                        padding: 20px;
                    }
                });
            }
        }
    }
</style>
