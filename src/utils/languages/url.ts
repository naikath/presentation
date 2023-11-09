import { languages, defaultLangCode } from './langCodes';
import type { LangCode } from './langCodes';

/**
 * Get language code from an URL
 *
 * Usage:
 *
 * ```js
 * // client
 * getLangFromUrl(window.location.href)
 * // server
 * getLangFromUrl(Astro.url)
 * ```
 */
export function getLangFromUrl(url: URL | string): LangCode {
	// asuming url path starts with /langCode
	url = stringToUrlObject(url);

	const [, lang] = url.pathname.split('/');
	if (lang in languages) return lang as LangCode;
	return defaultLangCode;
}

function stringToUrlObject(url: string | URL): URL {
	if (url instanceof URL) return url;
	if ('canParse' in URL) {
		if (URL.canParse(url)) {
			return new URL(url);
		} else {
			throw new Error('String must be parseable as url');
		}
	}
	// @ts-ignore
	return new URL(url);
	// TS gave errors of URL being type never because of the 'canParse' check
}

export function getUrlPathWithLang(url: URL | string, newLangCode: LangCode | '' = '') {
	url = stringToUrlObject(url);
	const currentLangCode = getLangFromUrl(url);
	const currentPath = url.pathname;
	let newPath: string[];
	const pathArray = currentPath.split('/');
	// '/' => ['', '']
	// '/path' => ['', 'path']
	// '/path/' => ['', 'path', '']
	if (currentPath.endsWith('/')) pathArray.pop();
	// Normalize so in every case we have to push a new element
	// And not replace the last index in some of them
	// '/' => ['']
	// '/path' => ['', 'path']
	// '/path/' => ['', 'path']

	if (!pathArray.includes(currentLangCode)) {
		// langCode is not present in the url
		newPath = [...pathArray, newLangCode];
		// append new langCode to the end
	} else {
		if (newLangCode === '') {
			// remove it
			newPath = pathArray.filter(p => {
				return p !== currentLangCode;
			});
			if (newPath.length < 2) {
				// it needs at least two elements to get the slash '/' back in the join()
				newPath = ['', ''];
			}
		} else {
			// replace it
			newPath = pathArray.map(p => {
				return p === currentLangCode ? newLangCode : p;
			});
		}
	}

	return newPath.join('/');
}
