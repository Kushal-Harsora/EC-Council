'use client';

import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

const Card = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <div className="flex justify-center w-full px-4">
            <div
                className="relative bg-cover bg-center w-full max-w-[475px] max-md:w-[450px] h-[400px] max-md:h-[375px] aspect-video group rounded-xl shadow overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div
                    className="absolute bottom-0 w-full h-[30%] backdrop-blur-lg bg-black/20 rounded-t-xl z-10 flex items-center justify-center"
                >
                    <div className="px-4 w-full text-white">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="text-base text-wrap text-justify overflow-hidden text-white">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

const WhyUs = () => {

    const programData = [
        {
            title: 'Program 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b1.png',
        },
        {
            title: 'Program 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b2.png',
        },
        {
            title: 'Program 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b3.jpg',
        },
        {
            title: 'Program 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b4.png',
        },
        {
            title: 'Program 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b5.png',
        },
        {
            title: 'Program 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique.',
            image: '/assets/b6.png',
        },
    ];


    return (
        <React.Fragment>
            <section className=' w-screen h-fit flex flex-col items-center justify-around gap-4 px-6'>
                <div className=' w-full h-fit py-6 flex flex-col items-center justify-center gap-8 max-md:gap-4'>
                    <h1 className=' text-4xl max-md:text-2xl text-center font-bold'>
                        Why EC-Council University is Right for You
                    </h1>
                    <p className=' max-md:text-center w-full h-fit px-44 max-md:px-2 py-2 text-lg max-md:text-sm'>
                        With ECCU, you&apos;re not just earning a degree - you&apos;re becoming a future-ready cyber security leader. We take your long-term career success just as seriously as delivering an immediate return on your investment.
                        Once you enter the ECCU ecosystem, you&apos;ll have unrestricted access to everything you need to accomplish your cyber security learning goals - a state-of-the-art learning management system (LMS), internationally-renowned faculty, engaging and interactive learning resources, a 24x7 online library housing a vast collection of learning materials, exclusive networking opportunities with like-minded peers and cyber security experts, readily-available academic advisory and career counselling support, and so much more!
                    </p>
                    <Button
                        className=' w-fit h-full bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer flex items-center justify-center gap-2'
                        onClick={() => { alert("Inquiry Initiated!"); }}
                    >
                        Discover the ECCU Advantage
                        <MoveRight />
                    </Button>
                </div>
                <div className="w-full flex justify-center py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {programData.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default WhyUs