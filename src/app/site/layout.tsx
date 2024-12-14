import React from 'react';
import Navigation from './_components/Navigation';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Navigation />
      {children}
    </div>
  );
}

export default layout;
