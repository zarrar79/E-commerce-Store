import { Description } from "@mui/icons-material";
import NewArrivalHeader from "./NewArrivalHeader";
import Title from "./Title";

export default function NewArrivalComponent() {
    return (
        <div className="new-arrival-component flex flex-col justify-between w-[1170px] h-[768px]">
            <div>
                <Title prop={{
                    title1: "Featured",
                    title2: "New Arrival",
                }} />
            </div>
            <div className="flex justify-between w-[1170px]">
                {/* Left */}
                <div className="relative flex justify-center bg-black h-[600px] w-[570px]">
                    <img className="mt-[40px] w-[511px] h-[511px] align-middle" src="./PS5.svg" alt="PS5 Image" />
                    <div className="absolute bottom-9 mr-64 z-10 w-[242px] flex flex-col gap-[16px] new-arrival ">
                        <NewArrivalHeader prop={{
                            title: "PlayStation 5",
                            description: "Black and White version of the PS5 coming out on sale."
                        }} />
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col relative justify-between h-[600px] w-[570px]">

                    {/* Top */}
                    <div className="flex justify-end h-[284px]  bg-black">
                        <img src="./Women.svg" alt="Women Image" />
                        <div className="absolute top-28 mr-72 z-10 w-[242px] flex flex-col gap-[16px]">
                            <NewArrivalHeader prop={{
                                title: "Women’s Collections",
                                description: "Featured woman collections that give you another vibe."
                            }} />
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex justify-between h-[284px]">

                        {/* Left */}
                        <div className="flex justify-center items-center relative w-[270px] h-[284px] bg-black">
                            <img className="w-[190px] h-[221px]" src="./Speakers.svg" alt="Speakers Image" />
                            <div className="absolute mt-28 z-10 w-[220px] flex flex-col gap-[16px]">
                                <NewArrivalHeader prop={{
                                    title: "Speakers",
                                    description: "Amazon wireless speakers"
                                }} />
                            </div>
                        </div>
                    

                        {/* Right */}
                        <div className="flex justify-center items-center relative w-[270px] h-[284px] bg-black">
                            <img className="w-[190px] h-[221px]" src="./Perfumes.svg" alt="Perfumes Image" />
                            <div className="absolute mt-28 z-10 w-[220px] flex flex-col gap-[16px]">
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