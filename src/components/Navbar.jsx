import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { clsx } from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Events', path: '/events' },
        { name: 'Staff', path: '/staff' },
        { name: 'Shop', path: '/shop' },
        { name: 'Give', path: '/give' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
                            <img className="h-12 w-auto" src={logo} alt="Faith Foursquare Gospel Church" />
                            <span className="hidden md:block font-bold text-xl text-primary-green">Faith Foursquare</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-neutral-deepGray hover:text-primary-red transition-colors font-medium",
                                    location.pathname === link.path && "text-primary-red font-bold"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/connect"
                            className="bg-primary-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                        >
                            Connect
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-neutral-deepGray hover:text-primary-green focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium text-neutral-deepGray hover:text-primary-red hover:bg-gray-50",
                                    location.pathname === link.path && "text-primary-red bg-gray-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/connect"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 bg-primary-red text-white px-6 py-3 rounded-md font-bold hover:bg-red-700 transition-colors"
                        >
                            Connect
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
