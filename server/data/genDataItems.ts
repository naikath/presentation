import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { itemGroups, basePath } from './dataItems';
import type { DataItems, ItemGroup, Item } from '../../src/utils/languages/data.types';

export const data: DataItems = [];

let itemId = 0;

itemGroups.forEach(({ groupName, groupPath, groupItems }) => {
	itemId = itemId + 100 - (itemId % 100);
	// add 100 setting last two numbers to 0

	const newItemGroup: ItemGroup = { group: groupName, items: [] };

	groupItems.forEach(([itemName, itemPath]) => {
		itemId += 1;

		const newItem: Item = {
			id: itemId,
			name: itemName,
			img: `${basePath}/${groupPath}/${itemPath}`,
		};

		newItemGroup.items.push(newItem);
	});

	data.push(newItemGroup);
});

const jsonData = JSON.stringify(data);

// Writing Files

const baseDir = '../../src/data/skills';
const dirs = [new URL(`${baseDir}/en`, import.meta.url), new URL(`${baseDir}/es`, import.meta.url)];

const filename = 'items.json';
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
		writeFile(new URL(`${baseDir}/en/${filename}`, import.meta.url), jsonData, 'utf8'),
		writeFile(new URL(`${baseDir}/es/${filename}`, import.meta.url), jsonData, 'utf8'),
	]);

	filenames.forEach(file => {
		const relPathToFile = path.relative(process.cwd(), decodeURIComponent(file.pathname));
		console.log(`Wrote to ${relPathToFile}`);
	});
}
