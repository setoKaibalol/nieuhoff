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
		<div className="relative flex md:flex-row flex-col justify-center items-center md:h-20 h-auto gap-4 w-full bg-forest-green border-t-2 border-tree-brown">
			{navigationLinks.map((link, index) => (
				<Link
					href={link.href}
					key={index}
					className="p-2 font-serif font-bold text-white rounded-lg hover:bg-main-dark/80 duration-200">
					{link.name}
				</Link>
			))}
		</div>
	)
}

export default Footer
