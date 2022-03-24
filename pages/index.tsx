import Image from "next/image";
import Link from "next/link";

//* components
import Footer from "../components/Footer";
import Head from "../components/Head";
import NavBar from "../components/Navbar";
import Loader from "../components/Loader";

//* Hooks
import { useLoader } from "../lib/hooks";

//* Utility Function
import delay from "../lib/delay";

//* Styles
import Styles from "../styles/Home.module.css";
import cls from "classnames";

//? -> Delay before page loads and shows the content
//* Done so as to allow a smooth transition between pages...
export async function getStaticProps() {
	await delay(0.6);
	return {
		props: {},
	};
}

export default function Home() {
	const { loading, setLoading, routeChange } = useLoader();

	return (
		<>
			<Head />
			<NavBar />

			<Loader show={loading} routeChange={routeChange} />

			<main
				className={`w-screen flex flex-col items-center overflow-x-hidden ${
					loading && "h-screen overflow-y-hidden"
				}`}
			>
				{/* Hero */}
				<section className="section-container flex flex-col lg:items-center lg:flex-row-reverse lg:px-6 snap-center">
					<section className="relative w-full h-80 lg:w-1/2 md:h-[500px] lg:max-h-[578px] lg:h-[578px]">
						<Image
							src="/assets/home/hero-img.jpg"
							layout="fill"
							objectFit="contain"
							alt="hero"
							data-aos="fade-in"
							data-aos-duration="1000"
							data-aos-delay="1500"
							onLoad={() => setLoading(false)}
						/>
					</section>

					<section className="text-center lg:text-left lg:items-start flex flex-col items-center lg:w-1/2 mt-4">
						<h1
							className="max-w-xs mb-4 md:max-w-lg md:mb-8"
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="600"
						>
							Pinterest for Space
						</h1>
						<p
							className="max-w-xs md:max-w-lg"
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="800"
						>
							A portfolio project that uses the NASA api to get images and
							information regarding those images and projects them in a fashion
							similar to that of Pinterest.
						</p>
						<div
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="1000"
						>
							<button className={cls("mt-12", Styles.heroBtn)}>
								Check Out
							</button>
						</div>
					</section>
				</section>

				{/* Save & Share */}
				<section className="section-container flex flex-col items-center lg:flex-row lg:px-6">
					<section className="relative w-[80%] h-64 lg:w-1/2 md:h-[300px] lg:max-h-[400px] lg:h-[350px]">
						<Image
							src="/assets/home/illustration-save.svg"
							alt="illustration save and share"
							layout="fill"
							objectFit="contain"
							data-aos="fade-up"
							data-aos-duration="1000"
							data-aos-delay="600"
						/>
					</section>

					<section className="text-center mt-12 lg:text-left">
						<h1
							className="max-w-xs mb-4 md:max-w-lg md:mb-8"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							Save & Share
						</h1>
						<p
							className="max-w-xs md:max-w-lg"
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="200"
						>
							Get access to a large collection of images directly from NASA.
							Save them into your favorites and share them across platforms.
						</p>
					</section>
				</section>

				{/* Join */}
				<section className="section-container flex items-center justify-center">
					<div className="flex flex-col items-center">
						<h1 data-aos="zoom-in" data-aos-duration="800">
							Join Today
						</h1>

						<Link href="/auth/register">
							<a
								className={cls(Styles.joinBtn, "mt-8", Styles.heartbeat)}
								title="Sign up"
								data-aos="zoom-in"
								data-aos-duration="800"
								data-aos-delay="400"
							>
								<span>Sign Up</span>
							</a>
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
