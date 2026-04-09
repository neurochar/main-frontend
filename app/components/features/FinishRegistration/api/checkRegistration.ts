import { ApiError, tryToCatchApiErrors } from '~/shared/errors/errors';

export async function checkRegistration(id: string): Promise<boolean> {
    const api = useApi();

    try {
        const res = await api.v1.registrationPublicServiceCheckRegistration(id);

        if (res.error !== null) {
            throw res.error;
        }

        return true;
    } catch (e: unknown) {
        const err = tryToCatchApiErrors(e);
        if (err instanceof ApiError) {
            if (err.code === 404) {
                return false;
            }
        }
        throw err;
    }
}
