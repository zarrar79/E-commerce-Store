// import NavBar from "../Components/NavBar";
// import SearchBar from "../Components/SearchBar";
// import Footer from "../Components/Footer";
// import SideBar from "../Components/SideBar";
// import TopHeader from "../Components/TopHeader";

// export default function About() {
//     return (
//         <>
//             {/* Top Header & Navigation */}
//             <TopHeader />
//             <NavBar />
//             <SearchBar />

//             {/* Main Container */}
           
//                 <SideBar />
                
//                 <section class="bg-gray-100">
//     <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//             <div class="max-w-lg">
//                 <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
//                 <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//                     eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
//                     Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
//                     malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
              
//             </div>
//             <div className="mt-12 md:mt-0">
//                             <img
//                                 src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
//                                 alt="About Us"
//                                 className="w-full max-w-md rounded-lg shadow-lg object-cover"
//                             />
//                         </div>
//         </div>
//     </div>
// </section>
          

//             {/* Footer */}
//             <Footer />
//         </>
//     );
// }
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine, FaTwitter, FaInstagram, FaLinkedin, FaTruck, FaHeadset, FaUndo } from "react-icons/fa";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Footer from "../Components/Footer";
import TopHeader from "../Components/TopHeader";
import BottomComponents from '../Components/BottomComponents.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

const teamMembers = [
    { name: "Tom Cruise", role: "Founder & Chairman", image: "/src/assets/Frame 874.svg" },
    { name: "Emma Watson", role: "Managing Director", image: "/src/assets/Frame 875.svg" },
    { name: "Will Smith", role: "Product Designer", image: "/src/assets/Frame 876.svg" },
  ];
export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const stats = [
      { src: "/src/assets/Services.svg", alt: "Sellers", value: "10.5k", text: "Sellers active in our site" },
      { src: "/src/assets/Icon-Sale.svg", alt: "Sales", value: "33k", text: "Monthly Product Sale" },
      { src: "/src/assets/Services (1).svg", alt: "Customers", value: "45.5k", text: "Customers active in our site" },
      { src: "/src/assets/Services (3).svg", alt: "Revenue", value: "25k", text: "Annual gross sale" },
    ];

    return (
        <>
            {/* Top Header & Navigation */}
            <TopHeader />
            <NavBar />
            <SearchBar />

            {/* Main Container */}
            
                  
                <div className="flex flex-col">
                    <div className="bg-white py-16  relative">
  {/* Main Container */}
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <div className=" items-center gap-12 ">
      
      {/* Left Side: Text Content */}
      <div className="w-525px h-336px top-422px left-135px gap-40px">
        <h2 className="text-5xl font-semibold text-gray-900 mb-6 w-277px h-64px size-54px">Our Story</h2>
        <p className="text-xs text-gray-600 leading-relaxed">
          Launched in 2015, Exclusive is South Asia’s premier online shopping<br></br>
          marketplace with an active presence in Bangladesh. Supported <br></br>by a
          wide range of tailored marketing, data, and service solutions,<br></br> Exclusive
          has 10,500 sellers and 300 brands and serves 3<br></br> million customers
          across the region.
        </p>
        <p className="text-xs text-gray-600 leading-relaxed mt-4">
          Exclusive has more than 1 million products to offer, growing at a<br></br>
          very fast rate. Exclusive offers a diverse assortment in categories<br></br>
          ranging from consumer electronics to fashion and home appliances.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="flex justify-center ">
        <img 
          src="/src/assets/Side Image.svg"
          alt="Shopping Women"
          className="w-[100%] h-609px max-w-md md:max-w-lg shadow-lg  right-0 absolute bottom-0 top-1"
        />
      </div>

    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
                {/* Statistics Section */}
                <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 border w-270px h-230px flex flex-col items-center justify-center shadow-lg transition-all 
              ${hoveredIndex === index ? "bg-red-500 text-white border-red-500" : "bg-white text-black border-gray-300"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={item.src} alt={item.alt} width={80} height={80} />
            <span className="text-2xl font-bold mt-2">{item.value}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

                {/* Team Section */}
                
    
                <section className="py-12">
      <div className="max-w-6xl mx-auto ">
       

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-6"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 ">
                <img src={member.image} alt={member.name} className="w-370px h-430px object-cover mx-auto" />
                <h3 className="text-lg  mt-4">{member.name}</h3>
                <p className="text-gray-500 text-xs">{member.role}</p>
                <div className="flex  mt-2 space-x-3">
                  <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
                  <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                  <FaLinkedin className="text-gray-500 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* Features Section */}
     <div className='bottom-component flex justify-center'>
                       <div className='bottom-components-div grid grid-cols-1 place-items-center gap-6 md:grid-cols-3 w-[943px]'>
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

            
            <br></br>
<br></br>
<br></br>
<br></br>
            {/* Footer */}
            <Footer />
        </>
    );
}
