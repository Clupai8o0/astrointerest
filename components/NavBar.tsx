import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<header>
			<nav>
				{/* Logo */}
				<section>
					{/* TODO: make it responsive */}
					<Link href="/">
						<a>
							<Image
								src="logo.png"
								alt="logo"
								title="home"
								layout="fill"
								objectFit="contain"
							/>
						</a>
					</Link>
				</section>

				{/* Nav Elements */}
				<section>
					<ul>
						<li>
							<Link href="/auth/login">
								<a>Login</a>
							</Link>
						</li>
						<li>
							<Link href="/auth/register">
								<a>Sign Up</a>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</header>
	);
};

export default NavBar;
