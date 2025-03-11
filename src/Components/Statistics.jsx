import { useState } from "react";

export default function Statistics() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    {
      src: "/src/assets/icon_shop.svg",
      alt: "Sellers",
      value: "10.5k",
      text: "Sellers active in our site",
    },
    {
      src: "/src/assets/Icon-Sale2.svg",
      alt: "Sales",
      value: "33k",
      text: "Monthly Product Sale",
    },
    {
      src: "/src/assets/Icon-Shopping bag.svg",
      alt: "Customers",
      value: "45.5k",
      text: "Customers active in our site",
    },
    {
      src: "/src/assets/Icon-Moneybag.svg",
      alt: "Revenue",
      value: "25k",
      text: "Annual gross sale",
    },
  ];

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-[1170px] text-xs">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`p-6 group border border-red-600 w-[270px] h-[230px] flex flex-col items-center justify-center shadow-lg hover:bg-red-500 transition-all`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="bg-gray-300 group-hover:bg-red-400 transition-all rounded-full w-[80px] h-[80px] flex items-center justify-center">
            <div
              className={`${
                item.alt === "Sales" ? "bg-white" : "bg-black"
                
              } rounded-full w-[60px] h-[60px] flex items-center justify-center`}
            >
              <img src={item.src} alt={item.alt} className="w-[40px]" />
            </div>
          </div>
          <span className="text-2xl font-bold mt-2">{item.value}
            
          </span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
