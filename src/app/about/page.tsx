import Button from "@/components/button/Button";
import { maxHeaderSize } from "http";
import Image from "next/image"

const About = () => {

	return (
		<div className="">
			<div className="w-full h-[300px] relative">
				<Image
					src={`https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1`}
					alt="friend.com"
					className="grayscale object-cover h-full"
					width={maxHeaderSize}
					height={300}
				/>
				<div className="absolute bottom-5 left-[20px] bg-[#53c28b] p-1 text-white">
					<h1 className="font-semibold text-2xl">Lorem ipsum dolor sit.</h1>
					<h2 className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
				</div>

			</div>
			<div className={`flex gap-[100px]`}>
				<div className={'mt-12 flex-[1] flex flex-col gap-[30px]'}>
					<h1 className={'text-2xl font-semibold'}>Who Are We?</h1>
					<p className={'text-base font-light text-justify text-[#cdcdcd]'}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
						esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</div>

				<div className={'mt-12 flex-[1] flex flex-col gap-[30px]'}>
					<h1 className={'text-2xl font-semibold'}>What We Do?</h1>
					<p className={'text-base font-light text-justify text-[#cdcdcd]'}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
						Creative Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>

		</div>
	)
}

export default About
