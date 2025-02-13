export default function TopHeader() {
    return (
        <>
            <div className="bg-black text-white py-2 px-4 flex items-center justify-between h-[48px]">

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className="font-bold cursor-pointer"> Shop Now</span>
                </div>

                <div className="item-end cursor-pointer ml-auto mr-32">
                    English <span className="inline-flex"><img src="/Down arrow.svg" alt="Down arrow image" /></span>
                </div>
            </div>

        </>
    )
}