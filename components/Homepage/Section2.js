import React from "react"
import Image from "next/image"

function Section1() {
	return (
		<div className="h-auto w-full pt-8 flex font-medium bg-tree-brown/30  text-lg justify-center">
			<div className="lg:w-5/6 h-auto flex lg:flex-row flex-col lg:p-10 gap-4">
				<div className="lg:w-3/6 w-full h-96 lg:h-80 relative ">
					<Image
						alt="hut_at_night"
						sizes="(max-width: 768px) 100vw, 768px"
						priority
						style={{ objectFit: "cover", objectPosition: "center" }}
						src={"/media/images/hut_at_night.jpeg"}
						fill></Image>
				</div>
				<div className="lg:w-3/6 w-full flex p-4 justify-end">
					Ich lade Sie ein, meine vielfältigen Angebote zu entdecken. Genießen
					Sie mein Catering mit erstklassigen Wildgerichten und individuellen
					Menüoptionen für bis zu 60 Personen. Erleben Sie die einzigartige
					Atmosphäre meines Hofladens in meiner selbstgebauten Blockhütte, wo
					Sie lokale Produkte und hochwertige Outdoorkleidung der Marke "Deer
					Hunter" finden. Ich lege hohen Wert auf persönlichen Kontakt und eine
					enge Beziehung zu meinen Kunden und freue mich darauf, Sie
					kennenzulernen und Ihnen meine Leidenschaft für Forstwirtschaft, gutes
					Essen und Outdoor-Aktivitäten näherzubringen.
				</div>
			</div>
		</div>
	)
}

export default Section1
