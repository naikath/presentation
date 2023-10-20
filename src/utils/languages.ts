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

// paths
const pathsItems: Record<string, string> = {};
const descriptionsPaths: Record<string, string> = {};

function setupPaths() {
	langCodes.forEach(langCode => {
		pathsItems[langCode] = `../data/skills/${langCode}/items.json`;
		descriptionsPaths[langCode] = `../data/skills/${langCode}/descriptions.json`;
	});
}

setupPaths();

await setDescriptions(defaultLang);

async function setDescriptions(langCode: string = defaultLang) {
	if (desriptionsData[langCode]) return;
	// if data is not set
	// load the file
	// and set the key of the object

	// console.log(`data for '${langCode}' not set`);
	// this has to be in a try...catch block, since throws and is not handled by .catch()
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
		// descriptionsPaths[langCode] = descriptionsPaths[defaultLang];
	}
}

export async function getDescriptions(langCode: string = defaultLang) {
	if (!desriptionsData[langCode]) {
		setDescriptions(langCode);
	}
	// when data is set, return it
	return desriptionsData[langCode];
}
