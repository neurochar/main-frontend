<script setup lang="ts">
import { elementAnimate } from '~/shared/helpers/functions';

const vModel = defineModel<boolean>({ default: false });

const emit = defineEmits(['modelUpdate']);

withDefaults(
    defineProps<{
        iconVariant?: 'default' | 'big';
    }>(),
    {
        iconVariant: 'default',
    },
);

const isOpened = ref(vModel.value);
const isOpenedStart = ref(vModel.value);
const isOpenedEnd = ref(vModel.value);

const isBlock = ref(false);

const contentRef = useTemplateRef('contentRef');
const contentSubRef = useTemplateRef('contentSubRef');

watch(vModel, (value) => {
    isOpened.value = value;
    emit('modelUpdate', value);
});

watch(isOpened, (value) => {
    vModel.value = value;
    isBlock.value = true;

    if (value) {
        isOpenedStart.value = true;

        nextTick(() => {
            if (contentRef.value && contentSubRef.value) {
                elementAnimate(contentRef.value, {
                    transition: 'height 0.3s ease',
                    properties: {
                        height: `${contentSubRef.value.offsetHeight}px`,
                    },
                }).then((clear) => {
                    isOpenedEnd.value = true;
                    nextTick(() => {
                        clear();
                        isBlock.value = false;
                    });
                });
            }
        });
    } else {
        if (!contentRef.value || !contentSubRef.value) {
            return;
        }
        contentRef.value.style.height = `${contentSubRef.value.offsetHeight}px`;
        isOpenedEnd.value = false;
        nextTick(() => {
            elementAnimate(contentRef.value!, {
                transition: 'height 0.3s ease',
                properties: {
                    height: `0px`,
                },
            }).then((clear) => {
                isOpenedStart.value = false;
                nextTick(() => {
                    clear();
                    isBlock.value = false;
                });
            });
        });
    }
});

const toogle = () => {
    if (isBlock.value) return;
    isOpened.value = !isOpened.value;
};
</script>

<template>
    <div :class="[$style.wrapper, isOpenedStart ? $style.opened_start : false, isOpenedEnd ? $style.opened_end : false]">
        <button
            type="button"
            :class="[$style.title, $style[`icon_${iconVariant}`]]"
            @click="toogle"
        >
            <span :class="$style.value"
                ><slot
                    :name="`title`"
                    :is-opened="isOpened"
            /></span>
            <span :class="$style.icon">&nbsp;</span>
        </button>
        <div
            ref="contentRef"
            :class="$style.content"
        >
            <div
                ref="contentSubRef"
                :class="$style.content_sub"
            >
                <slot
                    :name="`default`"
                    :is-opened="isOpened"
                />
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
@import '@styles/includes';

.wrapper {
    background-color: var(--bg-color-1);
    border-radius: 10px;
    border: 1px solid var(--border-color-1);
}

.title {
    display: flex;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;

    > .value {
        display: block;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        padding-right: 10px;
        //white-space: nowrap;
        //text-overflow: ellipsis;
        color: var(--font-color-3);
    }

    > .icon {
        display: block;
        width: 12px;
        flex-shrink: 0;
        position: relative;
        font-size: 0;

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 12px;
            height: 8px;
            left: calc(50% - 6px);
            top: calc(50% - 4px);
            background-color: #c1c0c1;
            mask: url('@/assets/icons/ui/select_icon.svg') no-repeat center center;
            mask-size: 12px auto;
        }
    }

    &.icon_big {
        > .icon {
            width: 24px;

            &::after {
                width: 24px;
                height: 16px;
                left: calc(50% - 12px);
                top: calc(50% - 8px);
                mask-size: 24px auto;
            }
        }
    }
}

.content {
    display: none;
}

.wrapper {
    &.opened_start {
        > .title {
            > .icon {
                &::after {
                    transform: rotate(180deg);
                    top: calc(50% - 5px);
                }
            }

            &.icon_big {
                > .icon {
                    &::after {
                        top: calc(50% - 7px);
                    }
                }
            }
        }

        > .content {
            display: block;
            height: 1px;
            overflow: hidden;
        }

        &.opened_end {
            > .content {
                height: auto;
                overflow: visible;
            }
        }
    }
}

.content_sub {
    padding: 10px 40px 30px 40px;
}

.width-size-sm-less({
    .content_sub {
        padding:0 20px 20px 20px;
    }
});
</style>
