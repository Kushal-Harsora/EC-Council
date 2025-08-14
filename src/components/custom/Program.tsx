'use client'

import React from 'react';
import { Button } from '../ui/button';
import { easeInOut, motion } from 'motion/react';
import { CircleChevronUp, MoveRight } from 'lucide-react';

const cardVariants = {
  initial: { y: '75%' },
  hover: {
    y: 0,
    transition: {
      duration: 0.35,
      ease: easeInOut,
    }
  }
};

const Card = ({ title, description, image }: { title: string, description: string, image: string }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleMobileToggle = () => {
    if (window.innerWidth <= 768) {
      setIsHovered(prev => !prev);
    }
  };

  return (
    <motion.div
      className="relative bg-cover bg-center w-[325px] h-[375px] max-md:w-full aspect-square group rounded-xl shadow overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      whileHover="hover"
    >
      <motion.div
        variants={cardVariants}
        className="absolute bottom-0 w-full h-full backdrop-blur-lg bg-black/20 z-10"
      >
        <div className="p-4 w-full h-[25%] text-white">
          <h3 className="text-2xl flex flex-row justify-between items-center font-semibold">
            {title}
            <CircleChevronUp
              className={`md:hidden w-[32px] aspect-square cursor-pointer transform transition-transform duration-300 ${isHovered ? 'rotate-180' : ''
                }`}
              onClick={handleMobileToggle}
            />
          </h3>
        </div>
        <p className="text-base text-wrap text-justify max-h-[225px] overflow-hidden text-white px-4">
          {description}
        </p>
        <div className="w-full max-w-[325px] max-h-[75px] h-full flex items-center justify-start px-4">
          <Button
            className="w-fit h-fit text-[#9B1C31] hover:text-white bg-white hover:bg-[#9B1C31] py-4 cursor-pointer flex items-center justify-center gap-0.5"
            onClick={() => {
              alert('Inquiry Initiated!');
            }}
          >
            Inquire Now
            <MoveRight />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};


const Program = () => {
  const programData1 = [
    {
      title: 'Program 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p1.png',
    },
    {
      title: 'Program 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p2.png',
    },
  ];

  const programData2 = [
    {
      title: 'Program 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p3.png',
    },
    {
      title: 'Program 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p4.png',
    },
    {
      title: 'Program 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p5.png',
    },
    {
      title: 'Program 6',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique, nihil provident consequuntur quam esse explicabo atque architecto voluptatibus, soluta distinctio iusto reiciendis, at rerum deserunt maiores natus quibusdam praesentium? Libero saepe adipisci quaerat, qui dolore.',
      image: '/assets/p6.png',
    },
  ];

  return (
    <div className="w-screen h-fit bg-white px-6 py-12 flex flex-col items-center justify-center gap-6">
      <div className='h-full max-md:h-fit grid md:grid-cols-2 px-4'>
        <div className=' w-full h-full flex flex-col items-start justify-start gap-4 max-md:py-4'>
          <h1 className="w-full text-4xl max-md:text-2xl font-bold text-left">
            Choose the Program that matches your ambitions
          </h1>
          <p className=" text-base text-wrap text-justify">
            Find the best program that suits your needs and goals. Browse through
            our wide variety of offerings below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 max-md:grid-rows-2 max-md:gap-4 items-center justify-center w-full h-full">
          {programData1.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-4 max-md:grid-rows-4 max-md:gap-4 items-center justify-center w-full h-full px-4">
        {programData2.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Program