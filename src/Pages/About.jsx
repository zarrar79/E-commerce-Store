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
import SideBar from "../Components/SideBar";
import TopHeader from "../Components/TopHeader";

export default function About() {
    return (
        <>
            {/* Top Header & Navigation */}
            <TopHeader />
            <NavBar />
            <SearchBar />

            {/* Main Container */}
            
                    <SideBar />
                    <div className="flex bg-gray-100 min-h-screen flex-col">
                    <div className="flex">
                    <section className="flex-1 flex justify-center items-center px-6">
                        <div className="max-w-6xl w-full py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            
                            {/* Left Side: Text */}
                            <div className="text-left">
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                                    About Us
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed quis eros at lacus feugiat hendrerit sed ut tortor. 
                                    Suspendisse et magna quis elit efficitur consequat. 
                                    Mauris eleifend velit a pretium iaculis. Donec sagittis 
                                    velit et magna euismod, vel aliquet nulla malesuada.
                                </p>
                            </div>

                            {/* Right Side: Image */}
                            <div className="flex justify-center md:justify-end">
                                <img
                                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                    alt="About Us"
                                    className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Statistics Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaUsers className="text-4xl text-red-500 mb-2" />
                            <span className="text-2xl font-bold">10.5k</span>
                            <p className="text-gray-500">Sellers active in our site</p>
                        </div>
                        <div className="p-6 border rounded-lg bg-red-500 text-white">
                            <FaShoppingCart className="text-4xl mb-2" />
                            <span className="text-2xl font-bold">33k</span>
                            <p>Monthly Product Sale</p>
                        </div>
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaDollarSign className="text-4xl text-green-500 mb-2" />
                            <span className="text-2xl font-bold">45.5k</span>
                            <p className="text-gray-500">Customers active in our site</p>
                        </div>
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaChartLine className="text-4xl text-blue-500 mb-2" />
                            <span className="text-2xl font-bold">25k</span>
                            <p className="text-gray-500">Annual gross sale</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12 bg-gray-100">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Team Member */}
                            {[
                                { name: "Tom Cruise", role: "Founder & Chairman", image: "/images/tom-cruise.jpg" },
                                { name: "Emma Watson", role: "Managing Director", image: "/images/emma-watson.jpg" },
                                { name: "Will Smith", role: "Product Designer", image: "/images/will-smith.jpg" }
                            ].map((member, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <img src={member.image} alt={member.name} className="w-full h-60 object-cover rounded-lg"/>
                                    <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                                    <p className="text-gray-500">{member.role}</p>
                                    <div className="flex justify-center mt-2 space-x-3">
                                        <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
                                        <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
                                        <FaLinkedin className="text-gray-500 hover:text-blue-600 cursor-pointer" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaTruck className="text-4xl text-gray-700 mb-3" />
                            <h3 className="text-xl font-semibold">Free & Fast Delivery</h3>
                            <p className="text-gray-500">Free delivery for all orders over $140</p>
                        </div>
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaHeadset className="text-4xl text-gray-700 mb-3" />
                            <h3 className="text-xl font-semibold">24/7 Customer Service</h3>
                            <p className="text-gray-500">Friendly 24/7 customer support</p>
                        </div>
                        <div className="p-6 border rounded-lg flex flex-col items-center">
                            <FaUndo className="text-4xl text-gray-700 mb-3" />
                            <h3 className="text-xl font-semibold">Money Back Guarantee</h3>
                            <p className="text-gray-500">We return money within 30 days</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
