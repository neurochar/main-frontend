<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="$style.title">Используется бизнесом и HR-специалистами</div>
            <div :class="$style.blocks">
                <div class="fade-in">
                    <div :class="$style.value">100+</div>
                    <div :class="$style.title">Протестированных кандидатов</div>
                </div>
                <div class="fade-in">
                    <div :class="$style.value">4</div>
                    <div :class="$style.title">Компании используют Нейрочар</div>
                </div>
                <div class="fade-in">
                    <div :class="$style.value">82%</div>
                    <div :class="$style.title">Завершают тест</div>
                </div>
                <div class="fade-in">
                    <div :class="$style.value">3×</div>
                    <div :class="$style.title">Быстрее первичный отбор</div>
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

            > .title {
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 14px;
                color: var(--font-color-3);
            }

            .blocks {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 40px;
                margin-top: 40px;

                > div {
                    text-align: center;

                    > .value {
                        font-size: 30px;
                        font-weight: bold;
                        color: var(--color-1);
                    }

                    > .title {
                        font-size: 14px;
                        color: var(--font-color-3);
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

                .width-size-less(800px, {
                    grid-template-columns: repeat(2, 1fr);
                });

                .width-size-sm-less({
                    gap: 30px;
                    margin-top: 30px;

                    > div {
                        > .value {
                            font-size: 24px;
                        }

                        > .title {
                            font-size: 12px;
                        }
                    }
                });
            }
        }
    }
</style>
