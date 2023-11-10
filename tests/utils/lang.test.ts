import { expect, test } from 'vitest';
import { getUrlPathWithLang } from '../../src/utils/languages';

const basePath = 'presentation';
const origin = `http://localhost:4321/${basePath}`;

const urls = {
	default: `${origin}`,
	en: `${origin}/en`,
	es: `${origin}/es`,
	defaultSlash: `${origin}/`,
	enSlash: `${origin}/en/`,
	esSlash: `${origin}/es/`,
};

const paths = {
	root: `/${basePath}`,
	en: `/${basePath}/en`,
	es: `/${basePath}/es`,
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
	expect(getUrlPathWithLang(urls.defaultSlash, 'es')).toBe(paths.es);
});

test('remove lang code if empty', () => {
	expect(getUrlPathWithLang(urls.en, '')).toBe(paths.root);
	expect(getUrlPathWithLang(urls.enSlash, '')).toBe(paths.root);
	expect(getUrlPathWithLang(urls.default, '')).toBe(paths.root);
});

test('remove lang code if empty and in the middle of the url', () => {
	expect(getUrlPathWithLang(`${urls.en}/path`, '')).toBe(`/${basePath}/path`);
});
