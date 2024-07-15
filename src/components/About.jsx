import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import HeroImage from '../assets/heroImage.png';
import ResumeImage from '../assets/certificate/Odlanyer Nobela.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAndroid, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiFigma, SiNextdotjs } from 'react-icons/si';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const modalContentHeight = windowHeight * 0.8;
      const imageAspectRatio = 16 / 10;
      const maxWidth = modalContentHeight * imageAspectRatio;
      setModalHeight(modalContentHeight);
      
      // Check if image exceeds viewport height when zoomed in
      setIsOverflowing(modalContentHeight < ResumeImage.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false); // Reset zoom state when modal is closed
  };
  const techs = [
    { id: 1, icon: <FaHtml5 size={55} />, glow: 'rgba(255, 0, 0, 0.7)' },
    { id: 2, icon: <FaCss3Alt size={55} />, glow: 'rgba(0, 0, 255, 0.7)' },
    { id: 3, icon: <FaJs size={55} />, glow: 'rgba(255, 255, 0, 0.7)' },
    { id: 4, icon: <SiTailwindcss size={55} />, glow: 'rgba(0, 128, 255, 0.7)' },
    { id: 5, icon: <FaReact size={55} />, glow: 'rgba(0, 0, 139, 0.7)' },
    { id: 6, icon: <FaAndroid size={55} />, glow: 'rgba(0, 255, 0, 0.7)' },
    { id: 7, icon: <SiFlask size={55} />, glow: 'rgba(217, 217, 217, 0.7)' },
    { id: 8, icon: <SiFigma size={55} />, glow: 'rgba(255, 99, 71, 0.7)' },
    { id: 9, icon: <SiNextdotjs size={55} />, glow: 'rgba(255, 255, 255, 0.7)' },
    { id: 10, icon: <FaGitAlt size={55} />, glow: 'rgba(255, 165, 0, 0.7)' },
  ];

  return (
    <div id='about' className="bg-gradient-to-b from-black via-black to-black w-full text-white flex flex-col items-center justify-center pt-16">
      <style>
        {`
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            margin: 1rem 0;
            border-radius: 0.3rem;
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 198, 255, 0.4);
          }

          .button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 30px rgba(0, 198, 255, 0.6);
            background: linear-gradient(45deg, #0072ff, #00c6ff);
          }
          .icon {
            transition: transform 0.3s ease;
          }

          .button:hover .icon {
            transform: translateX(10px);
          }

          .glowing-text {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.3), 0 0 6px #00c6ff, 0 0 35px #00c6ff;
          }

          .tech-card {
            width: 90px;
            height: 90px;
            margin: 5px;
            padding: 5px;
            box-sizing: border-box; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }          

          .tech-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit;
            z-index: -1;
            transition: opacity 0.3s ease;
            opacity: 0.65;
          }

          .tech-card:hover::before {
            opacity: 0;
          }

          .tech-card:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px var(--glow-color), 0 0 30px var(--glow-color), 0 0 40px var(--glow-color);
          }
          .modal-container {
            max-height: ${modalHeight}px;
            width: 90%;
          }

         .modal-image {
            max-width: 100%;
            max-height: ${isZoomed ? '100%' : modalHeight + 'px'};
            cursor: ${isZoomed ? 'zoom-out' : 'zoom-in'};
            transition: max-height 0.3s ease;
            margin: auto;
            display: block;
          }
        `}
      </style>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col items-center justify-center'>
        <div className="w-full flex flex-col md:flex-row items-center justify-center mb-16">
          <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="product-card w-[300px] shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-gray-800 flex flex-col items-center justify-center gap-3">
              <div className="absolute -left-[40%] top-0">
                <div className="flex gap-1"></div>
              </div>
              <div className="absolute rounded-full bg-white left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2"></div>
              <div className="para uppercase text-center leading-none ">
                <p className="text-gray-800 font-semibold text-xs font-serif">_</p>
                <p className="font-bold text-xl tracking-wider text-gray-800">_</p>
              </div>
              <div className="w-[180px] aspect-square bg-gray-100 z-10 rounded-md">
                <img src={HeroImage} alt="Profile Image" className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
                <div className="flex flex-col items-start gap-1">
                  <div className="inline-flex gap-3 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                    </svg>
                    <p className="font-semibold text-xs text-black">Odlanyer L. Nobela</p>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="inline-flex gap-3 items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                        
                      </svg>   
                      <p className="font-semibold text-xs text-black">nobelaodlanyer@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:justify-start text-center md:text-left">
            <div className="text-center md:text-left cursor-pointer">
              <p className="text-4xl sm:text-5xl font-bold text-white">HELLO, I'M</p>
              <p className="text-4xl sm:text-5xl font-bold text-white mt-3">ODLANYER L. NOBELA</p>
              <h2 className="text-4xl sm:text-3xl font-bold text-white mt-3 glowing-text">
                <TypeAnimation
                  sequence={['DEVELOPER', 2000, 'DESIGNER', 2000, 'PROGRAMMER', 2000]}
                  speed={200}
                  repeat={Infinity}
                />
              </h2>
              <p className='text-xl mb-6 mt-3 text-white'>
              Creative Web Developer/Designer with a flair for transforming ideas into visually captivating 
              and functional digital experiences. My passion lies in merging innovative design with seamless usability, 
              ensuring each project meets user expectations. Every code and design choice is made 
              with the intention of crafting user-centered websites.
              </p>
              <div className="mt-4">
                <div className="button" onClick={() => setIsModalOpen(true)}>
                  View Resume
                  <span className="icon ml-1">
                    <MdOutlineKeyboardArrowRight size={30} />
                  </span>
                  </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col justify-center items-center">
      <div className="pb-8">
        <p className="text-2xl font-bold">Tech Stack</p>
      </div>
      <div className="w-full flex flex-wrap justify-center py-8">
        {techs.map(({ id, icon, glow }) => (
          <div
            key={id}
            className="group transform transition duration-300 ease-in-out overflow-hidden text-white tech-card pt-4"
            style={{ '--glow-color': glow }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 shadow-2xl transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col justify-center items-center p-4">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[10000]"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded shadow-lg text-black max-w-lg w-full modal-container"
            style={{ zIndex: 51 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1" onClick={closeModal}>X</button>
            <img
              src={ResumeImage}
              alt="Resume"
              className="modal-image"
              style={{ maxHeight: isZoomed ? '100%' : modalHeight + 'px', cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
              onClick={toggleZoom}
            />
            {isOverflowing && <div className="absolute inset-x-0 bottom-2 text-center text-white">Scroll to view full image</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;