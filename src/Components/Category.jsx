export default function Category({ prop }) {
    return (
        <div className="category-enhance-your-music flex justify-center  items-center category w-[1170px] bg-black h-[500px]">
            <div className="category-left flex flex-col justify-evenly w-[450px] h-[92%] ">
                <p className="text-green-500 text-sm font-bold">Categories</p>
                <div className="font-bold text-3xl md:text-5xl text-white md:w-[430px]">Enhance Your Music Experience</div>
                {prop.component}
                <button className="bg-green-500 text-white w-[171px] h-[56px]">Shop Now</button>
            </div>
            <div className="category-right flex justify-center items-center h-[420px] w-[600px]">
                <div className=" flex justify-center items-center w-[600px]">
                    <img className="absolute mt-6" src="/Speaker.svg" alt="" />
                    <img src="/Ellipse.svg" alt="" />
                </div>
            </div>

        </div>
    )
}