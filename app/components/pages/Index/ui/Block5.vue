<script setup lang="ts"></script>

<template>
    <div :class="$style.block_wrapper">
        <div :class="$style.wrapper">
            <div :class="$style.title">Что мы измеряем</div>
            <div :class="$style.desc">Мировой стандарт психодиагностики — 16 факторов личности, охватывающих полный психологический профиль кандидата</div>
            <div :class="[$style.blocks, 'fade-in']">
                <div>
                    <div :class="$style.type">A</div>
                    <div :class="$style.title">Общительность</div>
                    <div :class="$style.desc">открытость vs замкнутость</div>
                </div>
                <div>
                    <div :class="$style.type">B</div>
                    <div :class="$style.title">Интеллект</div>
                    <div :class="$style.desc">абстрактное мышление</div>
                </div>
                <div>
                    <div :class="$style.type">C</div>
                    <div :class="$style.title">Эмоц. устойчивость</div>
                    <div :class="$style.desc">стабильность vs тревожность</div>
                </div>
                <div>
                    <div :class="$style.type">E</div>
                    <div :class="$style.title">Доминантность</div>
                    <div :class="$style.desc">настойчивость, напористость</div>
                </div>
                <div>
                    <div :class="$style.type">F</div>
                    <div :class="$style.title">Экспрессивность</div>
                    <div :class="$style.desc">энергичность, живость</div>
                </div>
                <div>
                    <div :class="$style.type">G</div>
                    <div :class="$style.title">Норматив. поведения</div>
                    <div :class="$style.desc">ответственность, дисциплина</div>
                </div>
                <div>
                    <div :class="$style.type">H</div>
                    <div :class="$style.title">Смелость</div>
                    <div :class="$style.desc">уверенность в контактах</div>
                </div>
                <div>
                    <div :class="$style.type">I</div>
                    <div :class="$style.title">Чувствительность</div>
                    <div :class="$style.desc">интуиция, эмпатия</div>
                </div>
                <div>
                    <div :class="$style.type">L</div>
                    <div :class="$style.title">Подозрительность</div>
                    <div :class="$style.desc">критичность, бдительность</div>
                </div>
                <div>
                    <div :class="$style.type">M</div>
                    <div :class="$style.title">Мечтательность</div>
                    <div :class="$style.desc">воображение, креативность</div>
                </div>
                <div>
                    <div :class="$style.type">N</div>
                    <div :class="$style.title">Дипломатичность</div>
                    <div :class="$style.desc">гибкость, тактичность</div>
                </div>
                <div>
                    <div :class="$style.type">O</div>
                    <div :class="$style.title">Тревожность</div>
                    <div :class="$style.desc">склонность к беспокойству</div>
                </div>
                <div>
                    <div :class="$style.type">Q1</div>
                    <div :class="$style.title">Радикализм</div>
                    <div :class="$style.desc">открытость к переменам</div>
                </div>
                <div>
                    <div :class="$style.type">Q2</div>
                    <div :class="$style.title">Самодостаточность</div>
                    <div :class="$style.desc">независимость суждений</div>
                </div>
                <div>
                    <div :class="$style.type">Q3</div>
                    <div :class="$style.title">Самоконтроль</div>
                    <div :class="$style.desc">организованность, точность</div>
                </div>
                <div>
                    <div :class="$style.type">Q4</div>
                    <div :class="$style.title">Напряжённость</div>
                    <div :class="$style.desc">уровень внутреннего стресса</div>
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
                max-width: 750px;
                margin: 10px auto 0 auto;
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
                gap: 15px;
                margin-top: 60px;

                > div {
                    background-color: var(--bg-color-2);
                    border-radius: 10px;
                    border: 1px solid var(--border-color-1);
                    padding: 15px;

                    > .type {
                        width: 28px;
                        line-height: 28px;
                        text-align: center;
                        font-size: 12px;
                        font-weight: bold;
                        color: var(--color-1);
                        background: var(--bg-color-4);
                        border-radius: 6px;
                    }

                    > .title {
                        margin-top: 10px;
                        font-size: 16px;
                        font-weight: 500;

                        .width-size-sm-less({
                            font-size: 12px;
                        });
                    }

                    > .desc {
                        margin-top: 5px;
                        font-size: 14px;
                        line-height: 1.5;
                        color: var(--font-color-3);

                        .width-size-sm-less({
                            font-size: 12px;
                        });
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
                        }
                    }
                }

                .width-size-sm-more({
                    &:global(.visible) > div:nth-child(5), &:global(.visible) > div:nth-child(6), &:global(.visible) > div:nth-child(7), &:global(.visible) > div:nth-child(8) {
                        transition-delay: 0.5s;
                    }

                    &:global(.visible) > div:nth-child(9), &:global(.visible) > div:nth-child(10), &:global(.visible) > div:nth-child(11), &:global(.visible) > div:nth-child(12) {
                        transition-delay: 1s;
                    }

                    &:global(.visible) > div:nth-child(13), &:global(.visible) > div:nth-child(14), &:global(.visible) > div:nth-child(15), &:global(.visible) > div:nth-child(16) {
                        transition-delay: 1.5s;
                    }
                });

                .width-size-less(1000px, {
                    grid-template-columns: repeat(2, 1fr);
                });

                .width-size-sm-less({
                    // grid-template-columns: repeat(1, 1fr);
                    gap: 10px;
                    margin-top: 20px;

                    > div {
                        padding: 10px;
                    }
                });
            }
        }
    }
</style>
