import React, { useState, useRef } from "react";
import Cart from "./cart";

export default function NavBar() {

    let [isCart, setisCart] = useState(false)

    const toggleCart = () => {
        setisCart(!isCart)
    }

    const [expanded, setExpanded] = useState(false);

    const [isInputVisible, setInputVisible] = useState(true);
    const inputRef = useRef(null);

    const handleIconClick = () => {
        setInputVisible(true); // Make input visible on icon click
        inputRef.current?.focus(); // Focus on the input field to show the cursor
    };

    return (
        <header className="bg-white lg:py-8 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-4 lg:px-8">
                {/* Desktop Navigation */}
                <nav className="relative flex items-center justify-between h-16  bg-white lg:rounded-md md:shadow-lg lg:shadow-lg md:h-20 lg:h-24 md:py-4 md:px-10 lg:px-8 lg:py-6">
                    <div className="flex-shrink-0">
                        <a href="#" title="Logo" className="flex text-3xl font-bold">
                            Exclusive
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setExpanded(!expanded)}
                        type="button"
                        className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md md:hidden lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        {expanded ? (
                            // Close Icon
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Menu Links */}
                    <div className="hidden md:px-4 md:flex md:items-center md:mx-auto md:space-x-5 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Home</a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Services</a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Contact</a>
                    </div>

                    {/* Sign Up / Sign In */}
                    {/* <div className="hidden lg:flex lg:items-center lg:space-x-10">
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Sign up</a>
                        <a href="#" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Sign in</a>
                    </div> */}

                    <div className="hidden ml-0 lg:ml-10 justify-between md:flex md:items-center md:-mr-1 lg:-mr-1 md:mr-auto lg:flex lg:items-center md:w-[270px] lg:w-[350px]">
                        <div className="flex justify-between items-center p-1 rounded-md gap-3 bg-gray-200">
                            <input type="text" ref={inputRef} style={{
                                opacity: isInputVisible ? 1 : 0,
                                visibility: isInputVisible ? "visible" : "hidden",
                                transition: "opacity 0.3s ease",
                            }} className="bg-gray-200 text-sm outline-none p-1 md:w-[160px] lg:w-[170px]" placeholder="What are you looking for?" />
                            <ion-icon className="text-2xl cursor-pointer" onClick={handleIconClick} name="search-outline"></ion-icon>
                        </div>
                        {/* <div className={`bg-black h-[100vh] w-[330px] fixed z-50 top-0 right-0 ${isCart ? "translate-x-0" : "-translate-x-full"}`}>
                            <Cart prop={{ isCart }} />
                        </div> */}

                        <div className="flex items-center justify-between p-1 md:w-[60px] lg:w-[80px]">
                            <ion-icon name="heart-outline" className="text-2xl cursor-pointer"></ion-icon>
                            <ion-icon onClick={toggleCart} name="cart-outline" className="text-2xl cursor-pointer"></ion-icon>

                        </div>

                    </div>

                </nav>

                <Cart prop={{
                    isCart: isCart,
                    toggleCart: toggleCart
                }} />

                {/* Mobile Menu (Expanded) */}
                {expanded && (
                    <nav className="absolute bg-white w-[93%] px-6 border border-black flex flex-col py-4 space-y-2 md:hidden lg:hidden transition-all duration-300">
                        <a href="#" className="flex items-center hover:bg-gray-200 h-8 gap-8 py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"><ion-icon name="home"></ion-icon> Home</a>
                        <a href="#" className="flex items-center hover:bg-gray-200 h-8 gap-8 py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"><ion-icon name="information-circle"></ion-icon> About</a>
                        <a href="#" className="flex items-center hover:bg-gray-200 h-8 gap-8 py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"><ion-icon name="settings"></ion-icon> Services</a>
                        <a href="#" className="flex items-center hover:bg-gray-200 h-8 gap-8 py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"><ion-icon name="call"></ion-icon> Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
};

