"use client"
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'

export default function Portfolio() {
	return (
		<div className={''}>
			<h1 className={'my-5'}>Choose a gallery</h1>
			<div className={'flex gap-[50px]'}>
				<Link href="/portfolio/illustrations" className={`bg-pattern bg-center bg-cover item rounded-[5px] w-[300px] h-[400px] rounded-[5px] relative border-[#bbb] border-[5px]`}>

					{/* <div className=""> */}
					<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Illustrations</span>
					{/* </div> */}
				</Link>
				<Link href="/portfolio/websites" className={'bg-center bg-cover item2 rounded-[5px] rounded-[5px] w-[300px] h-[400px] relative border-[#bbb] border-[5px]'}>
					<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Websites</span>
				</Link>
				<Link href="/portfolio/application" className={'bg-center bg-cover item3 rounded-[5px] rounded-[5px] w-[300px] h-[400px] relative border-[#bbb] border-[5px]'}>
					<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Application</span>
				</Link>
			</div>
		</div>
	)
}
