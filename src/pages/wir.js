import React from "react"
import Image from "next/image"

function Wir() {
	return (
		<div className="min-h-screen pt-20 pb-10 flex items-center flex-col w-full gap-8">
			<div className="relative w-full h-80">
				<Image
					src={"/media/images/forest_banner.jpg"}
					fill
					style={{ objectFit: "cover", objectPosition: "center" }}></Image>
			</div>
			<div className="px-10 pt-5 gap-4 flex flex-col w-4/6">
				<p className="font-bold text-xl">
					Herzlich Willkommen bei uns - Ihrem lokalen Jäger und Förster!
				</p>
				<p>
					Wir sind ein Familienbetrieb, der seit Generationen in der Forst- und
					Jagdbranche tätig ist. Unsere Passion ist es, die Schönheit und die
					Wunder der Natur mit Ihnen zu teilen. Wir legen Wert auf
					Nachhaltigkeit und den Schutz unserer Umwelt und arbeiten daher eng
					mit der Natur zusammen.
				</p>
				<p>
					Unser Ziel ist es, Ihnen die höchste Qualität von frischen,
					handverlesenen Produkten direkt aus unseren Wäldern anzubieten. Wir
					sind stolz darauf, unsere Produkte nachhaltig und regional zu
					produzieren und das auf eine Art und Weise, die sowohl der Umwelt als
					auch den Tieren gerecht wird.
				</p>
				<p>
					Unser Versorgungsboxen-Service ist eine Möglichkeit für Sie, die
					unberührte Schönheit unserer Wälder zu erleben und dabei auch noch
					etwas Gutes für die Umwelt zu tun. Wir liefern unsere Produkte direkt
					zu Ihnen nach Hause, damit Sie die frischesten und qualitativ
					hochwertigsten Zutaten in Ihrer eigenen Küche genießen können.
				</p>
				<div>
					Wir laden Sie ein, uns auf dieser Reise zu begleiten und die Schönheit
					und den Geschmack unserer Wälder zu entdecken. Kontaktieren Sie uns,
					wenn Sie Fragen haben oder mehr über uns erfahren möchten. Wir freuen
					uns darauf, von Ihnen zu hören!
				</div>
			</div>
			<div className="px-10 pt-5 gap-4 flex flex-col w-4/6">
				<p className="font-medium text-lg">Über Ralf Nieuhoff</p>
				Pariatur labore dolore occaecat nostrud cillum. Esse officia ut
				consectetur id minim. Elit voluptate fugiat mollit minim.
				<p>
					Irure non ea ad cillum minim aute anim ut elit amet eu. Anim
					exercitation elit amet consequat consequat nostrud eu ad anim.
					Deserunt cupidatat culpa et do nulla eiusmod voluptate sunt occaecat
					velit.{" "}
				</p>
				<p>
					Nulla voluptate adipisicing non est non ex mollit. Aute consectetur
					veniam tempor eu. Fugiat nulla mollit non cillum esse excepteur
					adipisicing sit occaecat esse laboris officia veniam.{" "}
				</p>
				<div>
					Ea laboris voluptate mollit incididunt eiusmod nisi elit tempor et
					aliquip. Magna reprehenderit reprehenderit excepteur exercitation sit
					esse ad. Enim dolor mollit esse nostrud anim. Duis nostrud Lorem ex do
					enim esse nostrud eiusmod reprehenderit ad proident nostrud.
					Incididunt dolore officia anim occaecat exercitation ullamco.{" "}
				</div>
			</div>
		</div>
	)
}

export default Wir
