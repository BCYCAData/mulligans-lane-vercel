export async function post({ request }) {
	// const body = await request.formData();
	const body = await request.json();
	const street = body.streetaddress.toUpperCase();
	const suburb = body.suburb.toUpperCase();
	let addressString = `${street} ${suburb}`;
	const addressURL =
		'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1/query?where=';
	addressString = addressString.replace(/\s+/g, '+');
	let addressQuery = `address='${addressString}'`;
	const addressQueryParams = '&outFields=*&featureEncoding=esriDefault&f=pjson';
	let geocodingFetchUrl = `${addressURL}${addressQuery}${addressQueryParams}`;
	// console.log(geocodingFetchUrl);
	let response = await fetch(geocodingFetchUrl);
	let data = await response.json();
	// console.log(data);
	// let pointGeometryString = `${data.features[0].geometry.x}'%2C'${data.features[0].geometry.y}`;
	// const propertyURL =
	// 	'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Land_Parcel_Property_Theme/FeatureServer/12/query?';
	// let propertyQuery = `where=&objectIds=&time=&geometry=${pointGeometryString}&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects`;
	// const propertyQueryParams =
	// 	'&distance=&units=esriSRUnit_Meter&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&f=geojson';
	// let propertyFetchUrl = `${propertyURL}${propertyQuery}${propertyQueryParams}`;
	// let response = await fetch(propertyFetchUrl);
	// let data = await response.json();
	if (data.features?.length) {
		return {
			status: 200,
			body: {
				X: data.features[0].geometry.x,
				Y: data.features[0].geometry.y
			}
		};
	} else if (data.features) {
		return {
			status: 404,
			body: {}
		};
	}
	return {
		status: 400,
		body: {}
	};
}
