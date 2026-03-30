import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  /** GitHub Actions sets GITHUB_REPOSITORY=owner/Repo-Name → Pages lives at /Repo-Name/ */
  const repo =
    typeof process.env.GITHUB_REPOSITORY === 'string'
      ? process.env.GITHUB_REPOSITORY.split('/')[1]
      : undefined;
  const ciPagesBase =
    process.env.GITHUB_ACTIONS === 'true' && repo ? `/${repo}/` : '/';

  let base =
    env.VITE_BASE_URL ||
    process.env.VITE_BASE_URL ||
    (ciPagesBase !== '/' ? ciPagesBase : '/');
  if (base !== '/' && !base.endsWith('/')) base += '/';

  return {
    base,
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
