import Image from "next/image"

export default function Footer() {
	return (
		<footer className="basicFlex text-sm py-5">
			<div className="">
				2023 MYApp. All rights reserved?
			</div>
			<div className="flex items-center gap-3">
				<Image src={'/vk.png'} width={15} height={15} className="opacity-60 cursor-pointer" alt="vk.com" />
				<Image src={'/inst.png'} width={15} height={15} className="opacity-60 cursor-pointer" alt="instagram.com" />
				<Image src={'/twitter.png'} width={15} height={15} className="opacity-60 cursor-pointer" alt="twitter.com" />
				<Image src={'/yt.png'} width={15} height={15} className="opacity-60 cursor-pointer" alt="youtube.com" />
			</div>
		</footer>
	)
}
