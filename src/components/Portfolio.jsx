import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import blaze from '../assets/portfolio/blazors.png';
import ecomob from '../assets/portfolio/ecomob.png';
import blood from '../assets/portfolio/bloodseeker.jpg';
import libraryManage from '../assets/portfolio/ws.png';
import reactEco from '../assets/portfolio/EcoTaskReward.png';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const projects = [
    { id: 1, src: blaze, siteUrl: '', codeUrl: 'https://github.com/Kent-Vincent/ADV104_Project', title: 'Online Book Management', description: 'Developed online book management using blazor, C#, HTML, and SQL.' },
    { id: 2, src: ecomob, siteUrl: '', codeUrl: 'https://github.com/Lanyer05/Capstone1/tree/UPDATED_NEW', title: 'EcoTaskReward (Mobile)', description: 'Developed a mobile app for LGUs environmental task with rewards using Android Studio and Firebase.' },
    { id: 3, src: blood, siteUrl: '', codeUrl: 'a', title: 'BloodSeeker', description: 'BloodSeeker a mobile app that helps users to find blood donator and people needs a donator by matching blood type using Android Studio and Firebase.' },
    { id: 4, src: libraryManage, siteUrl: 'https://librarymanagementws.vercel.app', codeUrl: 'https://github.com/Lanyer05/wsproject', title: 'Online Library', description: 'Developed a Online library that can read, insert, update and delete book using Nextjs, tailwindcss, and Firebase.' },
    { id: 5, src: reactEco, siteUrl: 'https://ecotaskreward.vercel.app/home', codeUrl: 'https://github.com/Lanyer05/reactjs-web-capstone', title: 'EcoTaskReward (Web Admin)', description: 'Developed a web admin management for managing LGUs environmental task with CCTV integration with points and rewards creation.' },
  ];

  const handleSiteClick = (siteUrl) => {
    if (!siteUrl) {
      setModalMessage('This project is not uploaded yet on the internet.');
      setModalOpen(true);
    }
  };

  return (
    <div name="project" className="bg-black w-full h-full text-white py-16">
      <div className="max-w-screen-xl p-4 mx-auto flex-col md:flex-row justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">Project</p>
          <p className="py-6">Check out some of my projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, src, siteUrl, codeUrl, title, description }) => (
            <div key={id} className="relative flex flex-col bg-gray-800 shadow-2xl bg-clip-border text-white mt-6 transition-transform hover:scale-105">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={src} alt="Project" className="absolute inset-0 w-full h-full object-cover rounded-xl" onDragStart={(e) => e.preventDefault()} />
              </div>
              <div className="p-4">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{description}</p>
              </div>
              <div className="p-6 pt-0 flex justify-between gap-2">
                {siteUrl ? (
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center select-none rounded-sm bg-blue-500 py-2 px-8 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaLink className="mr-1" /> Live Demo
                  </a>
                ) : (
                  <button
                    onClick={() => handleSiteClick(siteUrl)}
                    className="flex items-center select-none rounded-sm bg-blue-500 py-2 px-8 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <FaLink className="mr-1" /> Live Demo
                  </button>
                )}
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center select-none rounded-sm bg-green-600 py-3 px-10 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <FaGithub className="mr-1" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 text-black">
            <p>{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 flex items-center select-none rounded-sm bg-blue-500 py-2 px-4 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
