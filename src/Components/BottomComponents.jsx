export default function BottomComponents({prop}) {
    return (
        <div className="bottom-components flex flex-col justify-between gap-4 items-center">
            <div className="flex justify-center items-center w-[75px] h-[75px] bg-slate-400 rounded-full">
                <div className="flex justify-center items-center w-[58px] h-[58px] bg-black rounded-full">
                    <img className="w-[40px] h-[40px]" src={prop.image} alt={prop.title} />
                </div>
            </div>
        <div className="font-bold text-lg">{prop.title}</div>
            <div className="text-sm">{prop.description}</div>
        </div>
    )
}