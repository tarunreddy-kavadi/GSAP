import React from 'react'
import { navLinks } from '../Constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav', { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        )
    })
    return (
        <nav>
            <div>
                <a href='#home' className='flex items-center gap-2'>
                    <p>Jai Sree Ram</p>
                </a>
                <ul>
                    {
                        navLinks.map((link) => (
                            <li>
                                <a key={link} href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
