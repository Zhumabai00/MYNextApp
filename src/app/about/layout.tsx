// import React from "react";

import Link from "next/link";

export default function Layout({ children, }: { children: React.ReactNode }) {
	return (
		<div>
			Layout
			<ul>
				<li><Link href={'/about/contacts'}>Contacts</Link></li>
				<li><Link href={'/about/team'}>Team</Link></li>
			</ul>
			{children}
		</div>
	)
}
