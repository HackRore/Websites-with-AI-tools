const KEY = 'theme';

export function initThemeToggle(btn) {
    if (!btn) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = localStorage.getItem(KEY) || (prefersDark ? 'dark' : 'light');
    setTheme(initial);

    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem(KEY, next);
    });
}

function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
}
