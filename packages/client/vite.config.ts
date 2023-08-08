/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
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
      '@root/client': path.resolve(__dirname, '../client/src'),
      '@root/ui': path.resolve(__dirname, '../ui/src'),
      '@root/shared': path.resolve(__dirname, '../shared/src'),
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
