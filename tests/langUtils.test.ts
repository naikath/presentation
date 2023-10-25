import { expect, test } from 'vitest';
import { getUrlPathWithLang } from '../src/utils/languages';

const origin = 'http://localhost:4321';

const urls = {
	default: `${origin}/`,
	en: `${origin}/en`,
	es: `${origin}/es`,
	enSlash: `${origin}/en/`,
	esSlash: `${origin}/es/`,
};

const paths = {
	root: '/',
	en: '/en',
	es: '/es',
};

test('replaces one lang code with another', () => {
	expect(getUrlPathWithLang(urls.en, 'es')).toBe(paths.es);
	expect(getUrlPathWithLang(urls.es, 'en')).toBe(paths.en);
});

test('replaces lang code even with trailing slash', () => {
	expect(getUrlPathWithLang(urls.enSlash, 'es')).toBe(paths.es);
	expect(getUrlPathWithLang(urls.esSlash, 'en')).toBe(paths.en);
});

test('replaces default lang code with another', () => {
	expect(getUrlPathWithLang(urls.default, 'es')).toBe(paths.es);
});

test('if empty remove lang code', () => {
	expect(getUrlPathWithLang(urls.en, '')).toBe(paths.root);
});
