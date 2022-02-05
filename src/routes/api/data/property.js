export async function post({ request }) {
	const body = await request.formData();
	const street = body.get('streetaddress').toUpperCase();
	const suburb = body.get('suburb').toUpperCase();
	let addressString = `${street} ${suburb}`;
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	addressString = addressString.replace(/\s+/g, '+');
	let addressQuery = `address='${addressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	let geocodingFetchUrl = `${addressURL}${addressQuery}${addressQueryParams}`;
	let geocodeResponse = await fetch(geocodingFetchUrl);
	let geocodeData = await geocodeResponse.json();
	let pointGeometryString = `${geocodeData.features[0].geometry.x}'%2C'${geocodeData.features[0].geometry.y}`;
	const propertyURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme/FeatureServer/12/query?';
	let propertyQuery = `where=&objectIds=&time=&geometry=${pointGeometryString}&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects`;
	const propertyQueryParams =
		'&distance=&units=esriSRUnit_Meter&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=geojson';
	let propertyFetchUrl = `${propertyURL}${propertyQuery}${propertyQueryParams}`;
	let response = await fetch(propertyFetchUrl);
	let data = await response.json();
	console.log(data);
	return {
		status: 200,
		// headers: { location: '/about' }
		body: { address: addressString, addressURL: addressURL }
	};
}
