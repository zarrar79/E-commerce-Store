import React, { useState, useRef, useContext } from "react";
import Cart from "./cart";
import SearchBar from "./SearchBar";
import { TranslationContext } from "../Context/TranslationContext";

export default function NavBar() {
    const { translations, setLanguage } = useContext(TranslationContext);
    
    const [isOpen, setIsOpen] = useState(false);
    const [isCart, setisCart] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isInputVisible, setInputVisible] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setisCart(!isCart);
    };

    const handleIconClick = () => {
        setInputVisible(true);
        inputRef.current?.focus();
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-white lg:py-8">
            <div className="px-2 s:px-4 mx-auto max-w-7xl sm:px-6 md:px-4 lg:px-8">
                <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md md:shadow-lg lg:shadow-lg md:h-20 lg:h-24 md:py-4 md:px-10 lg:px-8 lg:py-6">
                    <div className="flex-shrink-0">
                        <a href="#" title="Logo" className="flex text-3xl font-bold">
                            Exclusive
                        </a>
                    </div>

                    <div className="md:hidden ml-auto flex gap-2 xs:gap-5">
                        <ion-icon onClick={handleToggle} name="search" className="text-2xl cursor-pointer"></ion-icon>
                        <ion-icon onClick={toggleCart} name="cart-outline" className="text-2xl cursor-pointer"></ion-icon>
                    </div>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        type="button"
                        className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md md:hidden lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        {expanded ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <div className="hidden md:flex md:items-center md:mx-auto md:space-x-5 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                        <a href="#" className="text-base font-medium text-black hover:text-blue-600">{translations.home}</a>
                        <a href="#" className="text-base font-medium text-black hover:text-blue-600">{translations.about}</a>
                        <a href="#" className="text-base font-medium text-black hover:text-blue-600">{translations.services}</a>
                        <a href="#" className="text-base font-medium text-black hover:text-blue-600">{translations.contact}</a>
                    </div>

                    <div className="hidden ml-0 lg:ml-10 md:flex md:items-center md:w-[270px] lg:w-[350px]">
                        <div className="flex items-center p-1 rounded-md gap-3 bg-gray-200">
                            <input type="text" ref={inputRef} style={{
                                opacity: isInputVisible ? 1 : 0,
                                visibility: isInputVisible ? "visible" : "hidden",
                                transition: "opacity 0.3s ease",
                            }} className="bg-gray-200 text-sm outline-none p-1 md:w-[160px] lg:w-[170px]" placeholder={translations.search_placeholder}/>
                            <ion-icon className="text-2xl cursor-pointer" onClick={handleIconClick} name="search-outline"></ion-icon>
                        </div>

                        <div className="flex items-center justify-between p-1 md:w-[60px] lg:w-[80px]">
                            <ion-icon name="heart-outline" className="text-2xl cursor-pointer"></ion-icon>
                            <ion-icon onClick={toggleCart} name="cart-outline" className="text-2xl cursor-pointer"></ion-icon>
                        </div>
                    </div>

                    <div className="relative hidden md:flex md:items-center">
                        <button onClick={toggleDropdown} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">
                            Language ▼
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-32">
                                <button onClick={() => changeLanguage("en")} className="block px-4 py-2 w-full text-left text-black hover:bg-gray-200">English</button>
                                <button onClick={() => changeLanguage("fr")} className="block px-4 py-2 w-full text-left text-black hover:bg-gray-200">Français</button>
                            </div>
                        )}
                    </div>
                </nav>

                <Cart prop={{ isCart, toggleCart }} />
                <SearchBar isOpen={isOpen} handleToggle={handleToggle} />
            </div>
        </header>
    );
};
// import React, { useState, useRef, useContext } from "react";
// import { Link } from "react-router-dom";  // ✅ Import Link
// import Cart from "./cart";
// import SearchBar from "./SearchBar";
// import { TranslationContext } from "../Context/TranslationContext";

// export default function NavBar() {
//     const { translations, setLanguage } = useContext(TranslationContext);
    
