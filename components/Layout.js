import Footer from "./Footer";
import Navbar from "./Navbar";
import { Inter, Figtree } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'] })

export default function Layout({children}) {
	return (
		<div className={figtree.className}>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}