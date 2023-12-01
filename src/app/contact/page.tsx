import Button from "@/components/button/Button";
import Image from "next/image";

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
						className={'object-contain animate-moveCon'}
					/>
				</div>
				<form className={'flex-[1] flex flex-col gap-[20px]'}>
					<input type="text" placeholder="name" className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'} />
					<input type="text" placeholder="email" className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'} />
					<textarea
						className={'p-[20px] bg-transparent outline-none text-gray-400 border-[3px] border-gray-400 text-2xl font-bold'}
						placeholder="message"
						cols={30}
						rows={10}
					></textarea>
					<Button url="#" text="Send" />
				</form>
			</div>
		</div>
	)
}
