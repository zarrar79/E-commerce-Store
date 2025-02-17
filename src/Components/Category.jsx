export default function Category({ prop }) {
    return (
        <div className="flex justify-evenly items-center category w-[1170px] bg-black h-[500px]">
            <div className="flex flex-col justify-evenly w-[500px] h-full ">
                <p className="text-green-700 text-sm font-bold">Categories</p>
                <div className="font-bold text-5xl text-white w-[430px]">Enhance Your Music Experience</div>
                {prop.component}
                <button className="bg-green-500 text-white w-[171px] h-[56px]">Shop Now</button>
            </div>
            <div className="w-[600px]">
                <div>
                    <img className="absolute mt-6" src="/Speaker.svg" alt="" />
                    <img src="/Ellipse.svg" alt="" />
                </div>
            </div>

        </div>
    )
}