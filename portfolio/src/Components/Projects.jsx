import React from 'react';

export default function Projects() {
    const projects = [     // Dummy data array for projects
        {
            id: 1,
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.google.com/'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'https://www.lipsum.com/'
        },
    ];

    return (
        <>
            <div id="projects" className='bg-slate-700 m-20 max-w-full'> {/* Set the container max width and name it about for the navbar to use */}
                <div className='grid justify-items-start m-10'>  {/* Adjust alignment to start */}
                    <h1 className='text-4xl text-white mt-10 mb-5'>Projects</h1>
                    {projects.map(project => ( // Map the projects to eachother 
                        <div key={project.id} className="mb-5 text-left w-full"> {/* Ensure all elements start from the same point */}
                            <h2 className='text-3xl text-white'>{project.title}</h2>
                            <p className='text-white'>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-300 hover:text-blue-500'>View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
