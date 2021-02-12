import React, { useEffect } from "react";
import { Coord } from "../../types/weather";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
interface Props {
	coordinations: Coord;
	city: string;
}
function Map(props: Props) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
	});

	const containerStyle = {
		width: "25rem",
		height: "70vh",
		marginLeft: "45%",
		//marginBottom: "10%",
		border: "1px solid gray",
		borderRadius: "15px",
		boxShadow: "5px 5px #c0c0c048",
	};
	const { lat, lon } = props.coordinations;
	const center = {
		lat,
		lng: lon,
	};
	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<div>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</div>
	) : (
		<></>
	);
}

export default Map;
