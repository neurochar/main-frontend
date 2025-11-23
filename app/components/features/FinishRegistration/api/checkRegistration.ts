import { StandartErrorList, tryToThrowApiErrors } from '~/shared/errors/errors';

export async function checkRegistration(id: string): Promise<boolean> {
    try {
        await useNuxtApp().$apiFetch<{ result: string }>(`v1/registration/${id}`, {
            method: 'GET',
        });

        return true;
    } catch (e: unknown) {
        const err = tryToThrowApiErrors(e);
        if (err instanceof StandartErrorList) {
            if (err.code === 404) {
                return false;
            }
        }
        throw err;
    }
}
