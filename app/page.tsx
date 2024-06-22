import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
    <>
			<Navbar />
			<main className="flex relative justify-center w-full h-[90vh] px-6">
				<div className="max-w-7xl w-full h-full">
					<div className="relative z-10 mt-[10vh] h-full md:w-2/3 lg:w-1/2 md:mt-[20vh]">
						<h1 className="font-sans text-4xl md:text-6xl leading-[1]">
							Explore The <br />{" "}
							<span className="text-5xl md:text-7xl font-extrabold italic">Cosmos</span>
						</h1>
						<p className="opacity-80 mt-4">
							Embark on a journey through the universe with our curated
							collection of high-quality space images. Save your favorite
							celestial snapshots, organize them into boards, and share the
							wonders of the cosmos with others. Join our community of space
							enthusiasts and start exploring today!
						</p>
						<Button className="mt-10">Sign In</Button>
					</div>
				</div>

				<img
					src="/mobile-hero-img.png"
					alt="astronomy pins aligned in mobile view"
					className="absolute z-0 -bottom-2/3 -right-1/3 scale-[.8] rotate-[30deg] md:hidden "
				/>
				<img
					src="/desktop-hero-img.png"
					alt="astronomy pins aligned in desktop view"
					className="absolute hidden md:block z-0 scale-[0.9] lg:scale-[0.7] rotate-[30deg] -bottom-1/2  lg:-bottom-[100%] xl:-bottom-[150%] -right-1/3 lg:-right-1/4"
				/> 
			</main>
		</>
	);
}
