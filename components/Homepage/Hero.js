import React from "react"
import Image from "next/image"

function HeroSection() {
	return (
		<div className="3xl:h-[95vh] h-[87vh] 2xl:h-[90vh] bg-forest-green flex justify-center items-center">
			<div className="absolute h-full w-full z-0 ">
				<Image
					src={"/media/images/wald_offen.jpg"}
					alt="wald"
					placeholder="blur"
					blurDataURL="/media/images/wald_offen.jpg"
					style={{ objectFit: "cover" }}
					fill></Image>
			</div>

			<div className="w-full h-full relative flex justify-center items-center backdrop-contrast-125 backdrop-brightness-110">
				<div className="relative h-60 w-60 z-10">
					<Image
						alt="logo"
						src={"/media/logo/hirsch_logo_bg.jpg"}
						placeholder="blur"
						className="rounded-full shadow-lg border-2 border-main-dark shadow-black"
						blurDataURL="/media/logo/hirsch_logo_nobg_notext.png"
						fill></Image>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
