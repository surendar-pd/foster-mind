import Image from "next/image"
import React from "react";

const Map = () => {
    return (
        <main className="pb-12 md:pb-16 lg:pb-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex flex-col lg:flex-row gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:w-1/2 flex items-center">
                Where we are <span className="text-teal-400 ml-2"> Located</span>
            </h1>
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <Image
                    unoptimized
                    width={100}
                    height={100}
                    src={"/assets/map.png"}
                    alt={"Map"}
                    className="w-full h-auto object-cover rounded-t-lg"
                />
            </div>
        </main>
    );
};

export default Map;
