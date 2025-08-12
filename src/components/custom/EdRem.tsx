'use client'

import React from 'react'
import Image from 'next/image';
import { Marquee } from '../magicui/marquee';

const EdRem = () => {

    const images = [
        '/assets/img1.png',
        '/assets/img2.png',
        '/assets/img3.png',
        '/assets/img4.png'
    ]

    return (
        <React.Fragment>
            <section className=' w-screen h-fit flex flex-col items-center justify-center'>
                <div className=' w-screen h-fit py-6 px-8 flex flex-col items-center justify-center gap-8'>
                    <h1 className=' text-4xl font-bold'>
                        Cyber Security Education Reimagined
                    </h1>
                    <p className=' text-justify w-full h-fit px-44 max-md:px-2 py-2 text-lg'>
                        We are revolutionising cyber security education. Beyond earning credentials, we offer a transformative learning experience designed to prepare you for leadership in the ever-evolving digital landscape.
                    </p>
                    <Image
                        src={'/assets/ed.png'}
                        alt='Education'
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, 1140px"
                        className='w-full max-w-[1140px] max-md:max-w-[510px] h-auto object-cover aspect-video rounded-3xl z-10'
                    />
                </div>

                <div className=' h-fit w-screen flex flex-col items-center justify-center bg-[#202A40] py-8'>
                    <h1 className=' text-5xl max-md:text-3xl font-bold text-white text-center w-full h-fit py-12'>
                        Accreditations and Recognitions
                    </h1>
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {images.map((image, index) => (
                            <div className='w-fit h-full flex items-center justify-center' key={index}>
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    width={0}
                                    height={0}
                                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px"
                                    className="w-fit h-fit object-contain rounded-xl z-10 p-2 mx-12 filter brightness-0 invert"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EdRem