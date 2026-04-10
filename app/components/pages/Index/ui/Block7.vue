<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="$style.title">Кому подойдёт Нейрочар</div>
            <div :class="$style.desc">Инструмент для тех, кто хочет нанимать точнее и тратить меньше времени на отбор</div>
            <div :class="$style.blocks">
                <div class="fade-in">
                    <div :class="[$style.icon, $style.icon_1]"></div>
                    <div :class="$style.title">HR-специалист</div>
                    <div :class="$style.desc">
                        Работаете в крупной компании и обрабатываете поток кандидатов? Neurochar поможет быстро отобрать тех, кто действительно соответствует
                        корпоративной культуре и требованиям роли.
                    </div>
                    <div :class="$style.tags">
                        <div>Массовый найм</div>
                        <div>Командная работа</div>
                        <div>Корпоративная культура</div>
                    </div>
                </div>
                <div class="fade-in">
                    <div :class="[$style.icon, $style.icon_2]"></div>
                    <div :class="$style.title">Малый и средний бизнес</div>
                    <div :class="$style.desc">
                        Нет HR-отдела, но нужно нанять правильного человека? Вы сами проводите собеседования и цена ошибки высока. Neurochar даёт ясность до
                        первого звонка.
                    </div>
                    <div :class="$style.tags">
                        <div>Небольшая команда</div>
                        <div>Каждый найм важен</div>
                        <div>Экономия времени</div>
                    </div>
                </div>
                <div class="fade-in">
                    <div :class="[$style.icon, $style.icon_3]"></div>
                    <div :class="$style.title">Независимый рекрутер</div>
                    <div :class="$style.desc">
                        Выстраиваете репутацию на качестве кандидатов? Предлагайте клиентам объективные данные, а не только своё мнение — это выделяет вас среди
                        конкурентов.
                    </div>
                    <div :class="$style.tags">
                        <div>Качество кандидатов</div>
                        <div>Доверие клиентов</div>
                        <div>Дифференциация</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .block_wrapper {
        background-color: var(--bg-color-5);
        border-top: 1px solid var(--border-color-1);
        border-bottom: 1px solid var(--border-color-1);
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
                    width: calc((100% - 60px) / 3);
                    background-color: var(--body-bg-color);
                    border-radius: 16px;
                    border: 1px solid var(--border-color-1);
                    padding: 30px;

                    > .icon {
                        width: 50px;
                        height: 50px;
                        border-radius: 10px;
                        background-color: var(--bg-color-6);
                        position: relative;

                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background-color: var(--color-1);
                            mask-position: center center;
                            mask-repeat: no-repeat;
                            mask-size: 24px 24px;
                        }

                        .width-size-sm-less({
                            font-size: 28px;
                        });

                        &.icon_1 {
                            &::after {
                                mask-image: url('@/assets/icons/users.svg');
                            }
                        }

                        &.icon_2 {
                            &::after {
                                mask-image: url('@/assets/icons/briefcase.svg');
                            }
                        }

                        &.icon_3 {
                            &::after {
                                mask-image: url('@/assets/icons/user-check.svg');
                            }
                        }
                    }

                    > .title {
                        margin-top: 20px;
                        font-size: 24px;
                        font-weight: 500;

                        .width-size-sm-less({
                            font-size: 18px;
                        });
                    }

                    > .desc {
                        margin-top: 15px;
                        font-size: 14px;
                        line-height: 1.5;
                        color: var(--font-color-3);

                        .width-size-sm-less({
                            font-size: 12px;
                        });
                    }

                    > .tags {
                        margin-top: 30px;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;

                        > div {
                            display: flex;
                            align-items: center;
                            background-color: var(--bg-color-6);
                            border: 1px solid var(--border-color-2);
                            font-size: 12px;
                            line-height: 1;
                            height: 24px;
                            border-radius: 12px;
                            padding: 0 15px;
                            color: var(--color-1);
                        }
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
                    });
                }

                .width-size-less(1000px, {
                    > div {
                        width: calc((100% - 30px) / 2);
                    }
                });

                .width-size-sm-less({
                    > div {
                        width: 100%;
                    }

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
