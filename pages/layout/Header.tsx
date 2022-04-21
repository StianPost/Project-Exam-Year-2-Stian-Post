import { Router, useRouter } from 'next/router';

import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header(): any {
  const router = useRouter();
  return (
    <header className='flex flex-col sm:justify-between sm:flex-row  py-4 px-10 items-center'>
      <div>
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
        <nav className='text-xl '>
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
