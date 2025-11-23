import type { SitemapUrl } from '#sitemap/types';

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig();
    const [main] = await Promise.all([
        (async () => {
            const result: SitemapUrl[] = [];

            return result;
        })(),
    ]);

    return [...main];
});
