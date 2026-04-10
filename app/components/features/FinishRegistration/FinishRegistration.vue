<script setup lang="ts">
    import { useModalAlert } from '~/components/shared/modals/Alert/useModalAlert';
    import { useModalErrorsList } from '~/components/shared/modals/ErrorsList/useModalErrorsList';
    import { ApiError, tryToCatchApiErrors } from '~/shared/errors/errors';
    import { checkRegistration } from './api/checkRegistration';

    const props = defineProps<{
        id: string;
    }>();

    const api = useApi();

    const isLoading = ref(true);

    const formData = reactive({
        tenantTextID: '',
        profileName: '',
        profileSurname: '',
    });

    const errors = ref<string[]>([]);

    const tenantURL = ref('/');

    const successModal = useModalAlert({
        slot: 'Проверьте свою почту, на нее придет письмо с доступом к вашему рабочему пространству.',
        title: 'Внимание',
        onConfirm: () => {
            window.location.href = tenantURL.value;
        },
    });

    const errorModal = useModalErrorsList({
        errors,
    });

    const isSending = ref(false);

    interface IFormData {
        registrationID: string;
        tenantTextID: string;
        profileName: string;
        profileSurname: string;
    }

    interface IResponse {
        url: string;
    }

    const makeApiRequest = async (data: IFormData): Promise<void> => {
        try {
            const result = await useNuxtApp().$apiFetch<IResponse>('v1/registration/finish', {
                method: 'POST',
                body: data,
            });

            tenantURL.value = result.url;
        } catch (e: unknown) {
            throw tryToCatchApiErrors(e);
        }
    };

    const errorCodesToText: Record<string, string> = {
        TEXTID_INVALID: 'Ваш ID указан некорректно',
        TEXTID_FORBIDDEN: 'Рабочее пространство с таким ID уже существует',
        ALREADY_EXISTS: 'Рабочее пространство с таким ID уже существует',
    };

    const sendForm = async (e: Event) => {
        e.preventDefault();
        if (isSending.value) return;

        errors.value = [];
        if (formData.tenantTextID.replaceAll(' ', '').length === 0) {
            errors.value.push('Ваш ID не указан');
        }

        if (formData.profileName.replaceAll(' ', '').length === 0) {
            errors.value.push('Имя не указано');
        }

        if (formData.profileSurname.replaceAll(' ', '').length === 0) {
            errors.value.push('Фамилия не указана');
        }

        if (errors.value.length) {
            errorModal.open();
        } else {
            isSending.value = true;

            try {
                const res = await api.v1.registrationPublicServiceFinishRegistration({
                    id: props.id,
                    payload: {
                        profileName: formData.profileName,
                        profileSurname: formData.profileSurname,
                        tenantTextId: formData.tenantTextID,
                    },
                });

                if (res.error !== null) {
                    throw res.error;
                }

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

    onMounted(async () => {
        try {
            const isExists = await checkRegistration(props.id);

            if (!isExists) {
                showError({ statusCode: 404 });
            }
        } catch (e) {
            console.error(e);
        }

        isLoading.value = false;
    });
</script>

<template>
    <div :class="$style.wrapper">
        <div v-if="isLoading">Загрузка...</div>
        <div
            v-if="!isLoading"
            :class="$style.form"
        >
            <div :class="$style.account">
                <div :class="$style.title">Каким будет адрес входа в ваше пространство Neurochar?</div>
                <div :class="$style.desc">
                    Укажите текстовый идентификатор вашего пространства. Допустимы латинские буквы и цифры, длина от 3 до 61 символов. Этот идентификатор станет
                    поддоменом: <span>вашID.neurochar.ru.</span>
                </div>
                <div :class="$style.input">
                    <div :class="$style.ui">
                        <SharedUiInput v-model="formData.tenantTextID">
                            <template #placeholder> Ваш ID <span>*</span> </template>
                        </SharedUiInput>
                    </div>
                    <div :class="$style.text">.neurochar.ru</div>
                </div>
            </div>
            <div :class="$style.personal">
                <div :class="$style.title">Укажите ваши данные</div>
                <div :class="$style.input">
                    <SharedUiInput v-model="formData.profileName">
                        <template #placeholder> Имя <span>*</span> </template>
                    </SharedUiInput>
                </div>
                <div :class="$style.input">
                    <SharedUiInput v-model="formData.profileSurname">
                        <template #placeholder> Фамилия <span>*</span> </template>
                    </SharedUiInput>
                </div>
            </div>

            <div :class="$style.button">
                <button
                    type="button"
                    class="button_1 big"
                    @click="sendForm"
                >
                    Зарегистрироваться
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';

    .form {
        > .account {
            > .title {
                font-size: 18px;
                margin-bottom: 15px;

                .width-size-sm-less({
                    font-size: 16px;
                    margin-bottom: 10px;
                });
            }

            > .desc {
                font-size: 16px;
                line-height: 2;
                margin-bottom: 20px;
                font-weight: 100;

                > span {
                    display: inline-block;
                    padding: 0 10px;
                    background-color: rgba(255, 0, 0, 0.2);
                    border-radius: 5px;
                    font-weight: 400;
                }

                .width-size-sm-less({
                    font-size: 14px;
                });
            }

            > .input {
                display: flex;
                align-items: center;
                gap: 20px;

                > .ui {
                    width: 100%;
                    max-width: 318px;
                }

                > .text {
                    font-size: 18px;
                }
            }
        }

        > .personal {
            margin-top: 40px;

            .width-size-sm-less({
                margin-top: 30px;
            });

            > .title {
                font-size: 18px;
                margin-bottom: 20px;

                .width-size-sm-less({
                    font-size: 16px;
                });
            }

            > .input {
                margin-bottom: 15px;
                max-width: 318px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        > .button {
            margin-top: 30px;
            max-width: 318px;

            > button {
                width: 100%;
            }
        }
    }
</style>
