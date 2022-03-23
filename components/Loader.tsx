import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loader = ({ show }: { show: boolean }) => {
	return (
		<div
			className={`z-[100] absolute w-screen h-screen flex items-center justify-center bg-black ${
				!show && "slide-out-left"
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
