import { useModal } from 'vue-final-modal';
import Registration from './Registration.vue';

interface IProps {
    title: MaybeRef<string>;
}

export const useRegistration = (props: IProps) => {
    const modal = useModal({
        component: Registration,
        attrs: {
            title: props.title,
            modalObj: () => modal,
        },
    });

    return modal;
};

export const openRegistration = (title: string = 'Регистрация') => {
    const modal = useRegistration({ title });
    modal.open();
    return modal;
};
