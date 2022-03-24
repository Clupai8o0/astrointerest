import React from "react";
import Image from "next/image";

const Loader = ({
	show,
	routeChange,
}: {
	show: boolean;
	routeChange: boolean;
}) => {
	return (
		<div
			className={`z-[100] fixed w-screen h-screen flex items-center justify-center bg-black ${
			routeChange
				? "slide-in-right"
				: show
				? "transform translate-x-0"
				: "slide-out-left"
			}`}
			style={{ perspective: 1000 }}
		>
			<div className={`${show ? "fade-in" : "fade-out"} relative h-24 w-24`}>
				<Image
					src="/assets/loader.png"
					layout="fill"
					objectFit="contain"
					alt="loader"
					className="animation-loading"
				/>
			</div>
		</div>
	);
};

export default Loader;
