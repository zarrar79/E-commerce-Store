import React, { useState, useEffect } from 'react';

export default function Timer() {

    // Set the target time (e.g., 3 days from now)
    const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center space-x-3">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
                <div key={index} className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">{label}</span>
                    <span className="text-xl font-bold">
                        {index === 0 ? timeLeft.days : index === 1 ? timeLeft.hours : index === 2 ? timeLeft.minutes : timeLeft.seconds}
                    </span>
                </div>
            ))}
        </div>
    )
}