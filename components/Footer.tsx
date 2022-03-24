import React from "react";
import ContactLink from "./ContactLink.footer";

const Footer = () => {
	const contactLinks = [
		{
			title: "Discord",
			icon: "akar-icons:discord-fill",
			link: "https://discord.gg/bkvHSBGu4F",
		},
		{
			title: "Twitter",
			icon: "ant-design:twitter-circle-filled",
			link: "https://twitter.com/Clupai8o0",
		},
		{
			title: "Instagram",
			icon: "ant-design:instagram-filled",
			link: "https://instagram/shiki8o0",
		},
		{
			title: "Github",
			icon: "akar-icons:github-fill",
			link: "https://github.com/Clupai8o0",
		},
	];

	return (
		<footer className="flex flex-col items-center text-center relative z-50">
			<section className="my-12 max-w-md px-8 lg:max-w-7xl">
				<p className="text-sm font-light">
					Portfolio project by @Clupai8o0. Inspired by 20 javascript projects by
					Jacinto Wong udemy. Database and authentication using firebase. Images
					fetched from NASA api
				</p>
			</section>

			<section className="flex space-x-6 mb-12">
				{contactLinks.map((contactLink, i) => (
					<ContactLink key={i} {...contactLink} />
				))}
			</section>
		</footer>
	);
};

export default Footer;
