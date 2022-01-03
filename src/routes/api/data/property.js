export async function get(request) {
	// let address = request.body.get('address');
	const addressString = '41 SKYE ROAD BARRINGTON';
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	addressString = addressString.replace(/\s+/g, '+');
	let addressQuery = `address = '${addressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	const geocodingUrl = encodeURIComponent(`${addressURL}${addressQuery}${addressQueryParams}`);
	console.log(geocodingUrl);
}
