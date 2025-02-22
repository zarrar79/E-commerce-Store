export default function Footer() {
    return (
        <footer className="flex flex-col justify-between items-center border bg-black h-[440px]">
            <div className="footer flex justify-between w-[1170px] h-[236px] mt-[80px]">
                <div className="flex flex-col justify-between w-[217px] h-[188px]">
                    <div className="flex flex-col justify-between h-[124px]">
                        <div className="text-white font-bold text-2xl">Exclusive</div>
                        <div className="text-white text-lg">Subscribe</div>
                        <div className="text-gray-300 text-sm">Get 10% off your first order</div>
                    </div>
                    <div className="flex justify-center border border-gray-400 rounded-md items-center w-[217px] h-[48px]">
                        <input className="bg-black text-white outline-none" type="email" placeholder="Enter your email" />
                        <button><img className="w-[20px] h-[18px]" src="./icon-send.svg" alt="" /></button>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[175px] h-[180px]">
                    <div className="text-white text-[20px] font-medium">Support</div>
                    <div className="text-gray-300">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
                    <div className="text-gray-300">exclusive@gmail.com</div>
                    <div className="text-gray-300">+88015-88888-9999</div>
                </div>
                <div className="flex flex-col justify-between w-[123px] h-[236px]">
                    <div className="text-white text-[20px] font-medium">Account</div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">My Account</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Login / Register</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Cart</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Wishlist</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Shop</a></div>
                </div>
                <div className="flex flex-col justify-between w-[109px] h-[196px]">
                    <div className="text-white text-[20px] font-medium">Quick Link</div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Privacy Policy</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Terms Of Use</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">FAQ</a></div>
                    <div className="text-gray-300"><a className="hover:text-white" href="">Contact</a></div>
                </div>
                <div className="flex flex-col justify-between w-[198px] h-[210px]">
                    <div className="flex h-[28px]">
                        <div className="text-white text-[20px] font-medium">Download App</div>
                    </div>
                    
                    <div className="flex flex-col justify-between w-[198px] h-[110px]">
                        <div className="text-gray-400 h-[18px] text-xs">Save $3 with App New User Only</div>
                        <div className="flex justify-between">
                            <div><img className="w-[80px] h-[80px]" src="./Qr Code.svg" alt="Qr Code image" /></div>
                            <div className="flex flex-col justify-between">
                                <div><img src="./Google-play-logo.svg" alt="Google play image" /></div>
                                <div><img src="./App-store-logo.svg" alt="App store image" /></div>
                            </div>
                        </div>
                    </div>


                    <div className=" flex justify-between w-[168px] h-[24px]">
                        <a href=""><img className="hover:bg-slate-400 w-[24px] h-[24px]" src="./Icon-Facebook.svg" alt="FaceBook image" /></a>
                        <a href=""><img className="hover:bg-slate-400 w-[24px] h-[24px]" src="./Icon-Twitter.svg" alt="Twitter image" /></a>
                        <a href=""><img className="hover:bg-slate-400 w-[24px] h-[24px]" src="./icon-instagram.svg" alt="Instagram image" /></a>
                        <a href=""><img className="hover:bg-slate-400 w-[24px] h-[24px]" src="./Icon-Linkedin.svg" alt="Linkdin image" /></a>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-end mb-8 w-full h-[40px]">
                    <div className="text-gray-400 text-sm">&copy; Copyright Rimel 2022. All right reserved</div>
            </div>
        </footer>
    )
}