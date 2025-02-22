export default function NewArrivalHeader({prop}) {
    return(
        <div className="flex-wrap flex flex-col gap-[16px] new-arrival border border-white max-w-[242px]">
            <div className="flex flex-wrap font-bold text-xl text-white">{prop.title}</div>
            <div className="flex flex-wrap text-white">{prop.description}</div>
            <button className="bg-black text-white w-[81px] h-[24px]">Shop Now</button>
        </div>
    )
}