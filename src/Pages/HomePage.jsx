import TopHeader from '../Components/TopHeader'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import SlideShow from '../Components/SlideShow'
import ProductCard from '../Components/ProductCard'
import Slider from '../Components/Slider'



export default function HomePage() {
    return (
        <div className='flex justify-center flex-col'>

            <TopHeader />
            <NavigationBar />
            <div className='flex justify-center'>
                <SideBar />
                <Slider
                    prop={{
                        containerWidth: "892px",
                        itemWidth: 892,
                        itemheight: 344,
                        numItems: 5,
                        showItems: 1,
                        image: "/Slide.svg",
                        marginTop: "40px",
                        marginLeft: "55px",
                        width: "892px",
                        gapbetween: "0px",
                        isMove: true,
                        isShowButton: false,
                    }}
                />
                {/* <SlideShow 
                    prop={{
                        marginTop: "40px",
                        marginLeft: "55px",
                    }}
                /> */}
            </div>

            <ProductCard
                prop={{
                    title: "HAVIT HV-G92 Gamepad",
                    newprice: "$120",
                    oldprice: "$160",
                    discount: "-40%",
                    img: "/GamePhoto.svg",
                    alt: "Gamepad"
                }}
            />

            <Slider
                prop={{
                    itemWidth: 250,
                    itemheight: 350,
                    numItems: 7,
                    showItems: 6,
                    image: "",
                    space_y: 8,
                    width: "1308px",
                    gapbetween: "30px",
                    isMove: false,
                    isShowButton: true,
                    spacing: 8,
                    containerWidth:"1308px",
                }}
            />

        </div>
    )
}