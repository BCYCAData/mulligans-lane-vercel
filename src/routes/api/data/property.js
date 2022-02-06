export async function post({ request }) {
	// const body = await request.formData();
	const body = await request.json();
	const street = body.streetaddress.toUpperCase();
	const suburb = body.suburb.toUpperCase();
	let addressString = `${street} ${suburb}`;
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	safeAddressString = addressString.replace(/\s+/g, '+');
	let addressQuery = `address='${safeAddressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	let geocodingFetchUrl = `${addressURL}${addressQuery}${addressQueryParams}`;
	try {
		let response = await fetch(geocodingFetchUrl);

		let data = await response.json();
		if (data.features?.length) {
			return {
				status: 200,
				body: {
					point: [data.features[0].geometry.x, data.features[0].geometry.y],
					address: addressString
				}
			};
		} else if (data.features) {
			return {
				status: 404,
				body: {}
			};
		}
	} catch (error) {
		return {
			status: 400,
			body: {
				error: error
			}
		};
	}
}
