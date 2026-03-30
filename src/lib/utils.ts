import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** `public/` file URL — uses Vite `BASE_URL` (GitHub Pages project site = `/Repo-Name/`). */
export function publicUrl(path: string): string {
  const p = path.replace(/^\//, '');
  let base = import.meta.env.BASE_URL || '/';

  if (
    !import.meta.env.DEV &&
    base === '/' &&
    typeof window !== 'undefined' &&
    window.location.hostname.endsWith('github.io')
  ) {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    if (seg) base = `/${seg}/`;
  }

  if (base !== '/' && !base.endsWith('/')) base += '/';
  return `${base}${p}`;
}
