import { ReactElement, ReactNode } from 'react';
import styles from './header-icon.module.css';
 
export function HeaderIcon({Icon, title} ) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-12 hover:text-red">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" /> 
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>

    </div>
  );
}

export default HeaderIcon;
