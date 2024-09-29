import React, { useContext } from 'react'
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../Context/ThemeContext';

function Reviews() {
    
  const {isdarkMode} = useContext(ThemeContext);
  const profile1 = <svg xmlns="http://www.w3.org/2000/svg" className='size-10 border-2 border-black p-1 rounded-full dark:fill-white dark:border-white' viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>

  const reviews = [
    {
      name: "Fabrizio Fernandez",
      icon: profile1,
      tag: "@fab3304",
      text: "Testing out @jupiter's responsive design. That’s the template we’ve all been waiting for. My mobile-first heart is doing a happy dance.",
    },
    {
      name: "Felix Beaumont ",
      icon: profile1,
      tag: "@felixbs",
      text: "Digging into @jupiter. Those shadows are giving me serious design envy.",
    },
    {
      name: "Olivia Blackwood",
      icon: profile1,
      tag: "@olivia1992",
      text: "@jupiter is not messing around with its component library game.",
    },
    {
      name: "Zara Qadir",
      icon: profile1,
      tag: "@fab3304",
      text: "Playing around with @jupiter suddenly made me feeling inspired to launch that side project.",
    },
  ];

  return (
    <section className=' lg:p-20 md:p-14 sm:p-8 p-4 flex flex-col gap-16 bg-white dark:bg-black'>
    <div className=''>
         <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center dark:text-white'>Loved by designers and<br/>developers across the planet</h1>
         <p className='lg:text-xl md:text-base text-sm font-medium text-stone-600 text-center mt-8 dark:text-stone-500'>Here’s what people are saying about Jupiter</p>
    </div>
     <div className='flex flex-col gap-4'>
     <MarqueeComponent speed={50} isdarkMode={isdarkMode}>
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} icon={review.icon} tag={review.tag}>
            {review.text}
          </Review>
        ))}
      </MarqueeComponent>
      <MarqueeComponent speed={70} isdarkMode={isdarkMode}>
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} icon={review.icon} tag={review.tag}>
            {review.text}
          </Review>
        ))}
      </MarqueeComponent>
      <MarqueeComponent speed={90} isdarkMode={isdarkMode}>
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} icon={review.icon} tag={review.tag}>
            {review.text}
          </Review>
        ))}
      </MarqueeComponent>
     </div>
    </section>
  );
}

function MarqueeComponent({ children, speed,isdarkMode }) {
  return (
    <Marquee pauseOnHover={true} gradient={true} speed={speed} gradientColor={isdarkMode ? "black" : "white"}>
      {children}
    </Marquee>
  );
}

function Review({ children, name, icon, tag }) {
  return (
    <div className='w-96 h-36 border-2 border-stone-400 p-3 rounded-lg bg-neutral-50 ml-4 dark:bg-neutral-900 dark:border-neutral-600 '>
      <div className='flex gap-2 items-center'>
        {icon}
        <div className=''>
          <h1 className='font-semibold text-lg dark:text-white'>{name}</h1>
          <p className='text-stone-500'>{tag}</p>
        </div>
      </div>
      <p className='text-stone-500 overflow-hidden '>
        {children.split(" ").map((word, i) => {
          if (word[0] === "@") {
            return <span key={i} className='text-orange-400'>{word + " "}</span>;
          } else {
            return word + " ";
          }
        })}
      </p>
    </div>
  );
}

export default Reviews;