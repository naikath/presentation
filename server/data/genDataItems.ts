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
