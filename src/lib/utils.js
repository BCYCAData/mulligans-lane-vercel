import locations from '$lib/geojsonData/locations';

export const suburbAliases = (street, suburb) => {
	const result = locations.suburbAlias.filter(function (item) {
		return item.name == suburb;
	});
	let aliases = [`${street.toUpperCase()} ${suburb.toUpperCase()}`];
	if (result.length > 0) {
		for (let address of result[0].alternative) {
			aliases = [
				...aliases,
				`${street.toUpperCase()}, ${address.toUpperCase()}`
			];
		}
	}
	return aliases;
};

let validations = [];
export const passwordStrength = (password) => {
	validations = [
		password.length > 8,
		password.search(/[A-Z]/) > -1,
		password.search(/[0-9]/) > -1,
		password.search(/[$&+,:;=?@#!]/) > -1
	];
	let strength = validations.reduce((acc, cur) => acc + cur, 0);
};

export const formatMobile = (mobileNumber, digit) => {
	mobileNumber += digit;
	if (mobileNumber.length == 4) {
		mobileNumber += ' ';
	}
	if (mobileNumber.length == 8) {
		mobileNumber += ' ';
	}
	return mobileNumber;
};

export const formatPhone = (phoneNumber, digit) => {
	phoneNumber += digit;
	if (phoneNumber.length == 4) {
		phoneNumber += ' ';
	}
	return phoneNumber;
};
