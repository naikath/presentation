export const defaultTheme = 'cyan';
export const themes = ['cyan', 'red', 'violet'] as const;

export type DefaultTheme = typeof defaultTheme;
export type Theme = (typeof themes)[number];

export function getCurrentTheme() {
	const currentTheme = document.body.dataset.theme as Theme | undefined;
	return currentTheme ?? defaultTheme;
}

export function setTheme(newTheme: Theme) {
	if (!themes.includes(newTheme)) {
		newTheme = defaultTheme;
	}
	saveTheme(newTheme);
	document.body.dataset.theme = newTheme;
}

function saveTheme(newTheme: Theme) {
	window.localStorage.setItem('theme', newTheme);
}

function getSavedTheme(): Theme {
	const savedTheme = window.localStorage.getItem('theme') as Theme | undefined;
	return savedTheme ?? defaultTheme;
}

export function loadTheme() {
	const savedTheme = getSavedTheme();
	setTheme(savedTheme);
}
