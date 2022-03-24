//* Hooks
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//* Animations
import AOS from "aos";
import "aos/dist/aos.css";

/** A hook that controls the loading animation */
const useLoader = () => {
  // Router
	const router = useRouter();

  // Loader states
	const [loading, setLoading] = useState(true);
	const [routeChange, setRouteChange] = useState(false);

  //* Listening to route change
	useEffect(() => {
		router.events.on("routeChangeStart", () => setRouteChange(true));
	}, [router.events]);

  //* Creating delay for loading animation
	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (!loading) {
			timeout = setTimeout(() => {
				AOS.init();
				AOS.refresh();
			}, 1600);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [loading]);

	return { loading, setLoading, routeChange };
};

export { useLoader };
