export default function NavigationBar() {
    return (
        
        <div className="flex justify-center mt-[40px] h-[48px]">
            <div className="flex items-center w-[1170px] justify-between">
                <div className="font-bold text-3xl">Exclusive</div>
                <div>
                    <ul className="flex space-x-6 gap-[48px]">
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

                <div className="flex gap-[24px]">
                    <span className="text-gray-500">What are you looking for?</span>
                    <img src="/Search.svg" alt="Search logo" />
                    <img src="/Heart.svg" alt="Search logo" />
                    <img src="/Cart.svg" alt="Search logo" />
                </div>
            </div>
        </div>
    )
}