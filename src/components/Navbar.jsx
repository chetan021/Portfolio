import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { navList } from '../../constants'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
    const navRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)

    // Navbar scroll animation
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: navRef.current,
                start: 'bottom top',
            },
        })

        navTween.fromTo(
            navRef.current,
            { backgroundColor: 'transparent', color: '#ECF0F1' },
            {
                backgroundColor: '#34495E',
                color: '#ECF0F1',
                duration: 1,
                ease: 'power1.inOut',
            }
        )
    }, [])

    return (
        <nav
            ref={navRef}
            className="flex items-center justify-between p-4 fixed top-0 left-0 w-full z-50 transition-colors duration-500"
        >

            <div className="flex text-xl basis-1/4 font-bold text-white align-center justify-center">
                <a href="#">Portfolio</a>
            </div>

            <ul className="hidden md:flex gap-8 text-white basis-1/1 justify-center">
                {navList.map(link => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className="transition duration-700 ease-in-out hover:underline underline-offset-8 text-lg "
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile hamburger */}
            <div
                className="md:hidden cursor-pointer z-50 text-white "
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <span className="text-3xl">&times;</span> // X icon
                ) : (
                    <span className="text-3xl">&#9776;</span> // Hamburger icon
                )}
            </div>

            {/* Mobile dropdown */}
            <ul
                className={`md:hidden absolute top-16 left-0 w-full bg-[#34495E] text-white flex flex-col items-center gap-6 py-6 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
                    }`}
            >
                {navList.map(link => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="hover:underline underline-offset-8 text-lg"
                        >
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
