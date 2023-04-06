import React from "react"
import Image from "next/image"

function Section1() {
	return (
		<div className="h-auto w-full font-medium text-lg bg-tree-brown/30 border-b flex justify-center">
			<div className="lg:w-5/6 w-full h-auto flex lg:flex-row flex-col lg:p-10 gap-4">
				<div className="lg:w-3/6 w-full">
					<h1 className="p-2 mx-2 mt-4 font-bold text-2xl">
						Willkommen bei Ralf Nieuhoff, Ihrem Forstwirt aus Mummendorf!{" "}
					</h1>
					<div className="w-full h-96 lg:hidden block relative ">
						<Image
							alt="hut_at_night"
							sizes="(max-width: 820px) 100vw, 820px"
							priority
							style={{ objectFit: "contain", objectPosition: "center" }}
							src={"/media/images/hut_at_day.jpeg"}
							fill></Image>
					</div>
					<p className="px-4">
						Ich biete Catering für bis zu 60 Personen mit einer Auswahl an
						hauptsächlich Wildgerichten und flexiblen Alternativen. Besuchen Sie
						meinen charmanten Hofladen in einer selbstgebauten Blockhütte, wo
						Sie nicht nur meine köstlichen Produkte entdecken, sondern auch
						Jäger- und Outdoorkleidung der Marke "Deer Hunter" finden. Als
						kleines Unternehmen ohne Angestellte lege ich großen Wert auf
						Qualität und Kundenzufriedenheit. Entdecken Sie mein Angebot und
						lassen Sie sich von der Qualität meiner Produkte und
						Dienstleistungen überzeugen.
					</p>
				</div>
				<div className="w-3/6 h-96 hidden lg:block relative ">
					<Image
						alt="hut_at_night"
						sizes="(max-width: 820px) 100vw, 820px"
						priority
						style={{ objectFit: "contain", objectPosition: "center" }}
						src={"/media/images/hut_at_day.jpeg"}
						fill></Image>
				</div>
			</div>
		</div>
	)
}

export default Section1
