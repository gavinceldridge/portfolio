import React, { useEffect, useState } from "react";

const DescriptorSlidingText: React.FC = (): JSX.Element => {
    const descriptors = [
        "Software Engineer 💻",
        "Activist 🌱",
        "Surfer 🌊",
        "Brother 👨‍👦‍👦",
        "Minimalist 🌳",
        "Climber 🧗",
        "Musician 🎸",
    ];

    const [descriptorInd, setDescriptorInd] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(descriptors[descriptorInd]);
            setDescriptorInd((descriptorInd + 1) % descriptors.length);
            const descContainer = document.querySelector(
                ".descriptor-container"
            );
            let descriptor = document.querySelector(".descriptor");
            if (descriptor && descContainer) {
                descriptor.remove();
                descriptor = document.createElement("h1");
                descriptor.className = "descriptor";
                descriptor.textContent = descriptors[descriptorInd];
                descContainer.appendChild(descriptor);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [descriptorInd]);

    return (
        <div className="descriptor-container">
            <h1 className="descriptor">{descriptors[0]}</h1>
        </div>
    );
};
export default DescriptorSlidingText;
