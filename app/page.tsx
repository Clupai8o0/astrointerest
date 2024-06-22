import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="relative">
				<div>
					<h1></h1>
					<p></p>
					<Button>Sign In</Button>
				</div>

				<img
					src="/mobile-hero-img.png"
					alt="astronomy pins aligned in mobile view"
				/>
			</main>
		</>
	);
}
