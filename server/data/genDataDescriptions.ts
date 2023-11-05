// this is not meant to run on the page
// its just used to generate the JSON files used easily

import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { data } from './dataDescriptions';

const jsonData = {
	en: JSON.stringify(data.en),
	es: JSON.stringify(data.es),
};

const baseDir = '../../src/data/skills';
const filename = 'descriptions.json';

const dirs = [new URL(`${baseDir}/en`, import.meta.url), new URL(`${baseDir}/es`, import.meta.url)];

dirs.forEach(async dir => {
	const createdDir = await mkdir(dir, { recursive: true });
	if (createdDir) {
		console.log(`Created directory ${createdDir}`);
	}
});

await Promise.all([
	writeFile(new URL(`${baseDir}/en/${filename}`, import.meta.url), jsonData.en, 'utf8'),
	writeFile(new URL(`${baseDir}/es/${filename}`, import.meta.url), jsonData.es, 'utf8'),
]);
