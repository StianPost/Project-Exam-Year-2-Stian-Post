import { Router, useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header(): any {
  const router = useRouter();
  return (
    <header className='flex flex-col sm:justify-between sm:flex-row  py-4 px-4 items-center'>
      <div>
        <Link href='/'>
          <a>
            <Image
              src='/cabin_fever_logo.png'
              alt='Logo for cabinfever'
              width={100}
              height={80}
            />
          </a>
        </Link>
      </div>
      <div>
        <nav>
          <ul>
            <Link href='/'>
              <a className={router.pathname === '/' ? 'font-bold' : ''}>Home</a>
            </Link>
            <Link href='/Results'>
              <a
                className={
                  router.pathname === '/Results' ? 'font-bold pl-2' : 'pl-2'
                }
              >
                Cabins
              </a>
            </Link>
            <Link href='/Contact'>
              <a
                className={
                  router.pathname === '/Contact' ? 'font-bold pl-2' : 'pl-2'
                }
              >
                Contact
              </a>
            </Link>
            <Link href='/Admin'>
              <a
                className={
                  router.pathname === '/Admin' ? 'font-bold pl-2' : 'pl-2'
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
