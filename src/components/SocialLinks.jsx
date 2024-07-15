import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github<FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Lanyer05',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Facebook<FaFacebook size={30} />
        </>
      ),
      href: 'https://www.facebook.com/odlanyer.nobela.1',
    },
    {
      id: 3,
      child: (
        <>
          Gmail<HiOutlineMail size={30} />
        </>
      ),
      href: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nobelaodlanyer@gmail.com',
      style: 'rounded-br-md',
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed duration-300'>
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-white ml-[-100px] hover:ml-[-10px] duration-300 transition` + '' + style}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-black duration-300'
              target='_blank'
              rel='noreferrer' 
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
