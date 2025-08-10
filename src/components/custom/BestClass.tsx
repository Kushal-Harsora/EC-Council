'use client';

import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const BestClass = () => {
    return (
        <React.Fragment>
            <section className=' h-[60vh] max-md:h-fit w-screen bg-gray-50 overflow-hidden grid md:grid-cols-2 max-md:grid-rows-1'>
                <div className=' w-full h-full flex flex-col items-start max-md:items-center justify-center gap-3.5 max-md:gap-2 px-8 max-md:px-3.5 py-4'>
                    <h1 className=' text-4xl max-md:text-2xl font-bold'>
                        The Top 10 Best Online Master&apos;s in Cybersecurity by Fortune®
                    </h1>

                    <div className=' relative w-full h-fit flex flex-col items-center justify-center md:hidden z-10 py-6 px-0'>
                        <Image
                            src="/assets/badge.png"
                            alt="badge"
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 50vw, 320px"
                            className="w-[80%] max-w-[320px] max-md:max-w-[250px] h-auto object-cover aspect-square rounded-3xl z-20"
                        />

                        <div className=' w-full h-fit flex flex-row justify-evenly items-center py-6'>

                            <div className=' w-fit'>
                                <h1 className=' text-4xl font-semibold'>
                                    20+
                                </h1>
                                <p className=' text-sm text-center'>
                                    Years of Legacy
                                </p>
                            </div>

                            <div className=' w-fit'>
                                <h1 className=' text-4xl font-semibold'>
                                    140+
                                </h1>
                                <p className=' text-sm text-center'>
                                    Countries with ECCU Students
                                </p>
                            </div>

                        </div>
                    </div>
                    <p className=' w-full text-wrap text-justify'>
                        EC-Council University has been ranked among “The Top 10 Best Online Master&apos;s in Cybersecurity” by Fortune®, underscoring our commitment to excellence, innovation, and ethical practices in cybersecurity education.
                    </p>
                    <Button
                        className=' w-fit h-fit bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-0.5'
                        onClick={() => { alert("Inquiry Initiated!"); }}
                    >
                        Inquire Now
                        <MoveRight />
                    </Button>
                </div>
                <div className=' relative w-full flex flex-row justify-evenly items-center max-md:hidden px-6'>
                    <Image
                        src="/assets/badge.png"
                        alt="badge"
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 50vw, 300px"
                        className="w-[80%] max-w-[300px] max-md:hidden h-auto object-cover aspect-square rounded-3xl z-20"
                    />



                    <div className=' w-fit h-fit'>
                        <Separator className=' w-full h-[0.5px]' orientation={'horizontal'} />
                        <h1 className=' text-7xl font-semibold'>
                            20+
                        </h1>
                        <p className=' text-base'>
                            Years of Legacy
                        </p>
                    </div>

                    <div className=' w-fit h-fit'>
                        <Separator className=' w-full h-[0.5px]' orientation={'horizontal'} />
                        <h1 className=' text-7xl font-semibold'>
                            140+
                        </h1>
                        <p className=' text-base'>
                            Countries with ECCU Students
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BestClass