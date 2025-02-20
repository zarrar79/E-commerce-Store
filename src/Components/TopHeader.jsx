export default function TopHeader() {
    return (

        <div className="bg-black w-[100vw] border border-red-600 text-white px-4 flex items-center justify-center h-[48px]">

            <div className="top-header w-[1170px] border border-blue-600">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;
                    <span className="font-bold cursor-pointer"> Shop Now</span>
                </div>

                <div className="flex justify-end gap-3 text-right cursor-pointer">
                    English <span className="inline-flex"><img src="/Down arrow.svg" alt="Down arrow image" /></span>
                </div>
            </div>
        </div>

    )
}