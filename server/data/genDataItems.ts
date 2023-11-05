import { writeFile, mkdir } from 'node:fs/promises';

type Item = {
	id: number;
	img: string;
	name: string;
};

// [ [ ["name", "path/image"], ... ], ... ]

const itemGroups = [
	[
		['HTML', 'html.svg'],
		['CSS', 'css.svg'],
		['JavaScript', 'javascript.svg'],
		['React', 'react.svg'],
		['TailwindCSS', 'tailwindcss.svg'],
		['Bootstrap', 'bootstrap.svg'],
		['Astro', 'astro.svg'],
	],
	[
		['NodeJS', 'nodejs.svg'],
		['TypeScript', 'typescript.svg'],
		['ExpressJS', 'expressjs.svg'],
		['DrizzleORM', 'drizzleorm.svg'],
		['Zod', 'zod.svg'],
		['Vitest', 'vitest.svg'],
	],
	[
		['Bash', 'bash.svg'],
		['Linux', 'linux.svg'],
		['SQLite', 'sqlite.svg'],
		['MySQL', 'mysql.svg'],
	],
	[
		['Git', 'git.svg'],
		['GitHub', 'github.svg'],
		['C', 'c.svg'],
		['Arduino', 'arduino.svg'],
	],
];

const iconFolders = ['web', 'js', 'server', 'other'];

const baseImgSrc = '/icons';
let id = 0;
let folderIndex = -1;

export const data: Item[] = [];

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

const baseDir = '../../src/data/skills';
const filename = 'items.json';

const dirs = [new URL(`${baseDir}/en`, import.meta.url), new URL(`${baseDir}/es`, import.meta.url)];

dirs.forEach(async dir => {
	const createdDir = await mkdir(dir, { recursive: true });
	if (createdDir) {
		console.log(`Created directory ${createdDir}`);
	}
});

const jsonData = JSON.stringify(data);

await Promise.all([
	writeFile(new URL(`${baseDir}/en/${filename}`, import.meta.url), jsonData, 'utf8'),
	writeFile(new URL(`${baseDir}/es/${filename}`, import.meta.url), jsonData, 'utf8'),
]);
