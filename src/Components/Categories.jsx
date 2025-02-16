export default function Categories({prop}) {
    return(
        <div className="flex w-[170px] h-[145px] gap-y-2 flex-col justify-center items-center border-[5px] border-gray-300">
            <div>
                <img src={prop.img} alt={prop.title} />
            </div>
            <div>
                {prop.title}
            </div>
        </div>
    )
}