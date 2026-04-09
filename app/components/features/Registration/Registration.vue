<script setup lang="ts">
    import { useModalAlert } from '~/components/shared/modals/Alert/useModalAlert';
    import { useModalErrorsList } from '~/components/shared/modals/ErrorsList/useModalErrorsList';
    import { ApiError, tryToCatchApiErrors } from '~/shared/errors/errors';

    const api = useApi();

    const formData = reactive({
        email: '',
    });

    const errors = ref<string[]>([]);

    const successModal = useModalAlert({
        slot: 'Проверьте свою почту, на нее придет ссылка для активации рабочего пространства.',
        title: 'Внимание',
        onConfirm: () => {
            formData.email = '';
        },
    });

    const errorModal = useModalErrorsList({
        errors,
    });

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

        if (errors.value.length) {
            errorModal.open();
        } else {
            isSending.value = true;

            try {
                await makeApiRequest({ ...formData });
                successModal.open();
            } catch (e) {
                if (e instanceof ApiError) {
                    if (e.textCode in errorCodesToText) {
                        errors.value = [errorCodesToText[e.textCode]!];
                    } else {
                        errors.value = e.formHints();
                    }
                    errorModal.open();
                }
            } finally {
                isSending.value = false;
            }
        }
    };
</script>

<template>
    <div :class="$style.form">
        <div :class="$style.email">
            <SharedUiInput v-model="formData.email">
                <template #placeholder> Ваш e-mail<span>*</span> </template>
            </SharedUiInput>
        </div>
        <div :class="$style.button">
            <button
                type="button"
                class="button_1"
                @click="sendForm"
            >
                Зарегистрироваться
            </button>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .form {
        > .button {
            margin-top: 30px;
            text-align: center;

            > button {
                width: 100%;
            }
        }
    }
</style>
