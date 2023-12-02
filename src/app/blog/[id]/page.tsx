import Image from "next/image"

// function getData(id: string) {
// 	const data = items[id as keyof typeof items]
// 	if (data) {
// 		return data
// 	}
// 	return notFound()
// }
export async function generateMetadata({ params }) {
	const post = await getData(params.id)
	return {
		title: post.title,
		description: post.desc,
	};
}

const BlogApi = ({ params }: any) => {
	return (
		<div className={"styles.container"}>
			<div className={'flex'}>
				<div className={'flex-[1] flex flex-col justify-between'}>
					<h1 className={'text-4xl'}>{data.title}</h1>
					<p className={'text-xl'}>{data.desc}</p>
					<div className={'flex items-center gap-[10px]'}>
						<Image
							src={data.img}
							alt=""
							width={40}
							height={40}
							className={'object-cover rounded-[50%]'}
						/>
						<span className={styles.username}>{data.username}</span>
					</div>
				</div>
				<div className={'flex-[1] h-[300px] relative'}>
					<Image src={data.img} alt="" fill={true} className={'object-cover'} />
				</div>
			</div>
			<div className={'mt-[50px] text-xl font-light text-[#999] text-justify'}>
				<p className={'styles.text'}>{data.content}</p>
			</div>
		</div>
	)
}

export default BlogApi
