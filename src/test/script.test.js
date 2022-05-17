const googleSearch = require('./script');

const mockDb = [
	'dog.com',
	'chessy.com',
	'pufpuf.com',
	'cheesypuf.com',
	'disney.com',
	'dogpictures.com',
];

describe('googleSearch', () => {
	it('this is a test', () => {
		googleSearch('testtest', mockDb);
		expect('hello').toBe('hello');
	});

	it('is searching google', () => {
		expect(googleSearch('testtest', mockDb)).toEqual([]);
		expect(googleSearch('dog', mockDb)).toEqual(['dog.com', 'dogpictures.com']);
	});

	it('work with undefined and null input', () => {
		expect(googleSearch(undefined, mockDb)).toEqual([]);
		expect(googleSearch(null, mockDb)).toEqual([]);
	});

	it('does not return more than 3 matches', () => {
		expect(googleSearch('.com', mockDb).length).toEqual(3);
	});
});
