import Image from "next/image";
import Link from "next/link";

//* components
import Footer from "../components/Footer";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<>
			<Head />
			<NavBar />

			{/* TODO: Each section is 100vw and 100vh min */}
			<main>
				{/* Hero */}
				{/* <section>
					<section>
						<Image
							src="/hero-img.jpg"
							layout="fill"
							objectFit="contain"
							alt="hero"
						/>
					</section>
					<section>
						<h1>Pinterest for Space</h1>
						<p>
							A portfolio project that uses the NASA api to get images and
							information regarding those images and projects them in a fashion
							similar to that of Pinterest.
						</p>
						<button>Check Out</button>
					</section>
				</section> */}

				{/* Save & Share */}
				{/* <section>
					<section>
						<Image
							src="/illustration-save.svg"
							alt="illustration save and share"
							layout="fill"
							objectFit="contain"
						/>
					</section>
					<section>
						<h1>Save & Share</h1>
						<p>
							Get access to a large collection of images directly from NASA.
							Save them into your favorites and share them across platforms.
						</p>
					</section>
				</section> */}

				{/* Detailed info */}
				{/* <section>
					<div>
						<video autoPlay loop style={{ width: "500px", height: "500px" }}>
							<source src="//video-stars.mp4" />
						</video>
					</div>

					<h1>Get detailed info about what you&apos;re looking at</h1>
				</section> */}

				{/* Join */}
				{/* <section>
					<div>
						<h1>Join Today</h1>
						<Link href="/auth/register">
							<a>Sign Up</a>
						</Link>
					</div>
				</section> */}
			</main>

			{/* <Footer /> */}
		</>
	);
}
