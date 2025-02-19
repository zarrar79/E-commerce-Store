import React, { useState, useEffect } from 'react';

export default function Timer({ prop }) {
    // Calculate the target time based on props
    const targetTime = new Date().getTime() +
        (prop.days * 24 * 60 * 60 * 1000) +
        (prop.hours * 60 * 60 * 1000) +
        (prop.minutes * 60 * 1000) +
        (prop.seconds * 1000);

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {prop.timerComponent === 1 ? (
                <div className="flex items-center space-x-3">
                    {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-xs text-gray-500">{label}</span>
                            <span className="text-2xl font-extrabold">
                                {index === 0 ? timeLeft.days : index === 1 ? timeLeft.hours : index === 2 ? timeLeft.minutes : timeLeft.seconds}
                            </span>
                        </div>
                    ))}
                </div>
            ) : prop.timerComponent === 2 ? (
                <div className="flex justify-between w-80 h-[70px]">
                    {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                        <div key={index} className="flex flex-col justify-center w-[70px] items-center rounded-full bg-white">
                            <span className="text-sm font-bold">
                                {index === 0 ? timeLeft.days : index === 1 ? timeLeft.hours : index === 2 ? timeLeft.minutes : timeLeft.seconds}
                            </span>
                            <span className="text-xs flex justify-start text-gray-500">{label}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div> 
            )}

        </>
    );
}
