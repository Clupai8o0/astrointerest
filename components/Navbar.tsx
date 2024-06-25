import Logo from "./Logo";
import SignInButton from "./SignInButton";
const Navbar = () => {
	return (
		<header className="w-full flex justify-center px-6 relative z-10">
			<nav className="max-w-7xl w-full py-4 md:py-8 flex items-center justify-between">
				<Logo />
				<SignInButton />
			</nav>
		</header>
	);
};

export default Navbar;
