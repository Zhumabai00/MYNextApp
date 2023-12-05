"use client"
import { useGetPostQuery } from "@/services/PostsApi"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"

interface IDataProps {
	// post: IPosts
	// params: {
	ids: number
	// }
}

const IdCom = ({ ids }: IDataProps) => {
	const { data: post, isLoading } = useGetPostQuery(ids)

	// const router = useRouter()

	return (
		<div className={"styles.container"}>
			<div className={'flex'}>
				<div className={'flex-[1] flex flex-col justify-between'}>
					<h1 className={'text-4xl'}>{post?.title}</h1>
					<p className={'text-xl'}>{'data.desc'}</p>
					<div className={'flex items-center gap-[10px]'}>
						{/* <p>Текущий URL: {router.asPath}</p> */}
						{/* <Image
							src={'data.img'}
							alt=""
							width={40}
							height={40}
							className={'object-cover rounded-[50%]'}
						/> */}
						<span className={'styles.username'}>{post?.name}</span>
					</div>
				</div>
				<div className={'flex-[1] h-[300px] relative'}>
					{/* <Image src={'data.img'} alt="" fill={true} className={'object-cover'} /> */}
				</div>
			</div>
			<div className={'mt-[50px] text-xl font-light text-[#999] text-justify'}>
				<p className={'styles.text'}>{post?.desc}</p>
			</div>
		</div>
	)
}

export default IdCom
