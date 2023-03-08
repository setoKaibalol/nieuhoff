import React from "react"
import Image from "next/image"

function Section1() {
	return (
		<div className="h-auto w-full flex justify-center">
			<div className="w-5/6 h-auto flex flex-row p-10 gap-4">
				<div className="w-3/6 h-80 relative ">
					<Image
						alt="hut_at_night"
						sizes="(max-width: 768px) 100vw, 768px"
						priority
						style={{ objectFit: "cover", objectPosition: "center" }}
						src={"/media/images/hut_at_night.jpeg"}
						fill></Image>
				</div>
				<div className="w-3/6 flex justify-end">
					Duis laboris ad eiusmod magna nostrud sit. Pariatur laboris sunt
					aliqua sint quis ullamco minim laborum do enim. Ipsum laborum amet
					anim elit et ut mollit veniam ullamco deserunt ut. Sunt consectetur
					cupidatat dolor in occaecat et sint aliqua ullamco quis. Adipisicing
					proident eiusmod est proident. Et deserunt laboris voluptate dolore
					voluptate consectetur. Magna culpa ad amet deserunt sit voluptate.
					<br></br>
					<br></br>
					Dolore pariatur sint sunt minim ipsum consequat elit incididunt sunt
					duis. Dolore proident aliquip duis occaecat. Consectetur dolore anim
					irure culpa nisi nisi Lorem irure cupidatat esse.
				</div>
			</div>
		</div>
	)
}

export default Section1
