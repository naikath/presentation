export const defaultTheme = 'cyan';
export const themes = ['cyan', 'red', 'violet'] as const;

export type DefaultTheme = typeof defaultTheme;
export type Theme = (typeof themes)[number];

export function getCurrentTheme() {
	const currentTheme = document.body.dataset.theme;
	return (currentTheme as Theme) ?? defaultTheme;
}

export function setTheme(newTheme: Theme) {
	if (!themes.includes(newTheme)) {
		newTheme = defaultTheme;
	}
	document.body.dataset.theme = newTheme;
}
