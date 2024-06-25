import {
	GoogleAuthProvider,
	signInWithCredential,
	signInWithPopup,
} from "firebase/auth";

import { Button } from "./ui/button";
import { auth, provider } from "@/lib/firebase";

interface Props {
	className?: string;
}

const SignInButton = ({ className }: Props) => {
	const handleSignIn = async () => {
		
	};

	return (
		<Button className={className} onClick={handleSignIn}>
			Sign In
		</Button>
	);
};

export default SignInButton;
