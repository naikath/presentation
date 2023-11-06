// Any

export type DataAny = DataItems | DataUi | DataDescriptions;

// Descriptions

export type DataDescriptions = Description[];

export type Description = {
	id: number;
	definition: string;
	description: string;
};

// Items

export type DataItems = ItemGroup[];

export type ItemGroup = {
	group: string;
	items: Item[];
};

export type Item = {
	id: number;
	name: string;
	img: string;
};

// Ui

export type DataUi = {
	subtitle: string;
	description: string;
	skills: Skills;
};

export type Skills = {
	title: string;
	display: string;
	explanation: string;
};
