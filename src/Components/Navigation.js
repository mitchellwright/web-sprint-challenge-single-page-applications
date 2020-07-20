import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {

    return (
        <>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#" aria-label="Home">
                        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo" />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                    <NavLink
                        to={'/'}
                        className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                        activeClassName="text-gray-900"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={'/pizza'}
                        className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                        activeClassName="text-gray-900"
                    >
                        Pizza
                    </NavLink>
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                    <span className="inline-flex rounded-md shadow">
                        <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out">
                        Log in
                        </a>
                    </span>
                </div>
            </nav>
        </div>
        </>
    );
};

export default Navigation;