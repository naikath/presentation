type Data = {
	groupName: string;
	groupPath: string;
	groupItems: [string, string][];
}[];

export const basePath = '/presentation/icons';

export const itemGroups: Data = [
	{
		groupName: 'Web',
		groupPath: 'web',
		groupItems: [
			['HTML', 'html.svg'],
			['CSS', 'css.svg'],
			['JavaScript', 'javascript.svg'],
			['React', 'react.svg'],
			['TailwindCSS', 'tailwindcss.svg'],
			['Bootstrap', 'bootstrap.svg'],
			['Astro', 'astro.svg'],
		],
	},
	{
		groupName: 'JavaScript',
		groupPath: 'js',
		groupItems: [
			['NodeJS', 'nodejs.svg'],
			['TypeScript', 'typescript.svg'],
			['ExpressJS', 'expressjs.svg'],
			['DrizzleORM', 'drizzleorm.svg'],
			['Zod', 'zod.svg'],
			['Vitest', 'vitest.svg'],
		],
	},
	{
		groupName: 'Server',
		groupPath: 'server',
		groupItems: [
			['Bash', 'bash.svg'],
			['Linux', 'linux.webp'],
			['SQLite', 'sqlite.svg'],
			['MySQL', 'mysql.svg'],
		],
	},
	{
		groupName: 'Other',
		groupPath: 'other',
		groupItems: [
			['Git', 'git.svg'],
			['GitHub', 'github.svg'],
			['C', 'c.svg'],
			['Arduino', 'arduino.svg'],
		],
	},
];
