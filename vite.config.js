import { URL, fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js/', import.meta.url)),
        },
    },

    plugins: [
        vue({ reactivityTransform: true }),
        eslintPlugin(),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    })
                }
            },
        },
    ],

    server: {
        host: '0.0.0.0',
        fs: {
            strict: true,
        },
        port: 3000,
    },

    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/main.ts',
        },
    },

    publicDir: 'fake_path',

    optimizeDeps: {
        include: ['vue', 'vue-router'],
        exclude: ['vue-demi'],
    },
})
