import {defineConfig} from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';

export default defineConfig({
    plugins: [
        Vue(),
        AutoImport({imports: ['vue']})
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './'),
        },
    },
    test: {
        globals: true, // для глобальных утилит типа `ref`
        environment: 'jsdom', // для симуляции браузера
    },
})
