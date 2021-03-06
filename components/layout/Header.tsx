import Login, { LoginModal } from '../Login';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';

function Header(): any {
  const [menuActive, setMenuState] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const toggleMenu = (): void => {
    setMenuState(!menuActive);
  };
  const jwt = parseCookies().jwt;

  return (
    <>
      <header className='flex flex-col sm:justify-between sm:flex-row py-12  sm:py-4 px-10 items-center relative'>
        <div className=''>
          {/* Desktop Logo */}
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
          {/* Mobile Logo / Icon */}
          <div
            className={`fixed w-full z-20 left-0 top-0 p-2 sm:hidden ${
              menuActive ? 'bg-secondary' : 'bg-white'
            }`}>
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
          toggleLogin={() => {
            setToggleLogin(true);
          }}
        />
        <DesktopNav
          toggleLogin={() => {
            setToggleLogin(true);
          }}
          jwt={jwt}
        />
      </header>
      {toggleLogin ? (
        <LoginModal
          toggleModal={() => {
            setToggleLogin(false);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default Header;

function DesktopNav({ jwt, toggleLogin }: { jwt: string; toggleLogin: any }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (jwt) setLoggedIn(true);
  }, [jwt]);

  const router = useRouter();
  return (
    <nav className='hidden text-xl w-96 sm:block'>
      <ul className='flex justify-between items-center'>
        <Link href='/'>
          <a
            className={`desktopNavA ${
              router.pathname === '/' ? 'active' : 'inActive'
            }`}>
            Home
          </a>
        </Link>
        <Link href='/cabins'>
          <a
            className={`desktopNavA ${
              router.pathname === '/cabins' ? 'active ' : 'inActive'
            }`}>
            Cabins
          </a>
        </Link>
        <Link href='/Contact'>
          <a
            className={`desktopNavA ${
              router.pathname === '/Contact' ? 'active' : 'inActive '
            }`}>
            Contact
          </a>
        </Link>
        {loggedIn ? (
          <Link href='/Admin'>
            <a
              className={`desktopNavA ${
                router.pathname === '/Admin' ? 'active ' : 'inActive'
              }`}>
              Admin
            </a>
          </Link>
        ) : (
          <div className='desktopNavA hover:active'>
            <Login toggleLogin={() => toggleLogin()} />
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
  toggleLogin,
}: {
  jwt: string;
  menuActive: boolean;
  toggleMenu: any;
  toggleLogin: any;
}) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (jwt) setLoggedIn(true);
  }, [jwt]);
  return (
    <div
      className={`bg-secondary z-10 fixed w-full h-screen top-0 left-0 ${
        menuActive ? '' : 'hidden'
      }`}>
      <div className='h-full py-24'>
        <ul className='flex flex-col h-full text-primary items-center justify-evenly text-2xl'>
          <Link href='/'>
            <a
              className={router.pathname === '/' ? 'active' : 'inActive'}
              onClick={toggleMenu}>
              Home
            </a>
          </Link>
          <Link href='/cabins'>
            <a
              className={router.pathname === '/cabins' ? 'active' : 'inActive'}
              onClick={toggleMenu}>
              Cabins
            </a>
          </Link>
          <Link href='/Contact'>
            <a
              className={router.pathname === '/Contact' ? 'active' : 'inActive'}
              onClick={toggleMenu}>
              Contact
            </a>
          </Link>
          {loggedIn ? (
            <Link href='/Admin'>
              <a
                className={router.pathname === '/Admin' ? 'active' : 'inActive'}
                onClick={toggleMenu}>
                Admin
              </a>
            </Link>
          ) : (
            <Login toggleLogin={() => toggleLogin()} />
          )}
        </ul>
      </div>
    </div>
  );
}
