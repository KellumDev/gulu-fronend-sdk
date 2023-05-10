

import requests from '../../utils/requests';
import styles from './nav.module.css';
import { useRouter } from 'next/router';
/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {

  const router = useRouter(); 

  return (
    <nav className="relative" >
     
     <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-2 overflow-x-scroll scrollbar-hide text-2xl">
      { 
       Object.entries(requests).map(([key,{title, url}]) => (
        <h2 
        onClick={()=> router.push(`/?genre=${key}`)}
        className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active active:text-red-500"
        key={key}>{title}</h2>
       ))
      }
     </div>
     <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" /> 
    </nav>
  );
}

export default Nav;
