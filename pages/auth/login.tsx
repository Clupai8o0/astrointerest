import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//* Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Head from "../../components/Head";

import Authenticators from "../../components/Authenticators.auth";
import Divider from "../../components/OrDivider.auth";
import Input from "../../components/Input.auth";

//* Hooks
import { useLoader } from "../../lib/hooks";

//* Styles
import Styles from "../../styles/Auth.module.css";

//* Utility Function
import delay from "../../lib/delay";

//? -> Delay before page loads and shows the content
//* Done so as to allow a smooth transition between pages...
export async function getStaticProps() {
	await delay(0.6);
	return {
		props: {},
	};
}

function Login() {
	const { loading, setLoading, routeChange } = useLoader();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<Head title="Login to Astrointerest" />
			<Navbar />
			<Loader show={loading} routeChange={routeChange} />

			<main className="h-[calc(100vh+100px)] max-w-screen w-screen flex flex-col items-center lg:flex-row-reverse">
				{/* Hero Image */}
				<section className="absolute z-20 w-screen h-screen -left-20 bottom-0 lg:w-1/2 lg:relative lg:top-0 lg:left-0 lg:mt-24">
					<Image
						src="/assets/hero-login.jpg"
						layout="fill"
						objectFit="contain"
						alt="login page hero"
						data-aos="fade-in"
						data-aos-duration="1000"
						data-aos-delay="1500"
						onLoad={() => setLoading(false)}
					/>
				</section>

				{/* Form */}
				<section className="flex justify-center items-center w-full h-full mt-24 relative z-30 lg:w-1/2">
					<div
						className="bg-[#131313] w-[90vw] sm:w-[520px] flex flex-col items-center rounded-lg py-6 px-4 md:px-8 md:py-10"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="600"
					>
						<h3>Sign In</h3>

						<Authenticators />
						<Divider />

						{/* Form */}
						<form
							onSubmit={handleSubmit}
							className="mt-4 border rounded-lg py-4 px-4 flex flex-col items-start max-w-full w-full"
						>
							<Input
								title="email"
								type="email"
								icon="ic:sharp-alternate-email"
								value={email}
								setValue={setEmail}
							/>
							<Input
								title="password"
								type="password"
								icon="ri:lock-password-line"
								value={password}
								setValue={setPassword}
							/>

							<div className="mt-6 mb-2">
								<button className={Styles.registerButton} type="submit">
									Sign In
								</button>
								<Link href="/auth/regsiter">
									<a
										className="text-base font-semibold ml-8 hover:opacity-80 transition-opacity duration-200 ease-in-out"
										title="Sign In"
									>
										Sign In
									</a>
								</Link>
							</div>
						</form>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Login;
