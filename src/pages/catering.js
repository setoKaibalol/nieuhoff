import React from "react"
import ImageSliderCatering from "../../components/ImageSliders/ImageSliderCatering"

function catering() {
	return (
		<div className="min-h-screen pt-20">
			<div className="px-10 pt-5 gap-4 flex flex-col">
				<h2 className="font-bold text-center text-2xl">Catering</h2>
				<p className="font-medium text-lg">Willkommen im Bereich Catering!</p>

				<p>
					{" "}
					Wir sind stolz darauf, Ihnen erstklassige Catering-Services für jeden
					Anlass anzubieten. Ob Sie eine private Feier, ein Firmenevent oder
					eine Hochzeit planen, wir sind Ihr zuverlässiger Partner für
					hochwertiges Catering in Hamburg und Umgebung.
				</p>
				<p>
					Durch Jahrzehnte Catering Erfahrung und eine Lebenslange Leidenschaft
					fürs Kochen, konzentrieren wir uns darauf Ihre individuellen Wünsche
					und Bedürfnisse zu erfüllen. Wir verwenden Zutaten, die nicht nur
					köstlich, sondern auch gesund sind. Dabei legen wir Wert auf regionale
					Produkte und eine nachhaltige Beschaffung.
				</p>
				<p>
					Wir bieten eine breite Palette an Wildgerichten und Hausmannskost an.
					Unsere Menüs werden individuell auf Ihre Bedürfnisse abgestimmt und
					können auch spezielle Ernährungsbedürfnisse wie vegetarische, vegane
					oder glutenfreie Optionen berücksichtigen.
				</p>
				<p>
					Wir verstehen, dass jeder Anlass einzigartig ist und daher eine
					individuelle Herangehensweise erfordert. Unser erfahrenes Team
					arbeitet eng mit Ihnen zusammen, um Ihre Vorstellungen und
					Anforderungen zu verstehen und eine unvergessliche kulinarische
					Erfahrung zu schaffen.
				</p>
				<p>
					Wir freuen uns darauf, Ihnen bei der Planung Ihres nächsten Events zu
					helfen. Kontaktieren Sie uns gerne für ein unverbindliches Angebot
					oder weitere Informationen. Wir sind stolz darauf, dass unser
					Catering-Service nicht nur köstlich, sondern auch nachhaltig ist. Wir
					setzen uns für Umweltschutz und Nachhaltigkeit ein und wenn mal keine
					eigenen Zutaten benutzt werden arbeiten mit lokalen Lieferanten und
					Produzenten zusammen, um sicherzustellen, dass unsere Zutaten und
					Produkte von höchster Qualität sind.
				</p>
				<div>
					Bei Fragen stehen wir Ihnen gerne per Telefon unter{" "}
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
				<ImageSliderCatering />
			</div>
		</div>
	)
}

export default catering
