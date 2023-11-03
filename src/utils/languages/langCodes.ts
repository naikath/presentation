export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export const defaultLangCode = 'en';

export type LangCode = keyof typeof languages;
export type DefaultLangCode = typeof defaultLangCode;

export const langCodes = Object.keys(languages) as LangCode[];
