import React, { useState, useEffect } from 'react';
import Title from './Title';


export default function Slider({ prop }) {
    const [i, setI] = useState(1); // Track the current index

    const moveSlider = (direction) => {
        if (direction === 'next') {
            if (i < prop.numItems) {
                setI(i + 1);
            } else {
                setI(1); // Reset to first item
            }
        } else if (direction === 'prev') {
            if (i > 1) {
                setI(i - 1);
            } else {
                setI(prop.numItems); // Go to last item
            }
        }
    };


    const itemStyles = {
        border: "2px solid black",
        width: `calc(100% / ${prop.showItems})`,
        height: prop.itemheight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: "0",
        boxSizing: "border-box"
    };


    useEffect(() => {
        if (!prop.isMove) return;

        const interval = setInterval(() => {
            moveSlider("next");
        }, 2500);

        return () => clearInterval(interval);
    }, [prop.isMove, moveSlider]);



    return (

        <div className={`slider flex flex-col w-[${prop.containerWidth}] ml-[${prop.marginLeft}] mt-[${prop.marginTop}]`} style={{ rowGap: prop.spacing }}>

            {prop.isShowButton &&
                <div className='flex justify-between'>
                    <Title
                        prop={{
                            title1: prop.title1,
                            title2: prop.title2,
                            showTimer: prop.showTimer

                        }}
                    />
                    <div className='slider-buttons mt-[40px] max-w-25 md:mr-10'>
                        <button className='p-3 size-12 bg-slate-200 rounded-full' onClick={() => moveSlider('prev')}>
                            <img src="./icons_arrow.svg" alt="" />
                        </button>
                        <button className='p-3 size-12 ml-6 bg-slate-200 rounded-full' onClick={() => moveSlider('next')}>
                            <img className='rotate-180' src="./icons_arrow.svg" alt="" />
                        </button>
                    </div>
                </div>}
            <div className={`container overflow-hidden `} style={{}}>
                <div
                    className={`slider-itemwidth-movement w-[${prop.width}] flex transition-all duration-500 ease-in-out`}
                    style={{
                        transform: `translateX(-${(i - 1) * prop.itemWidth}px)`,
                        gap: prop.gapbetween,
                    }}
                >

                    {prop.isComponent ? prop.component : <div className='image-slider flex w-[892px]'>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                        <div style={itemStyles}><img src={prop.image} alt="" /></div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};
