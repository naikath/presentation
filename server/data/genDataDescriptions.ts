// this is not meant to run on the page
// its just used to generate the JSON files used easily

import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { data } from './dataDescriptions';

const dataLangCodes = Object.keys(data) as ('en' | 'es')[];

dataLangCodes.forEach(langCode => {
	data[langCode].forEach(item => {
		let { description } = item;
		if (description.at(0) === '\n') description = description.slice(1);
		if (description.at(-1) === '\n') description = description.slice(0, -1);
		item.description = description;
	});
});

const jsonData = {
	en: JSON.stringify(data.en),
	es: JSON.stringify(data.es),
};

// Writing Files

const baseDir = '../../src/data/skills';
const dirs = [new URL(`${baseDir}/en`, import.meta.url), new URL(`${baseDir}/es`, import.meta.url)];

const filename = 'descriptions.json';
const filenames = [
	new URL(`${baseDir}/en/${filename}`, import.meta.url),
	new URL(`${baseDir}/es/${filename}`, import.meta.url),
];

export async function writeFiles() {
	dirs.forEach(async dir => {
		const createdDir = await mkdir(dir, { recursive: true });
		if (createdDir) {
			console.log(`Created directory ${createdDir}`);
		}
	});

	await Promise.all([
		writeFile(filenames[0], jsonData.en, 'utf8'),
		writeFile(filenames[1], jsonData.es, 'utf8'),
	]);

	filenames.forEach(file => {
		const relPathToFile = path.relative(process.cwd(), decodeURIComponent(file.pathname));
		console.log(`Wrote to ${relPathToFile}`);
	});
}
