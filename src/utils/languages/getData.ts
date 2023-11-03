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

import { langCodes, defaultLangCode } from './langCodes';
import type { LangCode } from './langCodes';
import type { DataAny, DataDescriptions, DataItems, DataUi } from './data.types';

// paths
const descriptionsPaths = {} as Record<LangCode, string>;
const itemsPaths = {} as Record<LangCode, string>;
const uiPaths = {} as Record<LangCode, string>;

function setupPaths() {
	langCodes.forEach(langCode => {
		itemsPaths[langCode] = `../../data/skills/${langCode}/items.json`;
		descriptionsPaths[langCode] = `../../data/skills/${langCode}/descriptions.json`;
		uiPaths[langCode] = `../../data/skills/${langCode}/ui.json`;
	});
}

setupPaths();

const dataFiles = import.meta.glob('../../data/skills/*/*.json', { import: 'default' });

// data
const desriptionsData = {} as Record<LangCode, DataDescriptions>;
const itemsData = {} as Record<LangCode, DataItems>;
const uiData = {} as Record<LangCode, DataUi>;

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
