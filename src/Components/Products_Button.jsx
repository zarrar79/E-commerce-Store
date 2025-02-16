import ProductCard from "./ProductCard";
import Title from "./Title";

export default function Products_Button({ prop }) {
    return (
        <div className="flex flex-col border gap-[30px] border-black w-[1170px]">
            <div className="flex justify-between">
                <Title prop={{
                    title1: prop.title1,
                    title2: prop.title2,
                }}/>
                <button style={{ backgroundColor: prop.buttonColor, color: prop.textColor, marginTop: prop.marginTop }} className="w-[159px] h-[56px]">{prop.buttonContent}</button>
            </div>
            <div className="flex  justify-between">

                {prop.component}
                
            </div>
        </div>
    )
}