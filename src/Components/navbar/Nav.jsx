import React, { useContext, useEffect, useRef, useState } from 'react';
import light_logo from "../../assets/light_logo.svg";
import dark_logo from "../../assets/DarkLogo.svg";
import FlyOutLink from './FlyOutLink';
import DropdownContent from './DropdownContent';
import Navbtns from './Navbtns';
import { ThemeContext } from '../../Context/ThemeContext';

function Nav() {
    const { isdarkMode } = useContext(ThemeContext);
    const [isNavOpen, setisNavOpen] = useState(false); // for the nav
    const [DropDownopen, setDropDownOpen] = useState(null); // for the responsive dropdowns

    const navRef = useRef();
    const toggleButtonRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                isNavOpen &&
                navRef.current && 
                !navRef.current.contains(event.target) && 
                !toggleButtonRef.current.contains(event.target)
            ) {
                setisNavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isNavOpen]);

    return (
        <nav className='flex items-center justify-between min-h-16 shadow-lg fixed top-0 left-0 z-50 w-full bg-white lg:px-20 md:px-14 px-8 py-2 dark:bg-black dark:text-white'>
            <div className='flex gap-4 items-center'>
                {/* Ref added to the toggle button */}
                <button 
                    area-label="openNav"
                    title="openNav"
                    ref={toggleButtonRef}
                    className='inline-block lg:hidden'
                    onClick={() => setisNavOpen(!isNavOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-4 fill-black dark:fill-white'>
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <div className='flex gap-2'>
                    <img src={isdarkMode ? dark_logo : light_logo} className='' alt='webLogo' />
                    <h1 className='md:text-xl text-lg font-bold '>Jupiter</h1>
                </div>
            </div>

            <div
                ref={navRef}
                className={`lg:p-0 p-3 lg:flex lg:flex-row  flex-col  shrink-0  ${!isNavOpen ? "-translate-x-full" : "translate-x-0"} lg:translate-x-0 transition-all lg:transition-none gap-4 lg:flex-1  lg:ml-10 lg:static fixed top-16 left-0 lg:h-auto h-[calc(100vh_-_4rem)] lg:bg-transparent bg-white dark:bg-black  w-3/4 sm:w-96 lg:w-auto lg:border-none border-r border-stone-50 dark:border-stone-900`}
            >
                <FlyOutLink href={'#'} FlyOutContent={DropdownContent} index={0} drop={setDropDownOpen} dropped={DropDownopen} closeNav={setisNavOpen}>
                    Getting started
                </FlyOutLink>
                <FlyOutLink href={'#'} FlyOutContent={DropdownContent} index={1} drop={setDropDownOpen} dropped={DropDownopen} closeNav={setisNavOpen}>
                    Components
                </FlyOutLink>
                <FlyOutLink href={'#'} FlyOutContent={DropdownContent} index={2} drop={setDropDownOpen} dropped={DropDownopen} closeNav={setisNavOpen}>
                    Documentation
                </FlyOutLink>
            </div>
            <Navbtns />
        </nav>
    );
}

export default Nav;
