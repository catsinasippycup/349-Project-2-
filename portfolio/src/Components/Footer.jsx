import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-slate-800 text-white p-4 mt-8'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div>
                    <p>© 2024 by cats. All rights reserved.</p> {/*Replace with your own*/}
                </div>
                <div className='flex space-x-4'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'> {/*Fill with your own links*/}
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-300'>{/*To add another link copy same a tag but change the link*/}
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
