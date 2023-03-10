import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

export default function ImageSliderCatering() {
	const [loaded, setLoaded] = useState(false)

	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 4,
			spacing: 15,
		},
		created() {
			setLoaded(true)
		},
	})

	return (
		<div ref={sliderRef} className="keen-slider">
			<div className="keen-slider__slide number-slide1">
				<div className="relative w-full h-80 flex justify-center items-center">
					<Image
						alt="Schweinebraten"
						placeholder="blur"
						blurDataURL="/media/images/catering/schweinebraten_1.jpeg"
						style={{ objectFit: "contain", objectPosition: "center" }}
						className=""
						src={"/media/images/catering/schweinebraten_1.jpeg"}
						fill></Image>
				</div>
			</div>
			<div className="keen-slider__slide number-slide2">
				<div className="relative  w-full h-80 flex justify-center items-center">
					<Image
						alt="Würstchen"
						placeholder="blur"
						blurDataURL="/media/images/catering/würstchen_1.jpeg"
						style={{ objectFit: "contain", objectPosition: "center" }}
						src={"/media/images/catering/würstchen_1.jpeg"}
						fill></Image>
				</div>
			</div>
			<div className="keen-slider__slide number-slide3">
				<div className="relative  w-full h-80 flex justify-center items-center">
					<Image
						alt="Gulasch"
						placeholder="blur"
						blurDataURL="/media/images/catering/gulasch_1.jpeg"
						style={{ objectFit: "contain" }}
						src={"/media/images/catering/gulasch_1.jpeg"}
						fill></Image>
				</div>
			</div>
			<div className="keen-slider__slide number-slide4">
				<div className="relative  w-full h-80 flex justify-center items-center">
					<Image
						alt="Hummer"
						placeholder="blur"
						blurDataURL="/media/images/catering/hummer_1.jpeg"
						style={{ objectFit: "contain" }}
						src={"/media/images/catering/hummer_1.jpeg"}
						fill></Image>
				</div>
			</div>
			<div className="keen-slider__slide number-slide5">
				<div className="relative  w-full h-80 flex justify-center items-center">
					<Image
						alt="Schweinebraten"
						placeholder="blur"
						blurDataURL="/media/images/catering/schweinebraten_2.jpeg"
						style={{ objectFit: "contain" }}
						src={"/media/images/catering/würstchen_2.jpeg"}
						fill></Image>
				</div>
			</div>
			{loaded && instanceRef.current && (
				<div className="">
					<div
						onClick={(e) => e.stopPropagation() || instanceRef.current.prev()}
						className="block hover:bg-main-red/80 duration-200 absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer">
						<BsChevronCompactLeft className="" size={40} />
					</div>

					<div
						onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
						className="block hover:bg-main-red/80 duration-200 absolute z-10 top-[55%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/60 text-white cursor-pointer">
						<BsChevronCompactRight className="" size={40} />
					</div>
				</div>
			)}
		</div>
	)
}
