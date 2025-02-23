import TopHeader from '../Components/TopHeader'
import NavigationBar from '../Components/NavigationBar'
import SideBar from '../Components/SideBar'
import ProductCard from '../Components/ProductCard'
import Slider from '../Components/Slider'
import Title from '../Components/Title.jsx'
import Categories from '../Components/Categories.jsx'
import Products_Button from '../Components/Products_Button.jsx'
import Timer from '../Components/Timer.jsx'
import Category from '../Components/Category.jsx'
import NewArrivalHeader from '../Components/NewArrivalHeader.jsx'
import { Description } from '@mui/icons-material'
import NewArrivalComponent from '../Components/NewArrivalComponent.jsx'
import BottomComponents from '../Components/BottomComponents.jsx'
import Footer from '../Components/Footer.jsx'
import "../Pages/HomePageResponsive.css"
import React, { useState, useEffect } from "react";



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


    const homePage_Product_Button2 = [
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

    ]



    const homePage_Product_Button3 = [
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
            title: "HAVIT ",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        },
        {
            title: "HV-G92 Gamepad",
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



    const ourProduct2 = [
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
            title: "HAVIT ",
            newprice: "$120",
            oldprice: "$160",
            discount: "-40%",
            img: "/GamePhoto.svg",
            alt: "Gamepad"
        }]




    const [screenSize, setScreenSize] = useState("small");

    const updateScreenSize = () => {
        if (window.matchMedia("(min-width: 1170px)").matches) {
            setScreenSize("large");
        } else if (window.matchMedia("(min-width: 850px) and (max-width: 1169px)").matches) {
            setScreenSize("medium");
        } else {
            setScreenSize("small");
        }
    };

    useEffect(() => {
        updateScreenSize(); // Initial check
        window.addEventListener("resize", updateScreenSize); // Listen to resize events

        return () => window.removeEventListener("resize", updateScreenSize); // Cleanup
    }, []);




    return (
        <div className='border border-red-700'>
            <div>
                <TopHeader />
            </div>

            <div className='main-container flex gap-20 justify-center flex-col'>

                <div className=''>
                    <NavigationBar />
                </div>
                <hr className='-mt-16' />
                <div className='top-slider flex justify-center gap-8 -mt-10'>
                    <SideBar />
                    <Slider
                        prop={{
                            containerWidth: "892px",
                            itemWidth: 892,
                            itemheight: 344,
                            numItems: 5,
                            showItems: 1,
                            image: "/Slide.svg",
                            marginTop: "0px",
                            marginLeft: "55px",
                            width: "892px",
                            gapbetween: "0px",
                            isMove: true,
                            isShowButton: false,
                        }}
                    />
                </div>


                {/* Flash Sales */}
                <div className='Flash-sales-slider ml-auto mt-8 max-w-[1308px] border border-red-600'>
                    <Slider
                        prop={{
                            itemWidth: 280,
                            itemheight: 350,
                            numItems: 4,
                            showItems: 5,
                            image: "",
                            spacing: 52,
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
                            showTimer: 1
                        }}
                    />
                </div>

                <button className='bg-[#DB4444] w-[234px] h-[56px] text-white mx-auto'>View All Products</button>


                <hr className='w-[1170px] mx-auto' />

                {/* Browse By Category */}
                <div className=''>
                    <div className='flex justify-center '>

                        <div className='center-slider'>
                            <Slider
                                prop={{
                                    itemWidth: 200,
                                    itemheight: 350,
                                    numItems: 7,
                                    showItems: 4,
                                    image: "",
                                    spacing: 52,
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

                <hr className='max-w-[1170px] mx-auto' />


                {/* Best Selling Products */}
                <div className=' '>
                    <div className='flex justify-center '>
                        <Products_Button prop={{
                            component: <>
                                {screenSize === "large" ? (
                                    homePage_Product_Button.map((data, index) => (
                                        <ProductCard key={index} prop={data} />
                                    ))
                                ) : screenSize === "medium" ? (
                                    homePage_Product_Button2.map((data, index) => (
                                        <ProductCard key={index} prop={data} />
                                    ))
                                ) : screenSize === "small" ? (
                                    homePage_Product_Button3.map((data, index) => (
                                        <ProductCard key={index} prop={data} />
                                    ))

                                ) : (
                                    <p>No products available for smaller screens.</p>
                                )}
                            </>

                            ,
                            title1: "This Month",
                            title2: "Best Selling Products",
                            buttonContent: "View All",
                            buttonColor: "rgba(219, 68, 68, 1)",
                            textColor: "white",
                            marginTop: "30px",
                        }} />

                    </div>
                </div>


                {/* Category */}
                <div className='mt-8 '>
                    <div className='flex justify-center '>
                        <Category prop={{ component: <Timer prop={{ days: 10, hours: 10, minutes: 10, seconds: 10, timerComponent: 2 }} /> }} />
                    </div>
                </div>


                {/* Explore Our Product's */}
                <div className='flex flex-col items-center gap-10 '>
                    <div className='  flex justify-center '>

                        <div className='center-slider'>
                            <Slider
                                prop={{
                                    itemWidth: 310,
                                    itemheight: 350,
                                    numItems: 6,
                                    showItems: 4,
                                    image: "",
                                    spacing: 52,
                                    width: "1170px",
                                    containerWidth: "1170px",
                                    isMove: false,
                                    isShowButton: true,
                                    isComponent: true,
                                    component: <div className='flex flex-col space-y-8'>
                                        <div className="flex gap-14">
                                            {ourProduct.map((data) => (
                                                <ProductCard prop={data} />
                                            ))}
                                        </div>
                                        <div className="flex gap-14">
                                            {ourProduct2.map((data) => (
                                                <ProductCard prop={data} />
                                            ))}
                                        </div>
                                    </div>,

                                    title1: "Our Product's",
                                    title2: "Explore Our Product's",
                                    gapbetween: 60
                                }}
                            />
                        </div>
                    </div>
                    <button className='bg-[#DB4444] w-[234px] h-[56px] text-white'>View All Products</button>
                </div>


                {/* New Arrival */}
                <div className=' '>
                    <div className=' flex justify-center '>
                        <NewArrivalComponent />
                    </div>
                </div>


                {/* Bottom Components */}
                <div className='flex justify-center '>
                    <div className='bottom-components-div flex justify-between w-[943px]'>
                        <BottomComponents prop={{
                            image: "./icon-delivery.svg",
                            title: "FREE AND FAST DELIVERY",
                            description: "Free delivery for all orders over $140",
                        }} />
                        <BottomComponents prop={{
                            image: "./Icon-Customer service.svg",
                            title: "24/7 CUSTOMER SERVICE",
                            description: "Friendly 24/7 customer support",
                        }} />
                        <BottomComponents prop={{
                            image: "./Icon-secure.svg",
                            title: "MONEY BACK GUARANTEE",
                            description: "We reurn money within 30 days",
                        }} />
                    </div>
                </div>


            </div>
            {/* </div> */}
            <div className='mt-24 '>
                <Footer />
            </div>

        </div>
    )
}