import { IPosts } from "@/models/IPosts";
import { Metadata } from "next";
import IdCom from "./idcom";
import React from "react";

interface IDataProps {
	post: IPosts
	params: {
		id: number
	}
}
const getData = async (id: number) => {

	const response = await fetch(`http://localhost:3002/posts/${id}`, {
		cache: "no-store",
	})
	// if (!response.ok) {
	// 	throw new Error("Failed to fetch data");

	// }
	return response.json()
}
export async function generateMetadata({ params }: IDataProps): Promise<Metadata> {
	const post = await getData(params.id)
	return {
		title: post.title,
	}
}




const BlogApi = ({ params }: IDataProps) => {
	return (
		<div className={"styles.container"}>
			<IdCom ids={params.id} />
		</div>
	)
}

export default BlogApi
