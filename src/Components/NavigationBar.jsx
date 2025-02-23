import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState, useRef, useEffect } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavDrawer from "./NavDrawer";

export default function NavigationBar() {

    const [screenSize, setScreenSize] = useState("small");

    const updateScreenSize = () => {
        if (window.matchMedia("(max-width: 850px)").matches) {
            setScreenSize("small");
        } else {
            setScreenSize("large");
        }
    };

    useEffect(() => {
        updateScreenSize(); // Initial check
        window.addEventListener("resize", updateScreenSize); // Listen to resize events

        return () => window.removeEventListener("resize", updateScreenSize); // Cleanup
    }, []);




    const [isInputVisible, setInputVisible] = useState(true);
    const inputRef = useRef(null);

    const handleIconClick = () => {
        setInputVisible(true); // Make input visible on icon click
        inputRef.current?.focus(); // Focus on the input field to show the cursor
    };


    return (

        <div className="flex justify-center mt-[40px] h-[48px]">
            <div className="navigation-bar flex items-center w-[1170px] justify-between">
                <div className="exclusive-text font-bold text-3xl">Exclusive</div>

                {screenSize === "small" ? (
                    <NavDrawer />
                ) : (
                    <div className="flex justify-between items-center w-full">
                        {/* Navigation Links */}
                        <div className="list">
                            <ul className="flex gap-[48px]">
                                {["Home", "About", "Services", "Contact"].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Search Bar and Icons */}
                        <div className="navbar-right flex items-center gap-4">
                            {/* Search Input */}
                            <div
                                className="flex items-center w-[240px] h-[38px] bg-gray-100 rounded-lg"
                                style={{ transition: "all 0.3s ease" }}
                            >
                                <input
                                    className="bg-transparent outline-none placeholder:text-sm flex-grow"
                                    ref={inputRef}
                                    type="text"
                                    placeholder="What are you looking for?"
                                    style={{
                                        opacity: isInputVisible ? 1 : 0,
                                        visibility: isInputVisible ? "visible" : "hidden",
                                        transition: "opacity 0.3s ease",
                                    }}
                                />
                                <IconButton onClick={handleIconClick}>
                                    <SearchIcon />
                                </IconButton>
                            </div>

                            {/* Icons Section */}
                            <div className="flex gap-4">
                                <IconButton>
                                    <FavoriteBorderIcon className="text-sm" />
                                </IconButton>
                                <IconButton>
                                    <img src="/Cart.svg" alt="Cart logo" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                )}




            </div>
        </div>
    )
}