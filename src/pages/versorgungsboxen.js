import React from "react"
import ImageSliderVersorgungsboxen from "../../components/ImageSliders/ImageSliderVersorgungsboxen"
import {
	AiFillInfoCircle,
	AiOutlineCheck,
	AiOutlineClose,
} from "react-icons/ai"

function versorgungsboxen() {
	return (
		<div className="min-h-screen pt-20">
			<div className="px-10 pt-5 gap-4 flex flex-col">
				<h2 className="font-bold text-center text-2xl">Versorgungsboxen</h2>
				<p className="font-medium text-lg">
					Willkommen bei unseren Versorgungsboxen!
				</p>

				<p>
					Unsere Versorgungsboxen sind vollgepackt mit frischen, handverlesenen
					Produkten direkt aus unseren Wäldern. Als Jäger und Förster legen wir
					besonderen Wert auf Nachhaltigkeit und den Schutz unserer Umwelt.
					Daher ist es uns wichtig, dass all unsere Produkte aus ökologischer,
					natürlicher und regionaler Herkunft stammen.
				</p>
				<p>
					Mit unseren Versorgungsboxen möchten wir Sie dazu einladen, unsere
					Produkte in Ihrer eigenen Küche zu genießen und ein Gefühl für den
					Geschmack und die Qualität unserer Wälder zu bekommen. Wir bieten eine
					Vielzahl von Produkten an, die von Wildbret über Waldbeeren bis hin zu
					Pilzen reichen.
				</p>

				<h3 className="font-medium text-lg pt-10">Angebote:</h3>
				<div className="p-4 text-md border-2 max-w-5xl gap-x-4 rounded-lg items-center w-full flex flex-row">
					<AiFillInfoCircle className="flex-shrink-0 w-6 h-6 text-black"></AiFillInfoCircle>

					<div>
						<p>
							Unsere Versorgungsboxen werden jede Woche mit anderen Frischen,
							Regionalen, Bio-Nahrungsmitteln aufgefüllt.
						</p>
						<br></br>
						<div>
							<p>Je nach Saison können die Boxen folgene Zutaten enthalten:</p>
							<p className="font-medium">
								{" "}
								Wurst, Obst und Gemüse aus der Region, Wildfleisch,
								Bio-Milchprodukte, Bio-Eier, Räucherfisch
							</p>
						</div>
					</div>
				</div>

				<ul className="flex flex-col pb-10 gap-2 divide-y-2 gap-y-6 py-4">
					<li className="flex flex-row w-full max-w-3xl justify-between">
						<div>Standard</div>
						<div className="flex flex-col text-gray-500">
							<div className="flex flex-row justify-between w-40 items-center">
								<p>Boxgröße</p>
								<p className="flex justify-center w-6">M</p>
							</div>

							<div className="flex flex-row justify-between w-40 items-center">
								Regional{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Bio{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Saisonal{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Fertiggericht
								<AiOutlineClose className=" text-red-600 font-bold h-5 w-5"></AiOutlineClose>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Kleidungsstück
								<AiOutlineClose className=" text-red-600 font-bold h-5 w-5"></AiOutlineClose>
							</div>
						</div>
						<div>18.00 €</div>
					</li>
					<li className="flex flex-row w-full max-w-3xl justify-between">
						<div>Extra</div>
						<div className="flex flex-col text-gray-500">
							<div className="flex flex-row justify-between w-40 items-center">
								<p>Boxgröße</p>
								<p className="flex justify-center w-6">L</p>
							</div>

							<div className="flex flex-row justify-between w-40 items-center">
								Regional{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Bio{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Saisonal{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Fertiggericht
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>

							<div className="flex flex-row justify-between w-40 items-center">
								Kleidungsstück
								<AiOutlineClose className=" text-red-600 font-bold h-5 w-5"></AiOutlineClose>
							</div>
						</div>
						<div>24.00 €</div>
					</li>
					<li className="flex flex-row w-full max-w-3xl justify-between">
						<div>Premium</div>
						<div className="flex flex-col text-gray-500">
							<div className="flex flex-row justify-between w-40 items-center">
								<p>Boxgröße</p>
								<p className="flex justify-center w-6">L</p>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Regional{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Bio{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Saisonal{" "}
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
							<div className="flex flex-row justify-between w-40 items-center">
								Fertiggericht
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>

							<div className="flex flex-row justify-between w-40 items-center">
								Kleidungsstück
								<AiOutlineCheck className=" text-green-600 font-bold h-5 w-5"></AiOutlineCheck>
							</div>
						</div>
						<div>80.00 €</div>
					</li>
				</ul>

				<p>
					Unsere Versorgungsboxen sind eine großartige Möglichkeit, um sich
					selbst oder Ihren Lieben eine kulinarische Erfahrung zu bieten.
					Bestellen Sie jetzt und erleben Sie den Geschmack unserer Wälder in
					Ihren eigenen vier Wänden!
				</p>
				<div>
					Ihre Bestellung nehmen wir gerne per Telefon{" "}
					<a
						className=" text-blue-500 hover:text-blue-600"
						href="tel:017612345678">
						017612345678
					</a>{" "}
					oder per email{" "}
					<a
						className=" text-blue-500 hover:text-blue-600"
						href="mailto:info@nieuhoff.de	">
						info@nieuhoff.de
					</a>{" "}
					an.
				</div>
			</div>
			<div className="p-10 gap-4 flex flex-row">
				<ImageSliderVersorgungsboxen />
			</div>
		</div>
	)
}

export default versorgungsboxen
