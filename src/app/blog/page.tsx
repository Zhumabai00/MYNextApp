"use client"
import { useGetPostsQuery } from "@/services/PostsApi"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const Blog: FC = () => {
	// const limit = "10"

	const { data: posts, isLoading } = useGetPostsQuery('')
	return (
		<div>
			<div className={'styles.mainContainer'}>
				{/* {data.map((item) => ( */}
				{/* {isLoading && <h1>Loading....</h1>} */}
				{posts?.map(item => (
					// <li key={item.id}>{item.name}</li>
					<Link
						href={`blog/${item.id}`}
						className={'flex items-center gap-[50px] mb-12'}
						key={item.id}
					>
						<div className={'styles.imageContainer'}>
							{/* <Image
								src={item.img}
								alt=""
								width={400}
								height={250}
								className={'object-cover'}
							/> */}
						</div>
						<div className={'styles.content'}>
							<h1 className={'mb-3'}>{item.title}</h1>
							<p className={'text-[#999] text-xl'}>{item.desc}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
export default Blog
