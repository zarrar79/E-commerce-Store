import React, { useState } from 'react'

const SearchBar = ({isOpen, handleToggle}) => {

    return (
        <div className={`flex items-center justify-center w-fuil transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-20" : "w-auto"}`}>
            {
                isOpen ? (
                    <form className='relative flex items-center justify-center w-full' action="">
                        <div className='flex gap-2 items-center w-1/2'>
                            <input type="text" placeholder='Search' className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700' name="" id="" />
                            <button className=' my-1'>
                                <ion-icon className="text-2xl cursor-pointer" name="search-outline"></ion-icon>
                            </button>
                            <button className='' onClick={handleToggle}>
                                X
                            </button>
                        </div>
                    </form>
                ) : (
                    <button>
                        {/* <ion-icon className="text-2xl cursor-pointer" name="search-outline"></ion-icon> */}
                    </button>
                )
            }
        </div>
    )
}

export default SearchBar
