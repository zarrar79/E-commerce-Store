import { useState } from "react";

export default function Statistics(){
    const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    {
      src: "/src/assets/Services.svg",
      alt: "Sellers",
      value: "10.5k",
      text: "Sellers active in our site",
    },
    {
      src: "/src/assets/Icon-Sale.svg",
      alt: "Sales",
      value: "33k",
      text: "Monthly Product Sale",
    },
    {
      src: "/src/assets/Services (1).svg",
      alt: "Customers",
      value: "45.5k",
      text: "Customers active in our site",
    },
    {
      src: "/src/assets/Services (3).svg",
      alt: "Revenue",
      value: "25k",
      text: "Annual gross sale",
    },
  ];
    return(
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-[1170px] text-xs">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`p-6 border border-red-600 w-[270px] h-[230px] flex flex-col items-center justify-center shadow-lg transition-all 
              ${
                hoveredIndex === index
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-black border-gray-300"
              }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.src} alt={item.alt} width={80} height={80} />
                <span className="text-2xl font-bold mt-2">{item.value}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
    )
}