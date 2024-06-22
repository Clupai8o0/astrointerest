//Temporary file which will replace 
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Logo from "./Logo";
const NavbarSignedIn = () => {
	return (
		<>
		<header className="w-full flex justify-center px-6 relative z-10">
			<nav className="max-w-7xl w-full py-4 md:py-8 flex items-center justify-between">
				<Logo />
				<Input className="bg-stone-900 mx-12 md:mx-24 max-w-full" type="search" placeholder="Search..."/>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</nav>
			
		</header>
		<div className="w-full flex justify-center px-6">
			<hr className= "max-w-7xl w-full"></hr>
		</div>
		</>
		
	);
};

export default NavbarSignedIn;


