import Image from "next/image";
import React from "react";

const teamMembers = [
    {
        name: "Hardik",
        designation: "Co Founder",
        image: "/assets/team/person3.jpeg",
    },
    {
        name: "Neelam",
        designation: "Co Founder",
        image: "/assets/team/person4.jpeg",
    },
    {
        name: "Sujata",
        designation: "CFO",
        image: "/assets/team/person2.jpeg",
    },
    {
        name: "Vaibhav Mandhana",
        designation: "CFO",
        image: "/assets/team/vaibhav.jpeg",
    },
];

const Team = () => {
    return (
        <main
            id="team"
            className="scroll-mt-32 pb-12 md:pb-16 lg:pb-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex flex-col gap-4"
        >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                Meet our Team
            </h1>
            <p className="text-slate-500 my-4 text-justify">
                Our distinguished team, comprised of MBA and Chartered
                Accountants, brings a wealth of knowledge and expertise to guide
                you on your educational journey. With academic roots from
                prestigious institutions, including NYU, our team is equipped to
                provide you with the highest level of support and insight to
                ensure your academic aspirations are realized. Rest assured,
                your future is in capable hands with our seasoned professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white rounded-md shadow-md"
                    >
                        <Image
                            unoptimized
                            width={100}
                            height={100}
                            src={member.image}
                            alt={member.name}
                            className="w-full aspect-square object-top md:aspect-[3/4] object-cover rounded-t-md"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-medium">
                                {member.name}
                            </h3>
                            <p className="text-gray-500">
                                {member.designation}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Team;
