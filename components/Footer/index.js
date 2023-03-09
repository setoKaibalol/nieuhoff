import React from "react"
import Link from "next/link"

function Footer() {
	const navigationLinks = [
		{ name: "Wir", href: "/wir" },
		{ name: "Kontakt", href: "/kontakt" },
		{ name: "Catering", href: "/catering" },
		{ name: "Outdoorkleidung", href: "/outdoorkleidung" },
		{ name: "Versorgungsboxen", href: "/versorgungsboxen" },
	]

	return (
		<div className="bg-forest-green border-t-2 border-tree-brown">
			<div className="relative flex md:flex-row flex-col justify-center items-center md:h-20 h-auto gap-4 w-full ">
				{navigationLinks.map((link, index) => (
					<Link
						href={link.href}
						key={index}
						className="p-2 font-serif font-bold text-white rounded-lg hover:bg-main-dark/80 duration-200">
						{link.name}
					</Link>
				))}
			</div>
			<div className="flex w-full flex-row gap-2 justify-center text-gray-400 border-t-black border-t-2 p-2">
				<div>
					<Link href={"/impressum"} className="hover:text-black duration-100">
						Impressum
					</Link>
				</div>
				<div>
					<Link
						href={"/datenschutzerklärung"}
						className="hover:text-black duration-100">
						Datenschutzerklärung
					</Link>
				</div>
				<div>
					<Link href={"/agb"} className="hover:text-black duration-100">
						AGBs
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
