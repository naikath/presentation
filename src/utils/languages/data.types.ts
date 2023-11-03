// Any

export type DataAny = DataItems | DataUi | DataDescriptions;

// Descriptions

export type DataDescriptions = Description[];

type Description = {
	id: number;
	definition: string;
	description: string;
};

// Items

export type DataItems = Item[];

export type Item = {
	id: number;
	img: string;
	name: string;
};

// Ui

export type DataUi = {
	subtitle: string;
	description: string;
	skills: Skills;
};

type Skills = {
	title: string;
	display: string;
	explanation: string;
};