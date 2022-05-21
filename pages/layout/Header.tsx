import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../../components/Login';
import { parseCookies } from 'nookies';

function Header(): any {
  const [menuActive, setMenuState] = useState(false);
  const router = useRouter();

  const toggleMenu = (): void => {
    setMenuState(!menuActive);
  };
  const jwt = parseCookies().jwt;

  return (
    <header className='flex flex-col sm:justify-between sm:flex-row py-12  sm:py-4 px-10 items-center relative'>
      <div>
        {/* <div className='hidden sm:block'>
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
        </div> */}
        <div
          className={`fixed w-full z-20 left-0 top-0 p-2 sm:hidden ${
            menuActive ? 'bg-secondary' : 'bg-white'
          }`}
        >
          <div className='flex justify-between items-center'>
            <Link href='/'>
              <a>
                <Image
                  src='/cabin_fever_logo.png'
                  alt='Logo for cabinfever'
                  width={80}
                  height={60}
                />
              </a>
            </Link>
            <Icon
              className='text-5xl text-primary'
              icon='charm:menu-hamburger'
              onClick={() => {
                toggleMenu();
              }}
            />
          </div>
        </div>
      </div>
      <MobileNav
        jwt={jwt}
        menuActive={menuActive}
        toggleMenu={() => {
          toggleMenu();
        }}
      />
      <DesktopNav jwt={jwt} />
    </header>
  );
}

export default Header;

function DesktopNav({ jwt }: { jwt: string }) {
  const router = useRouter();
  return (
    <nav className='hidden text-xl sm:block'>
      <ul className='flex'>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : 'inActive'}>
            Home
          </a>
        </Link>
        <Link href='/cabins'>
          <a
            className={
              router.pathname === '/cabins' ? 'active ml-10' : 'inActive ml-10'
            }
          >
            Cabins
          </a>
        </Link>
        <Link href='/Contact'>
          <a
            className={
              router.pathname === '/Contact' ? 'active ml-10' : 'inActive ml-10'
            }
          >
            Contact
          </a>
        </Link>
        {jwt ? (
          <Link href='/Admin'>
            <a
              className={
                router.pathname === '/Admin' ? 'active ml-10' : 'inActive ml-10'
              }
            >
              Admin
            </a>
          </Link>
        ) : (
          <div className='ml-10 text-primary hover:font-bold'>
            <Login />
          </div>
        )}
      </ul>
    </nav>
  );
}

function MobileNav({
  jwt,
  menuActive,
  toggleMenu,
}: {
  jwt: string;
  menuActive: boolean;
  toggleMenu: any;
}) {
  const router = useRouter();
  return (
    <div
      className={`bg-secondary z-10 fixed w-full h-screen top-0 left-0 ${
        menuActive ? '' : 'hidden'
      }`}
    >
      <div className='h-full py-24'>
        <ul className='flex flex-col h-full text-primary items-center justify-evenly text-2xl'>
          <Link href='/'>
            <a
              className={
                router.pathname === '/' ? 'font-bold' : 'hover:font-bold'
              }
              onClick={toggleMenu}
            >
              Home
            </a>
          </Link>
          <Link href='/cabins'>
            <a
              className={
                router.pathname === '/cabins' ? 'font-bold' : 'hover:font-bold'
              }
              onClick={toggleMenu}
            >
              Cabins
            </a>
          </Link>
          <Link href='/Contact'>
            <a
              className={
                router.pathname === '/Contact' ? 'font-bold' : 'hover:font-bold'
              }
              onClick={toggleMenu}
            >
              Contact
            </a>
          </Link>
          {jwt ? (
            <Link href='/Admin'>
              <a
                className={
                  router.pathname === '/Admin' ? 'font-bold' : 'hover:font-bold'
                }
                onClick={toggleMenu}
              >
                Admin
              </a>
            </Link>
          ) : (
            <Login />
          )}
        </ul>
      </div>
    </div>
  );
}

export function NewNav() {
  const [mobileNav, setMobileNav] = useState(false);
  function toggleMobile() {
    setMobileNav(!mobileNav);
  }

  return (
    <div>
      <header className='px-4 py-4 border-t-2 flex justify-between items-center'>
        <div className='w-20'>
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
        <div>
          <Icon
            className='text-5xl text-primary sm:hidden'
            icon='charm:menu-hamburger'
            onClick={() => {
              toggleMobile();
            }}
          />
        </div>
      </header>
      <NewMobileNav
        open={mobileNav}
        close={() => {
          toggleMobile();
        }}
      />
    </div>
  );
}

function NewMobileNav({ open, close }: { open: boolean; close: any }) {
  if (!open) return null;
  return (
    <div>
      <p>Mobile</p>
    </div>
  );
}

{
  /* <button
onClick={() => {
  close();
}}
>
Close Mobile
</button> */
}
