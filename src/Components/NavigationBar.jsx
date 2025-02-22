import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState, useRef } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function NavigationBar() {

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
                <div className="list">
                    <ul className="flex  gap-[48px]">
                        <li>
                            <a href="#" className="hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-300">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-300">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right flex justify-between items-center w-[370px]">
                    <div className="flex justify-center w-[240px] h-[38px] bg-gray-100 rounded-lg " style={{ display: 'flex', alignItems: 'center' }}>
                        <input className="bg-gray-100 roun outline-none placeholder:text-sm"
                            ref={inputRef}
                            type="text"
                            placeholder="What are you looking for?"
                            style={{
                                opacity: isInputVisible ? 1 : 0,
                                visibility: isInputVisible ? 'visible' : 'hidden',
                                transition: 'opacity 0.3s ease',
                            }}
                        />
                        <IconButton onClick={handleIconClick}>
                            <SearchIcon className="-mr-4" />
                        </IconButton>
                    </div>
                    <div className="flex justify-between w-[100px]">
                        <IconButton>
                            <FavoriteBorderIcon className="text-sm" />
                        </IconButton>
                        <IconButton>
                            <img src="/Cart.svg" alt="Cart logo" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}