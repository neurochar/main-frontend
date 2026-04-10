<script setup lang="ts">
    import { openRegistration } from '~/components/features/Registration/modals/useRegistration';

    defineProps<{ layout: string }>();
</script>

<template>
    <header class="fix_width_on_lock_scroll">
        <div
            id="header"
            :class="layout"
        >
            <div class="spacer"></div>
            <div class="wrapper">
                <div>
                    <div class="logo">
                        <EntityLogo
                            wrapper-class="default-logo-wrapper"
                            n-class="default-logo-n"
                            text-class="default-logo-text"
                        />
                    </div>
                    <div class="menu">
                        <NuxtLink to="/?block=how_works">Как работает</NuxtLink>
                        <NuxtLink to="/?block=who_is_it_suitable_for">Кому подойдёт</NuxtLink>
                        <NuxtLink to="/?block=price">Цена</NuxtLink>
                        <NuxtLink to="/?block=faq">FAQ</NuxtLink>
                    </div>
                    <div class="register">
                        <button
                            type="button"
                            class="button_1"
                            @click="openRegistration()"
                        >
                            Попробовать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
