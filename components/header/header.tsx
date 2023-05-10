 
import Image from 'next/image';
import HeaderIcon from '../header-icon/header-icon';
import styles from './header.module.css';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"; 


/* eslint-disable-next-line */
/* 

Notes  
max-w-2xl - keeps the icons spacing restricted from spreading out to far on 
wide screens 

sm:flex-row - when hit the small break point then we want the column to turn to a row 


*/
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      
      <div className='flex flex-grow justify-evenly max-w-2xl'>
      <HeaderIcon title='HOME' Icon={HomeIcon} />
      <HeaderIcon title='TRENDING' Icon={LightningBoltIcon} />
      <HeaderIcon title='VERIFIED' Icon={BadgeCheckIcon} />
      <HeaderIcon title='COLLECTIONS' Icon={CollectionIcon} />
      <HeaderIcon title='SEARCH' Icon={SearchIcon} />
      <HeaderIcon title='ACCOUNT' Icon={UserIcon} /> 
      </div>
      <Image 
      className="object-contain"
        width={200}
        height={100}
        src='https://links.papareact.com/ua6' alt={'hulu-logo'}      />
    </header>
  );
}

export default Header;
