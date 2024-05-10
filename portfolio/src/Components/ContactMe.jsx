import React from 'react';

export default function ContactMe() {
    return (
        <div id="contact" className='bg-slate-700 p-10 m-20 max-w-lg mx-auto rounded-lg'> {/* Set the container a color and max width name it about for the navbar to use */}
            <h1 className='text-4xl text-white mb-6 text-center'>Contact Me</h1>
            <div className='text-center'>
                <a href="mailto:your.email@example.com"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'> {/*Replace with your email*/}
                    Email
                </a>
            </div>
        </div>
    );
}
