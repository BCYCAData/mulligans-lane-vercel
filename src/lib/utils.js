import locations from '$lib/geojsonData/locations';

const suburbAliases = function (street, suburb) {
	const result = locations.suburbAlias.filter(function (item) {
		return item.name == suburb;
	});
	let aliases = [`${street.toUpperCase()} ${suburb.toUpperCase()}`];
	if (result.length > 0) {
		for (let address of result[0].alternative) {
			aliases = [
				...aliases,
				`${street.toUpperCase()} ${address.toUpperCase()}`
			];
		}
	}
	return aliases;
};

export { suburbAliases };
