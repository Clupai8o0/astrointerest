import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<header className="w-full flex justify-center px-6 relative z-10">
			<nav className="max-w-7xl w-full py-4 md:py-8 flex items-center justify-between">
				<div>
					<img src="/logo.svg" alt="astrointerest logo of a telescope" />{" "}
					<span className="hidden md:blocks">Astrointerest</span>
				</div>
				<Button>Sign In</Button>
			</nav>
		</header>
	);
};

export default Navbar;
