import Link from "next/link"
import { FC } from "react"


interface BtProps {
	text: string
	url: string
}

const Button: FC<BtProps> = ({ text, url }) => {
	return (
		<div>
			<Link href={url}>
				<button className="p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] w-max text-white">{text}</button>
			</Link>
		</div>
	)
}

export default Button
