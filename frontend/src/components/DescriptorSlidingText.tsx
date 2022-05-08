import React, { useEffect, useState } from "react";

const DescriptorSlidingText: React.FC = (): JSX.Element => {
    const descriptors = [
        "Software Engineer 💻",
        "Activist 🌱",
        "Surfer 🌊",
        "Brother 👨‍👦‍👦",
        "Climber 🧗",
        "Musician 🎸",
    ];

    const [descriptorInd, setDescriptorInd] = useState(3);


    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDescriptorInd( descriptorInd => (descriptorInd + 1) % descriptors.length);
        }, 5000);
          return () => clearInterval(interval);
    }, []);

    return (
        <div className="descriptor-container">
            <h1 className="descriptor">{descriptors[descriptorInd]}</h1>
        </div>
    );
};
export default DescriptorSlidingText;
