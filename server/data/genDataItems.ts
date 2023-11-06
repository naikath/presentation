import { writeFile, mkdir } from 'node:fs/promises';
import { itemGroups, iconFolders, baseImgSrc } from './dataItems';
import type { DataItems, Item } from '../../src/utils/languages/data.types';

let id = 0;
let folderIndex = -1;

export const data: DataItems = [];

itemGroups.forEach(group => {
	id += 100;
	id -= id % 100; // remove last two numbers
	folderIndex += 1;
	group.forEach(([itemName, itemImgSrc]) => {
		id += 1;
		const folder = iconFolders[folderIndex];
		const itemObj: Item = {
			id,
			name: itemName,
			img: `${baseImgSrc}/${folder}/${itemImgSrc}`,
		};
		data.push(itemObj);
	});
});

// Writing Files

const jsonData = JSON.stringify(data);

// Writing Files

const baseDir = '../../src/data/skills';
const filename = 'items.json';

const dirs = [new URL(`${baseDir}/en`, import.meta.url), new URL(`${baseDir}/es`, import.meta.url)];

export async function writeFiles() {
	dirs.forEach(async dir => {
		const createdDir = await mkdir(dir, { recursive: true });
		if (createdDir) {
			console.log(`Created directory ${createdDir}`);
		}
	});

	await Promise.all([
		writeFile(new URL(`${baseDir}/en/${filename}`, import.meta.url), jsonData, 'utf8'),
		writeFile(new URL(`${baseDir}/es/${filename}`, import.meta.url), jsonData, 'utf8'),
	]);
}
