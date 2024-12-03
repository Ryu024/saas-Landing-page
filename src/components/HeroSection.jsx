import demoUrl from '../assets/demo.png'
import Tag from "./Tag"
import {Rocket} from "lucide-react";
import ShinyButton from './ShinyButton';
export default function HeroSection() {
    return <section className="hero-section text-center mt-28 flex flex-col">
        <Tag>
            <div className='flex items-center justify-center space-x-1 px-3 py-1'>
                <span className='text-xs'>Beta Version</span>
                <Rocket className='h-3 w-3'/>
            </div>
        </Tag>
        <h1 className="text-4xl text-black font-extrabold leading-[1.5] sm:text-6xl sm:leading">Launch Your Sass

            <br />
            <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">In minutes not in days</span>
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">Nexx is a online open source tool for developers who want to launch their ideas faster</h2>
        <div className="mt-5 max-w-fit flex mx-auto space-x-5">
            {/* <a className="rounded-full font-medium text-white bg-black px-4 py-2 max-w-fit mx-auto text-sm shadow-sm hover:ring-gray-400 hover:ring-2 ">
                Get started
                </a> */}
                <ShinyButton />
            <a className=" ml-4 border rounded-full font-medium text-black bg-white border-gray-400 px-4 py-2 max-w-fit mx-auto text-sm shadow-sm hover:ring-gray-400 hover:ring-2">
                Learn More
            </a>
        </div>

        <div className='mt-3 items-center justify-center flex'>
            <img
            src={demoUrl}
             alt="image"
              className='mx-auto max-h-[450px] lg:max-h-[600px] md:max-h-[550px]'
              />
        </div>
    </section>
}
