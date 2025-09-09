import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import analyze from "rollup-plugin-analyzer";
import compression from "vite-plugin-compression";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    base: "/portfolio/",
    plugins: [
        tsconfigPaths(),
        // Suporte a React com SWC para compilação rápida
        react({
            devTarget: "es2022"
        }),
        // Transforma SVGs em componentes React
        svgr({
            svgrOptions: {
                exportType: "default",
                icon: true // Preserva viewBox para SVGs usados como ícones
            }
        }),
        // Otimização de imagens (PNG, JPEG, SVG, etc.)
        ViteImageOptimizer({
            png: {
                compressionLevel: 9,
                quality: 95,
                effort: 10,
                palette: true,
                colours: 256,
                dither: 1.0,
                adaptiveFiltering: true,
                progressive: false
            },
            jpeg: {
                quality: 95,
                progressive: true,
                chromaSubsampling: "4:4:4",
                trellisQuantisation: true,
                overshootDeringing: true,
                optimiseScans: true,
                optimiseCoding: true,
                mozjpeg: true
            },
            svg: {
                multipass: true,
                plugins: [{ name: "removeEmptyAttrs" }] // Evita remoção de viewBox
            },
            gif: {
                reuse: true,
                progressive: true,
                colours: 256,
                effort: 10,
                dither: 0.05,
                interFrameMaxError: 5,
                interPaletteMaxError: 3
            },
            webp: {
                lossless: true,
                alphaQuality: 100
            },
            avif: {
                quality: 95,
                effort: 9,
                lossless: true
            }
        }),
        // Análise de tamanho do bundle
        analyze({
            summaryOnly: true
        }),
        // Compressão de arquivos com Brotli
        compression({
            algorithm: "brotliCompress",
            ext: ".br"
        })
    ],
    resolve: {
        alias: {
            "@assets": "/src/app/assets",
            "@components": "/src/app/web/components",
            "@styles": "/src/app/web/styles",
            "@pages": "/src/app/web/pages",
            "@router": "/src/app/web/router",
            "@hooks": "/src/app/utils/hooks",
            "@validation": "/src/app/utils/validation",
            "@constants": "/src/app/utils/constants",
            "@functions": "/src/app/utils/functions",
            "@formatters": "/src/app/utils/formatters",
            "@interfaces": "/src/api/shared/interfaces",
            "@integration": "/src/api/integration/modules",
            "@stores": "/src/api/integration/stores",
            "@enums": "/src/api/shared/enums"
        }
    },
    optimizeDeps: {
        exclude: ["react-spinners"] // Exclui dependências específicas da otimização
    },
    cacheDir: "node_modules/.vite_cache", // Diretório de cache personalizado
    build: {
        sourcemap: true, // Gera sourcemaps para depuração
        minify: "esbuild", // Usa esbuild para minificação rápida
        target: "es2022" // Alinha com devTarget
    }
});