//import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import LiftedLogo from '../../public/images/logo-symbolic-main-512.png';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <p className='text-center text-base text-gray-400'>
          {footerData.followMessage}
        </p>
        <div className='mt-2 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center  text-lg text-gray-600'>
          {footerData.message} <br />
          <a
            href={footerData.callToActionURL}
            className='text-liftedgreen-700 hover:text-liftedgreen-800'
          >
            {footerData.callToActionMessage} <br />
            <Image
              src={LiftedLogo}
              height={60}
              width={60}
              alt={`LiftedWP - Headless Commerce & CMS Experts.`}
            />
          </a>
        </p>
      </div>
    </footer>
  );
}
