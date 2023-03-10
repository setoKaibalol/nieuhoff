import "@/styles/globals.css"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextNProgress color="#365347" />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
