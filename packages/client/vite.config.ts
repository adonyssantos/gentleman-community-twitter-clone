/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    deps: {
      inline: ['react-native'],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.ts', '.js'],
    },
  },
  resolve: {
    extensions: ['.web.tsx', '.web.jsx', '.web.js', '.tsx', '.ts', '.js'],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react-dom',
        'react-native-web',
        'react-native',
        'react',
        'react/jsx-runtime',
        '@universal-labs/primitives',
      ],
      output: {
        dir: 'build',
        format: 'esm',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-native-web': 'ReactNativeWeb',
          'react-native': 'ReactNative',
          'react/jsx-runtime': 'React',
        },
      },
    },
  },
});
