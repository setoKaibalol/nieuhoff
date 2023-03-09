import React from "react"
import ImageSliderOutdoorkleidung from "../../components/ImageSliders/ImageSliderOutdoorkleidung"

function outdoorkleidung() {
	return (
		<div className="min-h-screen pt-20">
			<div className="px-10 pt-5 gap-4 flex flex-col">
				<h2 className="font-bold text-center text-2xl">Outdoorkleidung</h2>
				<p className="font-medium text-lg">
					Willkommen im Bereich Outdoorkleidung!
				</p>
				<p>
					Wir sind stolz darauf, hochwertige Outdoor- und Jägerkleidung
					anzubieten, die sowohl funktional als auch stilvoll ist. Unsere
					Kleidungsstücke sind speziell für den Einsatz im Freien konzipiert und
					bieten Ihnen die besten Voraussetzungen für ein unvergessliches
					Abenteuer in der Natur.
				</p>
				<p>
					Unsere Produktpalette umfasst eine Vielzahl von Jacken, Hosen, Westen
					und anderen Accessoires, die perfekt auf die Bedürfnisse von
					Outdoor-Enthusiasten und Jägern abgestimmt sind. Ob Sie auf der Suche
					nach einer wind- und wasserdichten Jacke für eine Wanderung in den
					Bergen sind oder nach einer wärmenden Weste für die Jagd im Winter,
					bei uns werden Sie fündig.
				</p>
				<p>
					Unser Ziel ist es, Ihnen die bestmögliche Ausrüstung für Ihre
					Outdoor-Abenteuer zu bieten. Deshalb setzen wir auf eine Kombination
					aus Funktionalität, Komfort und Stil. Unsere Kleidung soll nicht nur
					Ihren Bedürfnissen gerecht werden, sondern auch ein Gefühl von
					Freiheit und Abenteuer vermitteln.
				</p>
				<div>
					Wir laden Sie ein, sich unsere Produktpalette bei uns im Laden genauer
					anzusehen und die perfekte Ausrüstung für Ihr nächstes Abenteuer in
					der Natur zu finden. Bei Fragen stehen wir Ihnen gerne per Telefon
					unter{" "}
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
					zur Verfügung!
				</div>
			</div>
			<div className="p-10 gap-4 flex flex-row">
				<ImageSliderOutdoorkleidung />
			</div>
		</div>
	)
}

export default outdoorkleidung
