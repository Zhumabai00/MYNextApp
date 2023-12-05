import Button from "@/components/button/Button";
import Image from "next/image";


// import { Metadata } from "next"

// interface IDataProps {
// 	params: {
// 		id: number
// 	}
// }
// const getData = async (id: number) => {
// 	const response = await fetch(`http://localhost:3002/posts/${id}`, {
// 		cache: "no-store",
// 	})
// 	// if (!response.ok) {
// 	// 	throw new Error("Failed to fetch data");

// 	// }
// 	return response.json()
// }
// export async function generateMetadata({ params }: IDataProps): Promise<Metadata> {
// 	const post = await getData(params.id)
// 	return {
// 		title: post.title,
// 	}
// }

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '...',
	description: '...',
}


export default function Contact() {
	return (
		<div className={" "}>
			<h1 className={"text-6xl mb-20 text-center"}>Lets Keep in Touch</h1>
			<div className={"flex items-center gap-20"}>
				<div className={'flex-[1] h-[600px] relative'}>
					<Image
						src="/contact.png"
						alt="contacts"
						fill={true}
						className={'object-fill animate-moveCon'}
					/>
				</div>
				<form className={'flex-[1] flex flex-col gap-[20px]'}>
					<input type="text" placeholder="name" className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'} />
					<input type="text" placeholder="email" className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'} />
					<textarea
						className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'}
						cols={30}
						rows={10}
					></textarea>
					<Button url="#" text="Send" />
				</form>
			</div>
		</div>
	)
}
