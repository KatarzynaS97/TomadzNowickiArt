import Lara from '@primevue/themes/Lara';

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Lara
            }
        }
    },
    css: [
        '@/components/index.scss',
    ],
    compatibilityDate: '2024-12-20'
})