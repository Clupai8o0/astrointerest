import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<header className="w-screen flex justify-center fixed bg-black shadow-lg z-50">
			<nav
				className="max-w-7xl w-screen flex items-center justify-between h-24 px-6"
				data-aos="fade-down"
				data-aos-duration="800"
			>
				{/* Logo */}
				<section>
					<div className="md:hidden">
						<Link href="/">
							<a className="relative w-12 h-12 cursor-pointer" title="home">
								<Image
									src="/icon/logo-128x128.png"
									alt="logo"
									title="home"
									height={64}
									width={64}
								/>
							</a>
						</Link>
					</div>

					<div className="hidden md:flex">
						<Link href="/">
							<a className="relative w-64 h-20 cursor-pointer" title="home">
								<Image
									src="/icon/nav-logo.png"
									alt="logo"
									title="home"
									layout="fill"
									objectFit="contain"
								/>
							</a>
						</Link>
					</div>
				</section>

				{/* Nav Elements */}
				<section>
					<ul className="flex items-center space-x-16">
						<li className="group nav-list">
							<Link href="/auth/login">
								<a className="nav-link">Login</a>
							</Link>
							<hr className="nav-hr" />
						</li>

						<li className="hidden md:flex">
							<Link href="/auth/register">
								<a className="nav-btn">Sign Up</a>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</header>
	);
};

export default NavBar;
