import Document, {
	Html,
	Head, //* for something that shows up in all pages
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="icon/logo-32x32.png" type="image/png" />
				</Head>

				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
