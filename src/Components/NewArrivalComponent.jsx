import { Description } from "@mui/icons-material";
import NewArrivalHeader from "./NewArrivalHeader";
import Title from "./Title";

export default function NewArrivalComponent() {
    return (
        <div className="new-arrival-component flex flex-col justify-between max-w-7xl border border-blue-800">
            <div>
                <Title prop={{
                    title1: "Featured",
                    title2: "New Arrival",
                }} />
            </div>
            <div className="new-arrival-component-images mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 border border-red-700">
                {/* Left */}
                <div className="left-div relative flex justify-center bg-black">
                    <img className="mt-[40px] w-[80%]  align-middle" src="./PS5.svg" alt="PS5 Image" />
                    <div className="new-arrival-left-content absolute bottom-9 md:mr-16 -ml-28 z-10 w-[60%] flex flex-col gap-[16px] new-arrival ">
                        <NewArrivalHeader prop={{
                            title: "PlayStation 5",
                            description: "Black and White version of the PS5 coming out on sale."
                        }} />
                    </div>
                </div>

                {/* Right */}
                <div className=" right-div  relative gap-6 grid grid-rows-[auto auto]">

                    {/* Top */}
                    <div className="relative right-top-div flex justify-end h-[284px]  bg-black">
                        <img className="w-[70%]"  src="./Women.svg" alt="Women Image" />
                        <div className="right-top-new-arrival-header absolute top-28 mr-40 z-10 w-[60%] flex flex-col gap-[16px]">
                            <NewArrivalHeader prop={{
                                title: "Women’s Collections",
                                description: "Featured woman collections that give you another vibe."
                            }} />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="right-bottom-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-auto">

                        {/* Left */}
                        <div className="relative right-bottom-left-div flex justify-center items-center h-[284px] bg-black">
                            <img className="bottom-img lg:w-[70%]" src="./Speakers.svg" alt="Speakers Image" />
                            <div className="absolute mt-16 sm:mr-14 md:mr-0 z-10 w-[70%] flex flex-col gap-[16px]">
                                <NewArrivalHeader prop={{
                                    title: "Speakers",
                                    description: "Amazon wireless speakers"
                                }} />
                            </div>
                        </div>
                    

                        {/* Right */}
                        <div className="relative right-bottom-right-div flex justify-center items-center h-[284px] bg-black">
                            <img className="bottom-img lg:w-[70%]" src="./Perfumes.svg" alt="Perfumes Image" />
                            <div className="absolute mt-16 sm:mr-14 md:mr-0 z-10 w-[70%] flex flex-col gap-[16px]">
                                <NewArrivalHeader prop={{
                                    title: "Perfume",
                                    description: "GUCCI INTENSE OUD EDP"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}