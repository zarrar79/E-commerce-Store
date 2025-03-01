import React, { useState } from 'react'

const SearchBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`flex items-center justify-center w-fuil transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-20" : "w-auto"}`}>
            {
                isOpen ? (
                    <form className='relative flex items-center justify-center w-full' action="">
                        <div className='relative w-1/2'>
                            <input type="text" placeholder='Search' className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700' name="" id="" />
                            <button>
                                <ion-icon className="text-2xl cursor-pointer" name="search-outline"></ion-icon>
                            </button>
                        </div>
                    </form>
                ) : (
                    <button>
                        <ion-icon className="text-2xl cursor-pointer" name="search-outline"></ion-icon>
                    </button>
                )
            }
        </div>
    )
}

export default SearchBar
