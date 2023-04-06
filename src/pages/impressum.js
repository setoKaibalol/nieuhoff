import React from "react"

function impressum() {
	return (
		<div className="w-full flex justify-center min-h-screen pt-20">
			<div className="w-5/6 flex justify-center flex-col p-20 items-center">
				<h1 className="font-medium text-xl">Impressum</h1>
				<div>
					<br></br>
					Ralf Nieuhoff <br></br>Alte Schulstraße 4b <br></br>
					23936 Mummendorf
					<br></br> <br></br>
					Telefon: 0152 02388236 <br></br> Website: www.nieuhoff.com
					<br></br> Email: nieuhoff@t-online.de <br></br> <br></br>{" "}
					Geschäftsführer: Ralf Nieuhoff <br></br>
					{/* Steuer ID 48/700/04007 */} <br></br>
					<br></br>
					Zuständige Aufsichtsbehörde: Nordwestmecklenburg <br></br>
				</div>
			</div>
		</div>
	)
}

export default impressum
