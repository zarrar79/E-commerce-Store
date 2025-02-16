
export default function Title({ prop }) {
    return (
        <div className='max-w-80 justify-between border border-red-500'>

            <div className="flex flex-col max-w-96 border border-green-500 space-y-6">
                {/* Today's Label */}
                <div className="flex items-center space-x-2">
                    <div className="w-3.5 h-6 bg-red-500 rounded"></div>
                    <span className="text-red-500 font-semibold text-sm">{prop.title1}</span>
                </div>
                <div className='flex gap-10 mt-4'>
                    {/* Flash Sales Text */}
                    <h2 className="text-2xl mt-auto font-bold">{prop.title2}</h2>
                </div>
            </div>
            
        </div>
    )
}