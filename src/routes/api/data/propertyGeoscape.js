import { geoscapeAPIKey } from '$lib/dataAPI';
export async function post({ request }) {
	const body = await request.json();
	const safeAddressString = body.searchAddress
		.replace(',', '%2C')
		.replace(/\s+/g, '%20');
	const geocodeRequest = `https://api.psma.com.au/v2/addresses/geocoder?address=${safeAddressString}&matchType=Address`;
	const geocodeBody = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept-Crs': '',
			Accept: '',
			Authorization: geoscapeAPIKey
		}
	};
	try {
		let response = await fetch(geocodeRequest, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Crs': '',
				Accept: '',
				Authorization: geoscapeAPIKey
			}
		});
		let data = response.json();
		if (data.features.length > 0 && data.features[0].matchQuality === 'Good') {
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
	} catch (error) {
		return {
			status: 400,
			body: {
				error: error
			}
		};
	}
}
