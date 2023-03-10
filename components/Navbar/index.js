import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function Navbar() {
	const [navbarToggled, setNavbarToggled] = useState(false)

	const NavbarRef = useRef(null)
	const fillerRef = useRef(null)
	const navbarLogoRef = useRef(null)

	const router = useRouter()

	const navigationLinks = [
		{ name: "Wir", href: "/wir" },
		{ name: "Kontakt", href: "/kontakt" },
		{ name: "Catering", href: "/catering" },
		{ name: "Outdoorkleidung", href: "/outdoorkleidung" },
		{ name: "Versorgungsboxen", href: "/versorgungsboxen" },
	]

	return (
		router.pathname !== "/" && (
			<div
				ref={NavbarRef}
				className="w-full 3xl:h-[5vh] h-[13vh] 2xl:h-[10vh] fixed z-10 from-main-dark bg-gradient-to-l to-forest-green border-y-2 border-tree-brown text-white">
				<div className="h-full w-full flex flex-row justify-between items-center px-8">
					<div className="flex flex-row gap-4 justify-center items-center ">
						{navigationLinks.map((link, index) => (
							<Link
								key={index}
								className="p-2 font-serif font-bold rounded-lg hover:bg-main-dark/80 duration-200"
								href={link.href}>
								{link.name}
							</Link>
						))}
					</div>
					<Link
						href={"/"}
						ref={navbarLogoRef}
						className=" rounded-full duration-200 relative justify-center items-center">
						<Image
							placeholder="blur"
							blurDataURL="/media/logo/hirsch_logo_nobg_notext.png"
							alt="logo"
							className="rounded-lg object-contain object-center"
							height={68}
							width={68}
							src={"/media/logo/hirsch_logo_bg.jpg"}></Image>
					</Link>
				</div>
			</div>
		)
	)
}

export default Navbar
