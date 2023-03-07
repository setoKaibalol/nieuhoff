import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function HeroNavbar() {
	const [navbarToggled, setNavbarToggled] = useState(false)

	const NavbarRef = useRef(null)
	const fillerRef = useRef(null)
	const navbarLogoRef = useRef(null)

	const router = useRouter()

	const navigationLinks = [
		{ name: "Wir", href: "/über-uns" },
		{ name: "Kontakt", href: "/kontakt" },
		{ name: "Catering", href: "/catering" },
		{ name: "Outdoorkleidung", href: "/outdoorkleidung" },
		{ name: "Versorgungsboxen", href: "/versorgungsboxen" },
	]

	useEffect(() => {
		const NavbarOffsetTop = NavbarRef.current.offsetTop
		console.log(router)
		if (router.pathname === "/") {
			document.addEventListener("scroll", () => {
				console.log("Navbar Offset: " + NavbarOffsetTop)
				console.log("Window Scroll: " + window.scrollY)
				if (window.scrollY > NavbarOffsetTop) {
					NavbarRef.current.classList.remove("relative")
					NavbarRef.current.classList.add("fixed")
					NavbarRef.current.classList.add("top-0")
					fillerRef.current.classList.add("h-20")
					setNavbarToggled(true)
				} else {
					NavbarRef.current.classList.remove("fixed")
					NavbarRef.current.classList.remove("top-0")
					fillerRef.current.classList.remove("h-20")
					NavbarRef.current.classList.add("relative")
					setNavbarToggled(false)
				}
			})
		} else {
			console.log("hi")
			NavbarRef.current.classList.remove("relative")
			NavbarRef.current.classList.add("fixed")
			NavbarRef.current.classList.add("top-0")
			fillerRef.current.classList.add("h-20")
			setNavbarToggled(true)
		}
	}, [])

	return (
		<div>
			<div ref={fillerRef} className=""></div>
			<div
				ref={NavbarRef}
				className="w-full 3xl:h-[5vh] h-[13vh] 2xl:h-[10vh] relative z-10 from-main-dark bg-gradient-to-l to-forest-green border-y-2 border-tree-brown text-white">
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
							alt="logo"
							className="rounded-lg object-contain object-center"
							height={68}
							width={68}
							src={"/media/logo/hirsch_logo_bg.jpg"}></Image>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroNavbar
