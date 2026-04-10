<script setup lang="ts">
    import { windowScrollToBlock } from '~/shared/helpers/functions';

    const route = useRoute();
    const router = useRouter();

    const scrollBlocks: Record<string, string> = {
        how_works: 'block_3',
        who_is_it_suitable_for: 'block_7',
        price: 'block_8',
        faq: 'block_9',
    };

    onMounted(async () => {
        setTimeout(() => {
            watch(
                () => route.query.block,
                async (newVal) => {
                    if (newVal) {
                        const { block, ...rest } = route.query;
                        await router.replace({
                            path: route.path,
                            query: rest,
                        });

                        if (typeof block === 'string' && scrollBlocks[block]) {
                            windowScrollToBlock(scrollBlocks[block]);
                        }
                    }
                },
                { immediate: true },
            );
        }, 1000);
    });
</script>

<template>
    <div>
        <div id="block_1">
            <PageIndexUiBlock1 />
        </div>
        <div id="block_2">
            <PageIndexUiBlock2 />
        </div>
        <div id="block_3">
            <PageIndexUiBlock3 />
        </div>
        <div id="block_4">
            <PageIndexUiBlock4 />
        </div>
        <div id="block_5">
            <PageIndexUiBlock5 />
        </div>
        <div id="block_6">
            <PageIndexUiBlock6 />
        </div>
        <div id="block_7">
            <PageIndexUiBlock7 />
        </div>
        <div id="block_8">
            <PageIndexUiBlock8 />
        </div>
        <div id="block_9">
            <PageIndexUiBlock9 />
        </div>
        <div id="block_10">
            <PageIndexUiBlock10 />
        </div>
    </div>
</template>

<style lang="less" module>
    @import '@styles/includes';
</style>
