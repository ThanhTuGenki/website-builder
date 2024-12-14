'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

function Logo() {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ? (
        <Image src='/assets/logo-dark.png' alt='logo' width={60} height={100} />
      ) : (
        <Image src='/assets/logo-light.png' alt='logo' width={60} height={100} />
      )}
    </>
  );
}

export default Logo;
