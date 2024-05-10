import React from 'react';

export default function About() { 
    return (
        <>
            <div id="about" className='bg-slate-700 m-20 max-w-full'>  {/* Set the container a color and max width name it about for the navbar to use */}
                <div className='flex justify-end'>  {/* Align the container to the end (right) of the parent */}
                    <div className='flex flex-col items-start m-10'>  {/* Keep items aligned to start */}
                        <h1 className='text-4xl text-white mb-2'>About me</h1>
                        <p className='text-xl text-white'> {/* Replace with your text */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
