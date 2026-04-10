<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="$style.title">Как работает Нейрочар</div>
            <div :class="$style.desc">Четыре простых шага от вакансии до взвешенного решения о кандидате</div>
            <div :class="$style.blocks">
                <div class="fade-in">
                    <div :class="$style.num">01</div>
                    <div :class="$style.title">Создайте профиль вакансии</div>
                    <div :class="$style.desc">
                        Укажите должность и ключевые компетенции, которые важны для роли. Система подберёт нужные целевые параметры оценки.
                    </div>
                </div>
                <div class="fade-in">
                    <div :class="$style.num">02</div>
                    <div :class="$style.title">Отправьте тест кандидату</div>
                    <div :class="$style.desc">Кандидат получает персональную ссылку на почту и проходит тест без регистрации — в любое удобное время.</div>
                </div>
                <div class="fade-in">
                    <div :class="$style.num">03</div>
                    <div :class="$style.title">Получите психометрический профиль</div>
                    <div :class="$style.desc">Через 20–30 минут вы получаете подробный отчёт по 16 факторам личности и общим индексом соответствия.</div>
                </div>
                <div class="fade-in">
                    <div :class="$style.num">04</div>
                    <div :class="$style.title">Быстро принимайте решения</div>
                    <div :class="$style.desc">Сравнивайте кандидатов объективно, фокусируйтесь на интервью только с теми, кто соответствует роли.</div>
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
                margin-top: 10px;
                text-align: center;
                font-size: 18px;
                color: var(--font-color-3);

                .width-size-sm-less({
                    font-size: 16px;
                });
            }

            .blocks {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
                margin-top: 60px;

                > div {
                    background-color: var(--bg-color-2);
                    border-radius: 16px;
                    border: 1px solid var(--border-color-1);
                    padding: 30px;

                    > .num {
                        font-size: 36px;
                        font-weight: 500;
                        color: var(--font-color-4);

                        .width-size-sm-less({
                            font-size: 28px;
                        });
                    }

                    > .title {
                        margin-top: 20px;
                        font-size: 18px;
                        font-weight: 500;
                        min-height: 50px;

                        .width-size-sm-less({
                            font-size: 16px;
                            min-height: 0;
                        });
                    }

                    > .desc {
                        margin-top: 10px;
                        font-size: 14px;
                        line-height: 1.5;
                        color: var(--font-color-3);

                        .width-size-sm-less({
                            font-size: 12px;
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

                    .width-size-sm-more({
                        &:nth-child(2):global(.fade-in) {
                            transition-delay: 0.5s;
                        }

                        &:nth-child(3):global(.fade-in) {
                            transition-delay: 1s;
                        }

                        &:nth-child(4):global(.fade-in) {
                            transition-delay: 1.5s;
                        }
                    });
                }

                .width-size-less(1000px, {
                    grid-template-columns: repeat(2, 1fr);
                });

                .width-size-sm-less({
                    grid-template-columns: repeat(1, 1fr);
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
