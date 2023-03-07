import Head from "next/head"
import { Inter } from "next/font/google"
import HeroSection from "../../components/Homepage/Hero"
import Section1 from "../../components/Homepage/Section1"
import Section2 from "../../components/Homepage/Section2"
import HeroNavbar from "../../components/Navbar/HeroNavbar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Nieuhoff</title>
				<meta
					name="description"
					content="Wir liefern hochwertige und regionale Nahrungsmittel."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={""}>
				<HeroSection></HeroSection>
				<HeroNavbar></HeroNavbar>

				<Section1></Section1>
				<Section2></Section2>
			</main>
		</>
	)
}
