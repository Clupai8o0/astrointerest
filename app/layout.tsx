import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Astrointerest",
	description:
		"AstroInterest is a Pinterest-inspired platform that brings the wonders of the universe to your fingertips. Leveraging NASA's API, AstroInterest provides access to a vast collection of free, open-source astronomy images. Users can explore stunning celestial photographs, view detailed information about each image, and save their favorites to personalized boards. Whether you're an astronomy enthusiast or a casual stargazer, AstroInterest offers a visually captivating way to engage with the beauty of space.",
	keywords:
		"AstroInterest, Pinterest clone, NASA API, astronomy images, space photography, celestial images, astronomy enthusiasts, stargazing, image sharing, open-source images, space exploration, personalized boards, save images, view image information, user feed, cosmos, universe, astronomy app",
	category: "Social Media, Astronomy, Photography",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
