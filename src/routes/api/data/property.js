export async function post(request) {
	const street = request.body.get('streetaddress').toUpperCase();
	const suburb = request.body.get('suburb').toUpperCase();
	let addressString = `${street} ${suburb}`;
	// request.body.get('suburb'),
	// request.body.get('postcode'),
	// request.body.get('mobile'),
	// let address = request.body.get('address');
	// const addressString = '41 SKYE ROAD BARRINGTON';
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	addressString = addressString.replace(/\s+/g, '+');
	let addressQuery = `address='${addressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	let geocodingFetchUrl = `${addressURL}${addressQuery}${addressQueryParams}`;
	let response = await fetch(geocodingFetchUrl);
	let data = await response.json();
	let geometryString = `${data.features[0].geometry.x} ${data.features[0].geometry.y}`;
	const propertyURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme/FeatureServer/12/query?';
	let propertyQuery = `where=&objectIds=&time=&geometry=${geometryString}&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects`;
	const propertyQueryParams =
		'&distance=&units=esriSRUnit_Meter&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=geojson';
	let propertyFetchUrl = `${propertyURL}${propertyQuery}${propertyQueryParams}`;
	console.log(geometryString);
	return {
		status: 200,
		// headers: { location: '/about' }
		body: { address: addressString, geocodingUrl: geocodingUrl }
	};
}
