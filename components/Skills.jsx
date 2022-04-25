import React from 'react';
import Image from 'next/image'
import HTML from '../public/html.png';
import CSS from '../public/css.png';
import JavaScript from '../public/javascript.png';
import ReactImg from '../public/react.png';
import Node from '../public/node.png';
import GitHub from '../public/github.png';
import Tailwind from '../public/tailwind.png';
import Mongo from '../public/mongo.png';
// import FireBase from '../public/firebase.png';
// import AWS from '../public/aws.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full pt-[480px] pb-[480px] sm:pt-0 sm:pb-0 h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>&#x2f;&#x2f; These are the technologies I’ve worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={HTML} alt="HTMl" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={CSS} alt="CSS" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={Tailwind} alt="TAILWINDCSS" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>TAILWINDCSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={JavaScript} alt="JAVASCRIPT" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={ReactImg} alt="REACT" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={GitHub} alt="GITHUB" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={Node} alt="NODE" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <Image src={Mongo} alt="MONGO" className='mx-auto' width={100} height={100} />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' width={100} height={100} src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;