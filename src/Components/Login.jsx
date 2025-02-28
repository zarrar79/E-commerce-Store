export default function Login() {
    return (
        <div className=" login flex justify-center items-center w-[100%] h-[781px] mx-auto">
            <div className="absolute left-[-1px]">
            <img className="w-[805px] h-[781px]" src="./Side Image.svg" alt="Side Image" />
            </div>
            <div className="max-w-[371px] h-[326px] z-0">
                <div className="flex flex-col justify-between w-[336px] h-[78px]">
                    <div className="font-medium text-[36px]">Log in to Exclusive</div>
                    <div className="text-sm">Enter your details below</div>
                </div>
                <div className="flex flex-col justify-between w-[370px] h-[104px]">
                    <label htmlFor="name"><input className="h-[32px] outline-none border w-full border-b-gray-400" type="text" name="" id="" placeholder="Email or Phone Number" /></label>
                    <label htmlFor="password"><input className="h-[32px] outline-none border w-full border-b-gray-400" type="password" name="" id="" placeholder="Password" /></label>
                </div>
                <div className="flex items-center justify-between w-[371px] h-[56px]">
                    <button className='bg-[#DB4444] w-[143px] h-[56px] text-white'>Log In</button>
                    <a className="text-[#DB4444]" href="">Forget Password?</a>
                </div>
            </div>
        </div>

    )
}