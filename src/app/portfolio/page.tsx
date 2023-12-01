"use client"
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'

export default function Portfolio() {
	return (
		<div className={''}>
			<h1 className={'my-5'}>Choose a gallery</h1>
			<div className={'flex gap-[50px]'}>
				<Link href="/portfolio/illustrations" className={`w-[300px] h-[400px] rounded-[5px] relative border-[#bbb] border-[5px]`}>
					<Tilt
						className="w-full h-full bg-pattern bg-center bg-cover item rounded-[5px]"
						options={{
							scale: 1,
						}}
					>
						{/* <div className=""> */}
						<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Illustrations</span>
						{/* </div> */}
					</Tilt>
				</Link>
				<Link href="/portfolio/websites" className={'rounded-[5px] w-[300px] h-[400px] relative border-[#bbb] border-[5px]'}>
					<Tilt
						className="w-full h-full bg-center bg-cover item2 rounded-[5px]"
						options={{
							scale: 1,
						}}
					>
						<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Websites</span>
					</Tilt>
				</Link>
				<Link href="/portfolio/application" className={'rounded-[5px] w-[300px] h-[400px] relative border-[#bbb] border-[5px]'}>
					<Tilt
						options={{
							scale: 1,
						}}
						className="w-full h-full bg-center bg-cover item3 rounded-[5px]"
					>
						<span className={'absolute right-[10px] bottom-[10px] text-4xl font-bold title'}>Application</span>
					</Tilt>
				</Link>
			</div>
		</div>
	)
}
