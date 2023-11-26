"use client"
import Link from "next/link";



const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
];

interface LinkProps {
	id: number,
	title: string,
	url: string,
}

export default function NavBar() {
	const buttonHandler = () => {
		console.log("Logged out")
	}
	return (
		<nav className="basicFlex py-5 bg-primary">
			<Link className="bold text-xl" href={`/`}>MYApp</Link>
			<div>
				<ul className="basicFlex gap-4">
					{links.map(link => (
						<li key={link.id}>
							<Link href={link.url}>{link.title}</Link>
						</li>
					))}
					<button className="p-1 border-none bg-[#53c28b] rounded-[3px]" onClick={buttonHandler}>Logout</button>
				</ul>
			</div>
		</nav>
	)
}
