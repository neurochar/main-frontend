import { defineStore } from 'pinia';

interface IAppProviderStore {
    title: string;
}

export function initAppProviderStoreValues() {
    const config: IAppProviderStore = {
        title: 'Нейрочар',
    };

    return config;
}

export const useAppProviderStore = defineStore('appProviderStore', {
    state: initAppProviderStoreValues,
    actions: {},
});
