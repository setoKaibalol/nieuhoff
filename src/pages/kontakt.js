import React from "react"
import {
	GoogleMap,
	Marker,
	useJsApiLoader,
	useLoadScript,
} from "@react-google-maps/api"
import Image from "next/image"

function Kontakt() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	})

	return (
		<div className="min-h-screen pt-20">
			<div className="px-10 pt-5 gap-4 flex flex-col pb-10">
				<h2 className="font-bold text-center text-2xl">Kontakt</h2>

				<span className="">
					<p>Adresse: Alte Schulstraße 4b in 23936 Hof Mummendorf</p>
				</span>
				{isLoaded && (
					<GoogleMap
						zoom={18}
						mapContainerClassName="w-full h-96"
						center={{ lat: 53.87012481689453, lng: 11.064629554748535 }}>
						<Marker
							position={{
								lat: 53.87012481689453,
								lng: 11.064629554748535,
							}}></Marker>
					</GoogleMap>
				)}
				<div>
					Außerdem erreichen Sie uns unter{" "}
					<a
						className=" text-blue-500 hover:text-blue-600"
						href="tel:017612345678">
						017612345678
					</a>{" "}
					oder per email an{" "}
					<a
						className=" text-blue-500 hover:text-blue-600"
						href="mailto:info@nieuhoff.de	">
						info@nieuhoff.de
					</a>{" "}
					.
				</div>
			</div>
		</div>
	)
}

export default Kontakt
