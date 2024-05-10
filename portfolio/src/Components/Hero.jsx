import React, { useState } from 'react';
import { BsLinkedin, BsGithub, BsInfoCircleFill } from 'react-icons/bs';
import HeroPic from '../assets/me.jpg'; // Place a picture of you in assets folder

export default function Hero() {
    const [showResume, setShowResume] = useState(false); // State to control resume display

    const toggleResume = () => setShowResume(!showResume); // Function to toggle the resume display

    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>  {/*Make the section responsive with the settings in tailwind.config.js to different sizes*/}
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>Hey! my name is</p>
                <h1 className='text-6xl'>Lorem ipsum</h1>
                <p className='mt-10 text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
                <div className='flex mt-5 space-x-4 cursor-pointer'> {/*Replace link with your actual links */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" 
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'> {/*Tailwind CSS for effects of icons */}
                        <BsLinkedin size={40} /> 
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'> {/*Tailwind CSS for effects of icons */}
                        <BsGithub size={40} />
                    </a>
                    <button onClick={toggleResume}
                        className='transition duration-500 ease-in-out text-white hover:bg-slate-600 rounded-full'> {/*Tailwind CSS for effects of icons */}
                        <BsInfoCircleFill size={40} />
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroPic} alt="" width={200} height={200} className='rounded-2xl border-4 border-white'/>
            </div>
            <div className={`resume-viewer ${showResume ? 'open' : ''}`} aria-hidden={!showResume}>
                <iframe
                    src=""
                    frameborder="0"
                    style={{ width: '100%', height: '100%', border: 'none' }}>
                </iframe>
                <button onClick={toggleResume} style={{
                    position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'white',
                    backgroundColor: 'rgba(50, 50, 50, 0.8)', padding: '10px 15px', borderRadius: '10px',
                    cursor: 'pointer'
                }}>
                    Close
                </button>
            </div>

            <style jsx>{` // Styling for the resume window
                .resume-viewer {
                    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    width: 80%; height: 80%; background-color: rgba(0, 0, 0, 0.85); z-index: 1000;
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                    opacity: 0; visibility: hidden;
                }
                .resume-viewer.open {
                    opacity: 1; visibility: visible;
                }
            `}</style>
        </section>
    );
}
