import React from "react"
import ImageSliderCatering from "../../components/ImageSliders/ImageSliderCatering"

function catering() {
	return (
		<div className="min-h-screen pt-20">
			<div className="px-10 pt-5 gap-4 flex flex-col">
				<h2 className="font-bold text-center text-2xl">Catering</h2>
				<p className="font-medium text-lg">Willkommen im Bereich Catering!</p>

				<p>
					Ich freue mich darauf, Ihnen erstklassige Catering-Services für bis zu
					60 Leute anzubieten. Ob Sie eine private Feier, ein Firmenevent oder
					eine Hochzeit planen, ich bin Ihr zuverlässiger Partner für
					hochwertiges Catering in Hamburg und Umgebung.
				</p>
				<p>
					Dank meiner jahrzehntelangen Catering-Erfahrung und lebenslangen
					Leidenschaft fürs Kochen konzentriere ich mich darauf, Ihre
					individuellen Wünsche und Bedürfnisse zu erfüllen. Ich verwende
					Zutaten, die nicht nur köstlich, sondern auch gesund sind. Dabei lege
					ich Wert auf regionale Produkte und eine nachhaltige Beschaffung.
				</p>
				<p>
					Ich biete eine breite Palette an Wildgerichten und Hausmannskost an.
					Meine Menüs werden individuell auf Ihre Bedürfnisse abgestimmt und
					können auch spezielle Ernährungsbedürfnisse wie vegetarische, vegane
					oder glutenfreie Optionen berücksichtigen.
				</p>
				<p>
					Ich verstehe, dass jeder Anlass einzigartig ist und daher eine
					individuelle Herangehensweise erfordert. Ich arbeite eng mit Ihnen
					zusammen, um Ihre Vorstellungen und Anforderungen zu verstehen und
					eine unvergessliche kulinarische Erfahrung zu schaffen.
				</p>
				<p>
					Ich freue mich darauf, Ihnen bei der Planung Ihres nächsten Events zu
					helfen. Kontaktieren Sie mich gerne für ein unverbindliches Angebot
					oder weitere Informationen. Ich bin stolz darauf, dass mein
					Catering-Service nicht nur köstlich, sondern auch nachhaltig ist. Ich
					setze mich für Umweltschutz und Nachhaltigkeit ein und arbeite, wenn
					keine eigenen Zutaten verwendet werden, mit lokalen Lieferanten und
					Produzenten zusammen, um sicherzustellen, dass meine Zutaten und
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
