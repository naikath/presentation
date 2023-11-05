import { expect, test } from 'vitest';
import { data } from '../server/data/genDataItems';

test('generated array', () => {
	expect(Array.isArray(data)).toBeTruthy();
});

test('contains data items', () => {
	const joinedArray = [...data[0].items, ...data[1].items];
	expect(joinedArray).toContainEqual({
		id: 101,
		img: '/icons/web/html.svg',
		name: 'HTML',
	});

	expect(joinedArray).toContainEqual({
		id: 201,
		img: '/icons/js/nodejs.svg',
		name: 'NodeJS',
	});
});

test('is well structured', () => {
	expect(data[0]).toHaveProperty('group');
	expect(data[0]).toHaveProperty('items');
});
