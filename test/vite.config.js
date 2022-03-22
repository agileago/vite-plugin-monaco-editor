import { defineConfig } from "vite";
import monacoEditorPlugin from "../dist/index"
import vue from '@vitejs/plugin-vue'
import path from "path";

console.log(path.resolve(__dirname, "src/worker/share.worker"))
export default defineConfig({
    root: 'test',
    base: 'https://cdn.com/sub/',
    build: {
        minify: false,
    },
    plugins: [
        vue(),
        monacoEditorPlugin({
            customWorkers: [
                {
                    label: "graphql",
                    entry: "monaco-graphql/esm/graphql.worker"
                },
                {
                    label: "share",
                    entry: path.resolve(__dirname, "src/worker/share.worker")
                }
            ]
        })
    ],

})
