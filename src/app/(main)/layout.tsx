import InfoBar from '@/components/infobar';
import Sidebar from '@/components/sidebar';
import { Info } from 'lucide-react';
import React from 'react';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className='relative flex h-screen overflow-hidden'>
      <Sidebar />
      <div className='w-full'>
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
