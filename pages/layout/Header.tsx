import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';

function Header(): any {
  const [menuActive, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuActive);
  };
  const router = useRouter();
  return (
    <header className='flex flex-col sm:justify-between sm:flex-row py-14  sm:py-4 px-10 items-center relative'>
      <div>
        <div className='hidden sm:block'>
          <Link href='/'>
            <a className='flex flex-col'>
              <Image
                src='/cabin_fever_logo.png'
                alt='Logo for cabinfever'
                width={100}
                height={80}
              />
              <span className='hidden mt-2 text-orange-400 logoText font-medium sm:block'>
                Cabinfeever
              </span>
            </a>
          </Link>
        </div>
        <div className='fixed w-full flex justify-center z-20 left-0 top-4 sm:hidden'>
          <div>
            <Image
              src='/cabin_fever_logo.png'
              alt='Logo for cabinfever'
              width={100}
              height={80}
              onClick={() => {
                toggleMenu();
              }}
            />
          </div>
        </div>
        <div
          className={`bg-secondary z-10 fixed w-full h-screen top-0 left-0 ${
            menuActive ? '' : 'hidden'
          }`}
        >
          <div className='h-full pt-28'>
            <ul className='flex flex-col h-full text-primary items-center justify-evenly text-2xl'>
              <Link href='/'>
                <a
                  className={
                    router.pathname === '/' ? 'font-bold' : 'hover:font-bold'
                  }
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Home
                </a>
              </Link>
              <Link href='/Results'>
                <a
                  className={
                    router.pathname === '/Results'
                      ? 'font-bold'
                      : 'hover:font-bold'
                  }
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Cabins
                </a>
              </Link>
              <Link href='/Contact'>
                <a
                  className={
                    router.pathname === '/Contact'
                      ? 'font-bold'
                      : 'hover:font-bold'
                  }
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Contact
                </a>
              </Link>
              <Link href='/Admin'>
                <a
                  className={
                    router.pathname === '/Admin'
                      ? 'font-bold'
                      : 'hover:font-bold'
                  }
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Admin
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <nav className='hidden text-xl sm:block'>
          <ul>
            <Link href='/'>
              <a className={router.pathname === '/' ? 'active' : 'inActive'}>
                Home
              </a>
            </Link>
            <Link href='/Results'>
              <a
                className={
                  router.pathname === '/Results'
                    ? 'active ml-10'
                    : 'inActive ml-10'
                }
              >
                Cabins
              </a>
            </Link>
            <Link href='/Contact'>
              <a
                className={
                  router.pathname === '/Contact'
                    ? 'active ml-10'
                    : 'inActive ml-10'
                }
              >
                Contact
              </a>
            </Link>
            <Link href='/Admin'>
              <a
                className={
                  router.pathname === '/Admin'
                    ? 'active ml-10'
                    : 'inActive ml-10'
                }
              >
                Admin
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
