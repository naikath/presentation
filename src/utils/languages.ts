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

export const languages = {
	en: 'English',
	es: 'Español',
} as const;

type LangCode = keyof typeof languages;

export const defaultLang: LangCode = 'en';

const langCodes = Object.keys(languages) as LangCode[];

// data
const desriptionsData: Record<string, object> = {};
const itemsData: Record<string, object> = {};
const uiData: Record<string, object> = {};

// paths
const descriptionsPaths: Record<string, string> = {};
const itemsPaths: Record<string, string> = {};
const uiPaths: Record<string, string> = {};

function setupPaths() {
	langCodes.forEach(langCode => {
		itemsPaths[langCode] = `../data/skills/${langCode}/items.json`;
		descriptionsPaths[langCode] = `../data/skills/${langCode}/descriptions.json`;
		uiPaths[langCode] = `../data/skills/${langCode}/ui.json`;
	});
}

setupPaths();

// await setDescriptions(defaultLang);

async function setDescriptions(langCode: string = defaultLang) {
	if (desriptionsData[langCode]) return;
	// if data is not set
	// load the file
	// and set the key of the object

	// console.log(`data for '${langCode}' not set`);
	// this has to be in a try...catch block
	// since import() throws if receives undefined, and is not handled by .catch()
	try {
		// if there is a file
		// import the file
		const { default: data } = await import(descriptionsPaths[langCode]);
		// console.log(`Data set`, data);
		desriptionsData[langCode] = data;
	} catch (error) {
		// if theres no file to be imported
		// set the data to the default one

		// console.log('file doesnt exists');
		desriptionsData[langCode] = desriptionsData[defaultLang];
		// console.log(`Data set`, desriptionsData[langCode]);
		// and set the import path to the default one just in case
		descriptionsPaths[langCode] = descriptionsPaths[defaultLang];
	}
}

export async function getDescriptions(langCode: string = defaultLang) {
	if (!desriptionsData[langCode]) {
		await setDescriptions(langCode);
	}
	// when data is set, return it
	return desriptionsData[langCode];
}

export function getLangFromUrl(url: URL | string) {
	// asuming url path starts with /langCode
	if (!(url instanceof URL)) {
		url = new URL(url);
	}
	const [, lang] = url.pathname.split('/');
	if (lang in languages) return lang;
	return defaultLang;
}

async function setDataObject(langCode, dataObj, dataPaths) {
	if (dataObj[langCode]) return;
	// if data is not set
	// load the file
	// and set the key of the object

	// console.log(`data for '${langCode}' not set`);
	// this has to be in a try...catch block
	// since import() throws if receives undefined, and is not handled by .catch()
	try {
		// if there is a file
		// import the file
		const { default: data } = await import(dataPaths[langCode]);
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

async function setUIdata(langCode) {
	await setDataObject(langCode, uiData, uiPaths);
}

export async function getUIdata(langCode: string = defaultLang) {
	if (!uiData[langCode]) {
		await setUIdata(langCode);
	}
	// when data is set, return it
	return uiData[langCode];
}

async function setItemsData(langCode) {
	await setDataObject(langCode, itemsData, itemsPaths);
}

export async function getItemsData(langCode: string = defaultLang) {
	if (!itemsData[langCode]) {
		await setItemsData(langCode);
	}
	return itemsData[langCode];
}
