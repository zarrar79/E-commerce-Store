import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // Import the CSS file for styling

export default function SlideShow ({prop}) {
  const [i, setI] = useState(1); // Track the current index
  const itemWidth = 892; // You can adjust this based on your item width
  const numItems = 5; // Number of items that should be visible

  const moveSlider = (direction) => {
    if (direction === 'next') {
      if (i < numItems) {
        setI(i + 1);
      } else {
        setI(1); // Reset to first item
      }
    } else if (direction === 'prev') {
      if (i > 1) {
        setI(i - 1);
      } else {
        setI(numItems); // Go to last item
      }
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider('next');
    }, 2500);
    return () => clearInterval(interval); 
  }, [i]);


  return (
    <div className='' >
      <div className="slider" style={{ marginTop: prop.marginTop, marginLeft: prop.marginLeft }}>
        <div
          className="slider-inner"
          style={{
            transform: `translateX(-${(i - 1) * itemWidth}px)`,
          }}
        >
          <div className="item"><img src="/Slide.svg" alt="" /></div>
          <div className="item"><img src="/Slide.svg" alt="" /></div>
          <div className="item"><img src="/Slide.svg" alt="" /></div>
          <div className="item"><img src="/Slide.svg" alt="" /></div>
          <div className="item"><img src="/Slide.svg" alt="" /></div>
        </div>
      </div>

    </div>
  );
};
