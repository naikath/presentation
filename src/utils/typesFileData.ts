// Any

export type DataAny = DataItems | DataUi | DataDescriptions;

// Descriptions

export type DataDescriptions = Description[];

type Description = {
	id: number;
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
	nav: Nav;
};

type Nav = {
	home: string;
	about: string;
	twitter: string;
};
