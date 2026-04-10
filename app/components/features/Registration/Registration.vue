<script setup lang="ts">
    import type { UseModalReturnType } from 'vue-final-modal';
    import { ApiError, tryToCatchApiErrors } from '~/shared/errors/errors';

    const api = useApi();

    const props = defineProps<{
        modalObj: () => UseModalReturnType<any>;
    }>();

    const formData = reactive({
        email: '',
    });

    const errors = ref<string[]>([]);

    const step = ref(1);

    const isSending = ref(false);

    interface IFormData {
        email: string;
    }

    const makeApiRequest = async (data: IFormData): Promise<void> => {
        try {
            const res = await api.v1.registrationPublicServiceStartRegistration({
                email: data.email,
            });

            if (res.error !== null) {
                throw res.error;
            }
        } catch (e: unknown) {
            throw tryToCatchApiErrors(e);
        }
    };

    const errorCodesToText: Record<string, string> = {
        INVALID_EMAIL: 'E-mail указан некорректно',
        DEMO_ALREADY_EXISTS: 'Аккаунт уже зарегистрирован',
    };

    const sendForm = async (e: Event) => {
        e.preventDefault();
        if (isSending.value) return;

        errors.value = [];
        if (formData.email.replaceAll(' ', '').length === 0) {
            errors.value.push('E-mail не указан');
        }

        if (!errors.value.length) {
            isSending.value = true;

            try {
                await makeApiRequest({ ...formData });

                step.value = 2;
            } catch (e) {
                if (e instanceof ApiError) {
                    if (e.textCode in errorCodesToText) {
                        errors.value = [errorCodesToText[e.textCode]!];
                    } else {
                        errors.value = e.formHints();
                    }
                }
            } finally {
                isSending.value = false;
            }
        }
    };
</script>

<template>
    <template v-if="step == 1">
        <div>
            <div
                v-if="errors.length"
                :class="$style.errors"
            >
                <template
                    v-for="(error, i) in errors"
                    :key="i"
                >
                    <div>— {{ error }}</div>
                </template>
            </div>
            <div :class="$style.form">
                <div :class="$style.email">
                    <SharedUiInput
                        v-model="formData.email"
                        @click="errors = []"
                    >
                        <template #placeholder> Ваш e-mail<span>*</span> </template>
                    </SharedUiInput>
                </div>
                <div :class="$style.button">
                    <button
                        type="button"
                        class="button_1 big full"
                        @click="sendForm"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    </template>
    <template v-else-if="step == 2">
        <div :class="$style.inform">
            <div :class="$style.desc">Проверьте свою почту, на нее придет ссылка для активации рабочего пространства.</div>
            <div :class="$style.button">
                <button
                    type="button"
                    class="button_1 big full"
                    @click="props.modalObj().close()"
                >
                    ОК
                </button>
            </div>
        </div>
    </template>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .errors {
        font-size: 16px;
        color: var(--color-stable-red);
        margin-bottom: 30px;
    }

    .form {
        > .button {
            margin-top: 30px;
            text-align: center;
        }
    }

    .inform {
        > .desc {
            font-size: 16px;
            margin-bottom: 30px;
            color: var(--stable-white-color);
        }
    }
</style>
