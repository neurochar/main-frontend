import { useModal } from 'vue-final-modal';
import HowItsWorks from './HowItsWorks.vue';

interface IProps {
    title: MaybeRef<string>;
}

export const useHowItsWorks = (props: IProps) => {
    const modal = useModal({
        component: HowItsWorks,

        attrs: {
            title: props.title,
            modalObj: () => modal,
        },
    });

    return modal;
};

export const openHowItsWorks = (title: string = 'Как это работает?') => {
    const modal = useHowItsWorks({ title });
    modal.open();
    return modal;
};
