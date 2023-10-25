/*

when function called
return the object with the data of the language

if a language hasnt been loaded, its lang code in the data object is not set
then dynamic import file
and append data into the corresponding data object key

catch if file doesnt exists
if a language is loaded but there is no file
the data object values should point to the default ones

*/

import type { DataAny, DataDescriptions, DataItems, DataUi } from './typesFileData';

export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export const defaultLangCode = 'en';

export type LangCode = keyof typeof languages;
export type DefaultLangCode = typeof defaultLangCode;

const langCodes = Object.keys(languages) as LangCode[];

// data
const desriptionsData = {} as Record<LangCode, DataDescriptions>;
const itemsData = {} as Record<LangCode, DataItems>;
const uiData = {} as Record<LangCode, DataUi>;

// paths
const descriptionsPaths = {} as Record<LangCode, string>;
const itemsPaths = {} as Record<LangCode, string>;
const uiPaths = {} as Record<LangCode, string>;

function setupPaths() {
	langCodes.forEach(langCode => {
		itemsPaths[langCode] = `../data/skills/${langCode}/items.json`;
		descriptionsPaths[langCode] = `../data/skills/${langCode}/descriptions.json`;
		uiPaths[langCode] = `../data/skills/${langCode}/ui.json`;
	});
}

const dataFiles = import.meta.glob('./../data/skills/*/*.json', { import: 'default' });

setupPaths();

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

function stringToUrlObject(url: string | URL) {
	if (!(url instanceof URL)) {
		if (URL.canParse(url)) {
			return new URL(url);
		} else {
			throw new Error('String must be parseable as url');
		}
	}
	return url;
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

async function setDataObject(
	langCode: LangCode,
	dataObj: Record<LangCode, DataAny>,
	dataPaths: Record<LangCode, string>,
) {
	if (dataObj[langCode]) return;
	// if data is not set
	// console.log(`data for '${langCode}' not set`);
	try {
		// if there is a file
		// load the file
		// and set the key of the object
		const data = await dataFiles[dataPaths[langCode]]();
		// console.log(`Data set`, data);
		dataObj[langCode] = data;
	} catch (error) {
		// if theres no file to be imported
		// set the data to the default one
		// console.log('file doesnt exists');
		dataObj[langCode] = dataObj[defaultLangCode];
		// console.log(`Data set`, dataObj[langCode]);
		// and set the import path to the default one just in case
		dataPaths[langCode] = dataPaths[defaultLangCode];
	}
}

export async function getDescriptions(langCode: LangCode = defaultLangCode) {
	if (!desriptionsData[langCode]) {
		await setDataObject(langCode, desriptionsData, descriptionsPaths);
	}
	return desriptionsData[langCode];
}

export async function getUiData(langCode: LangCode = defaultLangCode) {
	if (!uiData[langCode]) {
		await setDataObject(langCode, uiData, uiPaths);
	}
	return uiData[langCode];
}

export async function getItemsData(langCode: LangCode = defaultLangCode) {
	if (!itemsData[langCode]) {
		await setDataObject(langCode, itemsData, itemsPaths);
	}
	return itemsData[langCode];
}
