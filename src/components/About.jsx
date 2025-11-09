import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function About() {
    const headingRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(headingRef.current, {
        opacity: 0,
        x: -50,
        ease: "power1.out",
        duration: .7,
        scrollTrigger : {
            trigger: headingRef.current,
            start: "top 80%",
        },
        
    })
    },[])
    
    return (
        <div className=' flex-center flex-col mx-[2em] md:mx-[5em] h-[100vh] gap-10 mt-[70px]'>
            <h1 ref={headingRef} className='text-4xl heading-style heading-font about-heading '>About</h1>
            <div className='flex flex-row justify-between flex-wrap md:flex-nowrap gap-5 '>
                <div className=' flex md:basis-2/4 items-center justify-center '>
                    <img src="/about-image.png" className='h-[auto] w-[auto]'/>
                </div>
                <div className=' flex flex-col items-center justify-center gap-2 w-full md:w-[50%] md:px-[40px]' >
                    <p className='para-style para-font para w-full'>
                        I’m a developer with a strong focus on building scalable, efficient, and user-centric applications.
                        With experience across front-end and back-end technologies, I enjoy turning ideas into real-world products that make a difference.
                    </p>
                    <p> </p>
                    <p className='para-style para-font para  w-full'>
                        I’m driven by problem-solving, clean architecture, and constant growth — whether it’s improving app performance, learning new frameworks,
                        or collaborating on impactful projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About