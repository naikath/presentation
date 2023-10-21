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

type LangCode = keyof typeof languages;

export const defaultLang: LangCode = 'en';

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
 * getLangFromUrl(Astro.URL)
 * ```
 */
export function getLangFromUrl(url: URL | string): LangCode {
	// asuming url path starts with /langCode
	if (!(url instanceof URL)) {
		url = new URL(url);
	}
	const [, lang] = url.pathname.split('/');
	if (lang in languages) return lang as LangCode;
	return defaultLang;
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
		dataObj[langCode] = dataObj[defaultLang];
		// console.log(`Data set`, dataObj[langCode]);
		// and set the import path to the default one just in case
		dataPaths[langCode] = dataPaths[defaultLang];
	}
}

async function setDescriptions(langCode: LangCode) {
	await setDataObject(langCode, desriptionsData, descriptionsPaths);
}

export async function getDescriptions(langCode: LangCode = defaultLang) {
	if (!desriptionsData[langCode]) {
		await setDescriptions(langCode);
	}
	return desriptionsData[langCode];
}

async function setUIdata(langCode: LangCode) {
	await setDataObject(langCode, uiData, uiPaths);
}

export async function getUIdata(langCode: LangCode = defaultLang) {
	if (!uiData[langCode]) {
		await setUIdata(langCode);
	}
	return uiData[langCode];
}

async function setItemsData(langCode: LangCode) {
	await setDataObject(langCode, itemsData, itemsPaths);
}

export async function getItemsData(langCode: LangCode = defaultLang) {
	if (!itemsData[langCode]) {
		await setItemsData(langCode);
	}
	return itemsData[langCode];
}