//     const [isOpen, setIsOpen] = useState(false);
//     const [isCart, setisCart] = useState(false);
//     const [expanded, setExpanded] = useState(false);
//     const [isInputVisible, setInputVisible] = useState(true);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const inputRef = useRef(null);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleCart = () => {
//         setisCart(!isCart);
//     };

//     const handleIconClick = () => {
//         setInputVisible(true);
//         inputRef.current?.focus();
//     };

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//     const changeLanguage = (lang) => {
//         setLanguage(lang);
//         setIsDropdownOpen(false);
//     };

//     return (
//         <header className="bg-white lg:py-8">
//             <div className="px-2 s:px-4 mx-auto max-w-7xl sm:px-6 md:px-4 lg:px-8">
//                 <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md md:shadow-lg lg:shadow-lg md:h-20 lg:h-24 md:py-4 md:px-10 lg:px-8 lg:py-6">
//                     <div className="flex-shrink-0">
//                         <Link to="/" title="Logo" className="flex text-3xl font-bold">
//                             Exclusive
//                         </Link>
//                     </div>

//                     <div className="md:hidden ml-auto flex gap-2 xs:gap-5">
//                         <ion-icon onClick={handleToggle} name="search" className="text-2xl cursor-pointer"></ion-icon>
//                         <ion-icon onClick={toggleCart} name="cart-outline" className="text-2xl cursor-pointer"></ion-icon>
//                     </div>

//                     <button
//                         onClick={() => setExpanded(!expanded)}
//                         type="button"
//                         className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md md:hidden lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//                     >
//                         {expanded ? (
//                             <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         )}
//                     </button>

//                     {/* ✅ Updated Navigation Links */}
//                     <div className="hidden md:flex md:items-center md:mx-auto md:space-x-5 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
//                         <Link to="/" className="text-base font-medium text-black hover:text-blue-600">{translations.home}</Link>
//                         <Link to="/about" className="text-base font-medium text-black hover:text-blue-600">{translations.about}</Link>
//                         <Link to="/services" className="text-base font-medium text-black hover:text-blue-600">{translations.services}</Link>
//                         <Link to="/contact" className="text-base font-medium text-black hover:text-blue-600">{translations.contact}</Link>
//                     </div>

//                     <div className="hidden ml-0 lg:ml-10 md:flex md:items-center md:w-[270px] lg:w-[350px]">
//                         <div className="flex items-center p-1 rounded-md gap-3 bg-gray-200">
//                             <input type="text" ref={inputRef} style={{
//                                 opacity: isInputVisible ? 1 : 0,
//                                 visibility: isInputVisible ? "visible" : "hidden",
//                                 transition: "opacity 0.3s ease",
//                             }} className="bg-gray-200 text-sm outline-none p-1 md:w-[160px] lg:w-[170px]" placeholder={translations.search_placeholder}/>
//                             <ion-icon className="text-2xl cursor-pointer" onClick={handleIconClick} name="search-outline"></ion-icon>
//                         </div>

//                         <div className="flex items-center justify-between p-1 md:w-[60px] lg:w-[80px]">
//                             <ion-icon name="heart-outline" className="text-2xl cursor-pointer"></ion-icon>
//                             <ion-icon onClick={toggleCart} name="cart-outline" className="text-2xl cursor-pointer"></ion-icon>
//                         </div>
//                     </div>

//                     <div className="relative hidden md:flex md:items-center">
//                         <button onClick={toggleDropdown} className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">
//                             Language ▼
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-32">
//                                 <button onClick={() => changeLanguage("en")} className="block px-4 py-2 w-full text-left text-black hover:bg-gray-200">English</button>
//                                 <button onClick={() => changeLanguage("fr")} className="block px-4 py-2 w-full text-left text-black hover:bg-gray-200">Français</button>
//                             </div>
//                         )}
//                     </div>
//                 </nav>

//                 <Cart prop={{ isCart, toggleCart }} />
//                 <SearchBar isOpen={isOpen} handleToggle={handleToggle} />
//             </div>
//         </header>
//     );
// }
