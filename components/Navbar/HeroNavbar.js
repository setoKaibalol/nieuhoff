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
		{ name: "Wir", href: "/wir" },
		{ name: "Kontakt", href: "/kontakt" },
		{ name: "Catering", href: "/catering" },
		{ name: "Outdoorkleidung", href: "/outdoorkleidung" },
		/* 		{ name: "Versorgungsboxen", href: "/versorgungsboxen" },
		 */
	]

	const handleMobileMenu = (e) => {
		if (typeof document !== "undefined") {
			const mobileMenuButton = document.getElementById("mobile-menu-button")
			const mobileMenu = document.getElementById("mobile-menu")
			const mobileMenuLinks = document.getElementsByName("mobile-menu-links")
			const isLink = mobileMenuLinks.item(1)

			if (e.target.name == "mobile-menu-links") {
				setToggleMobileMenu(true)
				mobileMenuButton.classList.remove("toggle-btn")
			}

			if (mobileMenuButton.contains(e.target)) {
				//Click on Hamburger Button
				if (toggleMobileMenu) {
					setToggleMobileMenu(false)
					mobileMenuButton.classList.add("toggle-btn")
				}
				if (!toggleMobileMenu) {
					setToggleMobileMenu(true)
					mobileMenuButton.classList.remove("toggle-btn")
				}
			}

			if (
				!mobileMenu.contains(e.target) &&
				!mobileMenuButton.contains(e.target) &&
				toggleMobileMenu
			) {
				setToggleMobileMenu(true)
				mobileMenuButton.classList.remove("toggle-btn")
			}
		}
	}

	useEffect(() => {
		const NavbarOffsetTop = NavbarRef.current.offsetTop
		if (router.pathname === "/" && typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				console.log("Navbar Offset: " + NavbarOffsetTop)
				console.log("Window Scroll: " + window.scrollY)

				console.log(navbarToggled)
				if (window.scrollY > NavbarOffsetTop) {
					NavbarRef.current.classList.remove("relative")
					NavbarRef.current.classList.add("fixed")
					NavbarRef.current.classList.add("top-0")
					fillerRef.current.classList.add("h-[13vh]")

					setNavbarToggled(true)
				} else {
					NavbarRef.current.classList.remove("fixed")
					NavbarRef.current.classList.remove("top-0")
					NavbarRef.current.classList.add("relative")
					fillerRef.current.classList.remove("h-[13vh]")
					setNavbarToggled(false)
				}
			})
		}
	}, [])

	return (
		<div>
			<div ref={fillerRef} className=""></div>
			<div
				ref={NavbarRef}
				className="w-full 3xl:h-[5vh] h-[13vh] 2xl:h-[10vh] relative z-10 from-main-dark bg-gradient-to-l to-forest-green border-y-2 border-tree-brown text-white">
				<div className="h-full w-full flex flex-row justify-between items-center px-8">
					<button
						id="mobile-menu-button"
						onClick={(e) => handleMobileMenu(e)}
						className="z-30 relative h-8 w-8 cursor-pointer text-3xl md:hidden">
						<div
							className={`top-4 -mt-0.5 h-1 w-8 rounded bg-main-red transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-main-red before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-main-red after:transition-all after:duration-500 after:content-['']`}></div>
					</button>

					<div className="hidden md:flex flex-row gap-4 justify-center items-center ">
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
						className="rounded-full relative max-w-[60px] 3xl:max-w-[80px] 2xl:max-w-[70px] 3xl:h-[5vh] h-[13vh] 2xl:h-[10vh] duration-200 w-full justify-center items-center">
						<Image
							placeholder="blur"
							blurDataURL="/media/logo/hirsch_logo_bg.jpg"
							alt="logo"
							className="rounded-lg object-contain object-center"
							fill
							sizes="100%"
							src={"/media/logo/hirsch_logo_bg.jpg"}></Image>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroNavbar
