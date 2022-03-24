import React from "react";
import Image from "next/image";

import { Icon } from "@iconify/react";

const Authenticators = () => {
	return (
		<div className="flex space-x-4 my-4">
			<button className="auth-btn" title="Sign in from google">
				<Icon className="h-6 w-6" icon="flat-color-icons:google" />
			</button>

			<button className="auth-btn" title="Sign in from github">
				<Image
					src="/assets/icons/github.svg"
					width={24}
					height={24}
					alt="github icon"
				/>
			</button>

			<button className="auth-btn" title="Sign in from twitter">
				<Image
					src="/assets/icons/twitter.svg"
					width={24}
					height={24}
					alt="twitter icon"
				/>
			</button>
		</div>
	);
};

export default Authenticators;
