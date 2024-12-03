import logoUrl from "../assets/logo.png"
import MobileMenu from "./MobileMenu"
import { useScroll , useMotionValueEvent} from "framer-motion"
import { useState } from "react"
export default function NavBar () {
    const { scrollY} = useScroll()
    const [scrolled , setScrolled] = useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 100 && !scrolled)
        {
            setScrolled(true);
        }
        else if (latest === 0 && scrolled) {
            setScrolled(false);
        }
      })
      console.log(scrolled)
      const defaultClasses = " container transition-all fixed top-2 z-50 w-full ";
      const navBarClasses = scrolled ? `${defaultClasses} border bg-white/75 backdrop-blur-sm border-black/20 rounded-2xl  md:px-0` : `${defaultClasses} bg-transparent`;
    return <div className={navBarClasses}>
        <div className="mx-auto w-full max-w-screen-xl md:px-20 relative">
        <div className="flex items-center justify-between">
            <div>
                <img src={logoUrl} alt="logo" className="h-20 w-20" />
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 p-4">
                    <li>
                        <a href="#roadmap" className="text-gray-600">Roadmap</a>
                    </li>
                    <li>
                        <a href="#features" className="text-gray-600">Features</a>
                    </li>
                    <li>
                        <a href="#pricing" className="text-gray-600">Pricing</a>
                    </li>
                </ul>
            </nav>
            <div className="hidden md:block">
                <a className="bg-black px-4 py-2 rounded-md text-white">Login</a>
                <a className="bg-black px-4 py-2 rounded-md text-white ml-2">Sign Up</a>
            </div>
                <MobileMenu />

        </div>
        </div>
    </div>
}
