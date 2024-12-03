import { useState } from "react"
import { AlignJustify, X } from "lucide-react"
const navItems = [
    {
        title: "About Us",
        link: "/"
    },
    {
        title: "Features",
        link: "/"
    },
    {
        title: "Pricing",
        link: "/"
    },
    {
        title: "sign Up",
        link: "/"
    },
    {
        title: "Sign in",
        link: '/'
    }
]
export default function MobileMenu() {
    const [naveOpen, setNavOpen] = useState(true)
    return (
        <div className="block md:hidden pr-4">
            {naveOpen ? (<div onClick={() => (setNavOpen(false))}> <AlignJustify /> </div>) : <div onClick={() => (setNavOpen(true))}><X />
                <div className="absolute left-0 w-full min-h-screen mt-20 text-center bg-white backdrop-blur-lg z-50">
                    <ul>
                    {navItems.map((title, index) => <li key={index}> <a  href={title.link} className="block p-4 text-xl font-semibold">{title.title}</a> </li>
                )}
                </ul>
                </div>
            </div>}
        </div>
    )
}
