import { expect, test } from 'vitest';
import { data } from '../server/data/genDataItems';

test('generated array', () => {
	expect(Array.isArray(data)).toBeTruthy();
});

test('contains data', () => {
	expect(data).toContainEqual({
		id: 101,
		img: '/icons/web/html.svg',
		name: 'HTML',
	});
	expect(data).toContainEqual({
		id: 201,
		img: '/icons/js/nodejs.svg',
		name: 'NodeJS',
	});
});
