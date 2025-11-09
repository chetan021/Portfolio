import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import {useRef} from 'react'
import {gsap} from 'gsap';
import React from 'react'

function Hero() {
    const box1 = useRef(null)
    useGSAP(() => {
        const heroSplit = new SplitText('.main-header', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle ', {type: 'lines'})
        const headingBodySplit = new SplitText('.heading-body ', {type: 'lines'})


        gsap.from(heroSplit.chars, {
            yPercent: 50,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.05,
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 50,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.06,
            delay: .5
        })

        gsap.from(headingBodySplit.lines, {
            opacity: 0,
            yPercent: 50,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.from(box1.current, {
            yPercent: 100,
            duration: 1.5,
            ease: 'bounce',
        })

       
    }, [])
  return (
    <>
        <section className='flex flex-wrap md:mx-[4em] mx-[1em] mt-[40px] items-center justify-between h-[100vh]'>
            <div className='mt-[10%] '>
                <h1 className='heading-font hero-heading-style main-header'>Hi, I’m Chetan Jadhav.</h1>
                <p className='subheading-font subheading-style subtitle '>I’m a front-end developer passionate about building modern, responsive, and accessible web experiences.</p>
                <p className='body-para-font body-para-style heading-body'>Turning ideas into visually engaging and performant products is what I do best.</p>
            </div>
            <div className='flex flex-end'>
                <div ref={box1} className='bg-[#BDC3C7] w-[100px] h-[100px] rounded-xl box-1'></div>
            </div>
        </section>
    </>
  )
}

export default Hero