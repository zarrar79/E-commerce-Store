export default function Login() {
    return (
        <div className=" login signup flex items-center">
            <img className="hidden md:flex md:w-[50%] lg:w-[59%] lg:mr-auto" src="./Side Image.svg" alt="Side Image" />
            <div className="w-[371px] p-5 s:p-0 gap-10 flex flex-col justify-between mx-auto xl:-ml-10">
                <div className="flex flex-col justify-between">
                    <div className="font-medium text-[28px] sm:text-[36px]">Log in to Exclusive</div>
                    <div className="text-sm">Enter your details below</div>
                </div>
                <div className="flex flex-col justify-between h-[104px]">
                    <label htmlFor="name"><input className="h-[32px] outline-none border w-full border-b-gray-400" type="text" name="" id="" placeholder="Email or Phone Number" /></label>
                    <label htmlFor="password"><input className="h-[32px] outline-none border w-full border-b-gray-400" type="password" name="" id="" placeholder="Password" /></label>
                </div>
                <div className="flex flex-col xs:flex-row items-center justify-between h-[56px]">
                    <button className='bg-[#DB4444] w-full xs:w-[143px] h-[56px] text-white'>Log In</button>
                    <a className="text-[#DB4444]" href="">Forget Password?</a>
                </div>
            </div>
        </div>
    )
}