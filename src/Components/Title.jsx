import Timer from "./Timer";

export default function Title({ prop }) {
    return (
        <div className='w-[40%] flex justify-between'>

            <div className="flex flex-col max-w-[120px] space-y-6">
                {/* Today's Label */}
                <div className="flex items-center space-x-4 ">
                    <div className="w-3.5 h-6 bg-red-500 rounded"></div>
                    <span className="text-red-500 font-semibold text-sm">{prop.title1}</span>
                </div>
                <div className='flex justify-between mt-4 h-[37px] w-[200px] md:w-[400px]'>
                    {/* Flash Sales Text */}
                    <h2 className="text-1xl flex flex-wrap md:text-3xl mt-auto font-bold">{prop.title2}</h2>
                    <Timer prop={{ days: 10, hours: 10, minutes: 10, seconds: 10, timerComponent: prop.showTimer }} />

                </div>
            </div>


        </div>
    )
}