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
		googleMapsApiKey: "AIzaSyDVsIZDGOpPbws_BJqyBpegjKXgR4MLBGo",
	});

	const containerStyle = {
		width: "30rem",
		height: "20rem",
		marginLeft: "50%",
		border: "1px solid gray",
		borderRadius: "15px",
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
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default Map;
