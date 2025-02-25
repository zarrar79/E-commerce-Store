import ProductCard from "./ProductCard";
import Title from "./Title";

export default function Products_Button({ prop }) {
    return (
        <div className="products-container flex flex-col gap-[60px] w-[1170px]">
            <div className="flex justify-between">
                <Title prop={{
                    title1: prop.title1,
                    title2: prop.title2,
                }}/>
                <button style={{ backgroundColor: prop.buttonColor, color: prop.textColor, marginTop: prop.marginTop }} className="w-[100px] md:w-[159px] h-[56px]">{prop.buttonContent}</button>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-x-8 place-items-center gap-y-8">
                {prop.component}       
            </div>
        </div>
    )
}