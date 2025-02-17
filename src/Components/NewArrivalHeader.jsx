export default function NewArrivalHeader({prop}) {
    return(
        <div className="flex flex-col gap-[16px] new-arrival border border-black w-[242px]">
            <div className="font-bold text-xl text-white">{prop.title}</div>
            <div className="text-white">{prop.description}</div>
            <button className="bg-black text-white w-[81px] h-[24px]">Shop Now</button>
        </div>
    )
}