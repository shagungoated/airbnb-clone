import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuth } from '../../../hooks';
import SearchBar from './SearchBar';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export const Header = () => {
  const auth = useAuth();
  const location = useLocation();

  const [showSearchBar, setShowSearchBar] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const { user } = auth;

  const handleScroll = () => {
    const shouldHaveShadow = window.scrollY > 0;
    setHasShadow(shouldHaveShadow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // hide searchbar based on url
        // hide searchbar based on url
        if (location.pathname === '/') {
            setShowSearchBar(true);
          } else {
            setShowSearchBar(false);
          }
      
          // clean up the event listener when the component is unmounted
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [location]);
      
        return (
          <header
            className={`fixed top-0 z-10 flex w-screen justify-center bg-white py-4 ${
              hasShadow ? 'shadow-md' : ''
            }`}
          >
            <div
              className={`flex ${
                showSearchBar ? 'justify-around' : 'justify-between px-10'
              } w-screen max-w-screen-xl`}
            >
                        <a href="/" className="flex items-center gap-1">
          <img
            className="h-8 w-8 md:h-10 md:w-10"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
            alt=""
          />

          <span className="hidden text-2xl font-bold text-red-500 md:block">
            airbnb
          </span>
        </a>

        {showSearchBar && <SearchBar />}

        <Link
          to={user ? '/account' : '/login'}
          className="w-50 flex h-full items-center gap-2 rounded-full border-gray-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-6 w-6 md:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
  
            <div className="z-10 h-[35px] w-[35px] overflow-hidden rounded-full">
              {user ? (
                <Avatar>
                  {user?.picture ? (
                    <AvatarImage src={user.picture} className="h-full w-full" />
                  ) : (
                    <AvatarImage
                      src="https://res.cloudinary.com/rahul4019/image/upload/v1695133"
                      className="h-full w-full"
                    />
                  )}
                </Avatar>
              ) : (
                <svg
                  fill="#858080"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="796 796 200 200"
                  enableBackground="new 796 796 200 200"
                  xmlSpace="preserve"
                  stroke="#858080"
                  className="h-8 w-8"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,100-44.859,100-100C996,840.86,951.141,796,896,796z M896,951.141c-30.928,0-55.999-25.071-55.999-56c0-30.928,25.071-55.999,55.999-55.999c30.929,0,56,25.071,56,55.999C952,926.07,926.929,951.141,896,951.141z" />
                  </g>
                </svg>
              )}
            </div>
          </Link>
        </div>
        <br className='border border-gray-600'/>
        </header>
        );
