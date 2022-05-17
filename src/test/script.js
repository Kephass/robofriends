const googleDatabase = [
	'cats.com',
	'flowers.com',
	'animals.com',
	'souprecipes.com',
	'catpictures.com',
	'favritecats.com',
	'jabber.com',
];

const googleSearch = (searchInput, db) => {
	const matches = db.filter((website) => {
		return website.includes(searchInput);
	});
	return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch('er', googleDatabase));

module.exports = googleSearch;
