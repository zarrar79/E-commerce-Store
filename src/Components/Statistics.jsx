import { useState } from "react";
import SaleIcon from "/src/assets/Icon-Sale2.svg";

export default function Statistics() {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-[1170px] text-xs lg:px-8">
      
      {/* Sellers */}
      <div className="p-6 group border w-[270px] h-[230px] flex flex-col items-center justify-center bg-white transition-all hover:bg-red-500 hover:text-white">
        <div className="bg-white group-hover:bg-red-500 transition-all rounded-full w-[80px] h-[80px] flex items-center justify-center border">
          <div className="bg-black group-hover:bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <img src="/src/assets/icon_shop.svg" alt="Sellers" className="w-[40px] invert-0 group-hover:invert" />
          </div>
        </div>
        <span className="text-2xl font-bold mt-2">10.5k</span>
        <p>Sellers active in our site</p>
      </div>

      {/* Sales */}
      <div className="p-6 group border w-[270px] h-[230px] flex flex-col items-center justify-center bg-white transition-all hover:bg-red-500 hover:text-white">
  <div className="bg-white group-hover:bg-red-500 transition-all rounded-full w-[80px] h-[80px] flex items-center justify-center border">
    <div className="bg-black group-hover:bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
      <img
        src={SaleIcon}
        alt="Sales"
        className="w-[40px] transition-all invert group-hover:invert-0"
      />
    </div>
  </div>
  <span className="text-2xl font-bold mt-2">33k</span>
  <p>Monthly Product Sale</p>
</div>


      {/* Customers */}
      <div className="p-6 group border w-[270px] h-[230px] flex flex-col items-center justify-center bg-white transition-all hover:bg-red-500 hover:text-white">
        <div className="bg-white group-hover:bg-red-500 transition-all rounded-full w-[80px] h-[80px] flex items-center justify-center border">
          <div className="bg-black group-hover:bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <img src="/src/assets/Icon-Shopping bag.svg" alt="Customers" className="w-[40px] invert-0 group-hover:invert" />
          </div>
        </div>
        <span className="text-2xl font-bold mt-2">45.5k</span>
        <p>Customers active in our site</p>
      </div>

      {/* Revenue */}
      <div className="p-6 group border w-[270px] h-[230px] flex flex-col items-center justify-center bg-white transition-all hover:bg-red-500 hover:text-white">
        <div className="bg-white group-hover:bg-red-500 transition-all rounded-full w-[80px] h-[80px] flex items-center justify-center border">
          <div className="bg-black group-hover:bg-white rounded-full w-[60px] h-[60px] flex items-center justify-center">
            <img src="/src/assets/Icon-Moneybag.svg" alt="Revenue" className="w-[40px] invert-0 group-hover:invert" />
          </div>
        </div>
        <span className="text-2xl font-bold mt-2">25k</span>
        <p>Annual gross sale</p>
      </div>

    </div>
  );
}
