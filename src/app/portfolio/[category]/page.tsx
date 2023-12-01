"use client"
import Button from "@/components/button/Button"
import Image from "next/image"
// import { FC } from "react"
// import { notFound, useParams } from 'next/navigation';
import { items } from "./data";
import { NextPage } from "next";
import { notFound } from "next/navigation";

// interface MyComponentParams {
// 	part: keyof MyConstantType;

// }


interface MyPageProps {
	// items: as typeof items;
	params: {
		category: string
	}
}
function getData(id: string) {
	const data = items[id as keyof typeof items]
	if (data) {
		return data
	}
	return notFound()
}

const Category: NextPage<MyPageProps> = ({ params }) => {
	const data = getData(params.category)


	return (
		<div className={''}>
			<h1 className={'text-[#53c28b]'}>{params.category}</h1>
			{data.map((item) => (
				<div className={'nth-child-odd:flex-row-reverse'} key={item.id}>
					<div className={'flex-1 flex flex-col gap-20 justify-center'}>
						<h1 className={'text-5xl'}>{item.title}</h1>
						<p className={'text-xl'}>{item.desc}</p>
						<Button text="See More" url="#" />
					</div>
					<div className={'flex-[1] h-[500px] relative'}>
						<Image
							className={'object-cover'}
							fill={true}
							src={item.image}
							alt={item.title}
						/>
					</div>
				</div>

			))}
		</div>
	)
}

export default Category
