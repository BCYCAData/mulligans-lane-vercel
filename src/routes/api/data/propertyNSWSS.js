// @ts-nocheck
export async function post({ request }) {
	const body = await request.json();
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	let safeAddressString = body.address.replace(/\s+/g, '+');
	let addressQuery = `address='${safeAddressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	let geocodingFetchUrl = `${addressURL}${addressQuery}${addressQueryParams}`;
	try {
		let response = await fetch(geocodingFetchUrl);
		let data = await response.json();
		if (data.error) {
			return {
				status: data.error.code,
				body: {
					message: data.error.message
				}
			};
		} else {
			if (data.features.length > 0) {
				return {
					status: 200,
					body: {
						point: [data.features[0].geometry.x, data.features[0].geometry.y],
						address: body.address
					}
				};
			} else if (data.features) {
				return {
					status: 404,
					body: {}
				};
			}
		}
	} catch (error) {
		console.log('error:  ', error);
		return {
			status: 400,
			body: {
				error: error
			}
		};
	}
}
