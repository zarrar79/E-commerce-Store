import TopHeader from '../Components/TopHeader'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import ProductCard from '../Components/ProductCard'
import Slider from '../Components/Slider'
import Title from '../Components/Title.jsx'
import Categories from '../Components/Categories.jsx'
import Products_Button from '../Components/Products_Button.jsx'


export default function HomePage() {


    const productData = [
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "arra",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        }
    ]


    const categoriesData = [
        {
            title: "Phones",
            img: "./CellPhone.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        },
        {
            title: "Categories",
            img: "./SmartWatch.svg",
        }
    ]





    const homePage_Product_Button = [
        {
            title: "The north coat",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
        },
        {
            title: "The south coat",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
        },
        {
            title: "The north coat",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
        },
        {
            title: "The north coat",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
        },

    ]

    const ourProduct = [
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "arra",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HAVIT HV-G92 Gamepad",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        }
    ]


    return (
        <>
            <TopHeader />
            <div className='flex justify-center'>
                <div className='flex w-[1440px] justify-center flex-col border border-red-500 '>

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
                    </div>



                    {/* Flash Sales Box */}
                    <div className=' border border-blue-500'>
                        <div className='flex flex-end border border-red-500'>


                            <div className='ml-auto'>
                                <Slider
                                    prop={{
                                        itemWidth: 280,
                                        itemheight: 350,
                                        numItems: 7,
                                        showItems: 5,
                                        image: "",
                                        spacing: 16,
                                        width: "1308px",
                                        containerWidth: "1308px",
                                        isMove: false,
                                        isShowButton: true,
                                        isComponent: true,
                                        component: <div className='flex gap-[30px]'>
                                            {productData.map((data) => (
                                                <ProductCard prop={data} />
                                            ))}
                                        </div>,
                                        title1: "Todays",
                                        title2: "Flash Sales",
                                    }}
                                />
                            </div>
                        </div>
                    </div>



                    {/* Browse By Category */}

                    <div className=' border border-blue-500'>
                        <div className=' border flex justify-center border-red-500'>

                            <div className=''>
                                <Slider
                                    prop={{
                                        itemWidth: 200,
                                        itemheight: 350,
                                        numItems: 7,
                                        showItems: 4,
                                        image: "",
                                        spacing: 16,
                                        width: "1170px",
                                        containerWidth: "1170px",
                                        isMove: false,
                                        isShowButton: true,
                                        isComponent: true,
                                        component: <div className='flex gap-[30px]'>
                                            {categoriesData.map((data) => (
                                                <Categories prop={data} />
                                            ))}
                                        </div>,
                                        title1: "Categories",
                                        title2: "Browse By Category",
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    {/* Best Selling Products */}

                    <div className=' border border-blue-500'>
                        <div className=' border flex justify-center border-red-500'>
                            <Products_Button prop={{
                                component: <>{
                                    homePage_Product_Button.map((data) => (
                                        <ProductCard prop={data} />
                                    ))
                                }</>,
                                title1: "This Month",
                                title2: "Best Selling Products",
                                buttonContent: "View All",
                                buttonColor: "rgba(219, 68, 68, 1)",
                                textColor: "white",
                                marginTop: "30px",
                            }} />

                        </div>
                    </div>


                    {/* Explore Our Product's */}
                    <div className=' border border-blue-500'>
                        <div className=' border flex justify-center border-red-500'>

                            <div className=''>
                                <Slider
                                    prop={{
                                        itemWidth: 305,
                                        itemheight: 350,
                                        numItems: 3,
                                        showItems: 4,
                                        image: "",
                                        spacing: 16,
                                        width: "1170px",
                                        containerWidth: "1170px",
                                        isMove: false,
                                        isShowButton: true,
                                        isComponent: true,
                                        component: <>
                                            {ourProduct.map((data) => (

                                                <div className='flex border border-red-700'><ProductCard prop={data} /></div>

                                            ))}
                                        </>,
                                        title1: "Our Product's",
                                        title2: "Explore Our Product's",
                                        container: 2,
                                        gapbetween: 90
                                    }}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}