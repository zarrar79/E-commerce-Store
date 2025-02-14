import TopHeader from '../Components/TopHeader'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import SlideShow from '../Components/SlideShow'
import ProductCard from '../Components/ProductCard'



export default function HomePage() {
    return (
        <div className='flex justify-center flex-col'>

            <TopHeader />
            <NavigationBar />
            <div className='flex justify-center'>
                <SideBar />
                <SlideShow />
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

        </div>
    )
}