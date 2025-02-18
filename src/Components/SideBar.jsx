export default function SideBar() {
    return (
        <div className="flex h-[344px]">
            <ul className=" flex-col space-y-5 space-x-6 gap-[48px] w-[217px] pt-[5px]">
                <li className="flex justify-between">
                    <a href="" className="hover:text-gray-300">Woman’s Fashion</a> <img src="/Right arrow.svg" alt="Right arrow" />
                </li>
                <li className="flex justify-between">
                    <a href="" className="hover:text-gray-300">Men’s Fashion</a> <img src="/Right arrow.svg" alt="Right arrow" />
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Electronics</a>
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Medicine</a>
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Sports & Outdoor</a>
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Baby’s & Toys</a>
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Groceries & Pets</a>
                </li>
                <li>
                    <a href="" className="hover:text-gray-300">Health & Beauty</a>
                </li>

            </ul>
        </div>
    )
}