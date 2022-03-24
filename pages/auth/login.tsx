import React from "react";

function Login() {
	return <div>Login</div>;
}

export default Login;

export async function getStaticProps(context) {
	await sleepByPromise(0.6);

	return {
		props: {}, // will be passed to the page component as props
	};
}

function sleepByPromise(sec) {
	return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
