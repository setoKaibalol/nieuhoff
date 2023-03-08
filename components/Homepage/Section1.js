import React from "react"
import Image from "next/image"

function Section1() {
	return (
		<div className="h-auto w-full bg-tree-brown/30 flex justify-center">
			<div className="w-5/6 h-auto flex flex-row p-10 gap-4">
				<div className="w-3/6">
					Sunt aliqua cupidatat exercitation velit officia minim eiusmod. Esse
					qui id eu deserunt occaecat dolor aliqua sit magna id elit laboris. Ut
					deserunt adipisicing aliqua fugiat eiusmod. Consectetur non id Lorem
					enim incididunt sunt non commodo ad enim. Id anim laboris quis
					laboris. Nisi ad eiusmod fugiat labore incididunt amet do excepteur
					pariatur laboris nostrud. <br></br>
					<br></br>
					Incididunt exercitation cillum excepteur nisi veniam sit veniam ad sit
					velit commodo id ad ea. Ut eiusmod cillum elit consequat culpa et quis
					ea veniam eu laboris sunt irure. Fugiat duis mollit incididunt id
					eiusmod reprehenderit nulla minim Lorem excepteur labore enim. Qui
					labore proident officia adipisicing. Est consequat occaecat quis
					dolore nostrud consectetur pariatur aliquip. Nostrud eu irure aliquip
					aliquip eiusmod mollit.
				</div>
				<div className="w-3/6 h-80 relative ">
					<Image
						alt="hut_at_night"
						sizes="(max-width: 768px) 100vw, 768px"
						priority
						style={{ objectFit: "cover", objectPosition: "center" }}
						src={"/media/images/hut_at_day.jpeg"}
						fill></Image>
				</div>
			</div>
		</div>
	)
}

export default Section1
