import React from 'react';

export default function Experience() { // Example data for experience entries
    const experiences = [
        {
            id: 1,
            title: 'Software Engineer',
            company: 'ABC Technologies',
            period: 'Sep 2022 - Aug 2023',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            ]
        },
        {
            id: 2,
            title: 'Project Manager',
            company: 'Lab Corp',
            period: 'May 2019 - Aug 2022',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            ]
        }
    ];

    return (
        <>
            <div id ="experience" className='flex items-center justify-center h-screen'> {/* Set the container max width and name it about for the navbar to use */}
                <div className='bg-slate-700 p-20 max-w-4xl rounded-lg shadow-lg'> {/* Tailwind CSS  */}
                    <h1 className='text-4xl text-white text-center mb-10'>Experience</h1>
                    {experiences.map((exp) => ( // Map the experiences to each other in this case title with company
                        <div key={exp.id} className="mt-5">
                            <h2 className='text-3xl text-white'>{exp.title} at {exp.company}</h2>
                            <p className='text-white'>{exp.period}</p>
                            <ul className='list-disc list-inside text-white'>
                                {exp.details.map((detail, index) => ( // Map the details and index together
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
