import Image from "next/image";
import React from "react";

const teamMembers = [
    {
        name: "John Doe",
        designation: "CEO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod nisi, ac bibendum velit. Sed euismod euismod nisi, ac bibendum velit.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Jane Doe",
        designation: "CTO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod nisi, ac bibendum velit. Sed euismod euismod nisi, ac bibendum velit.",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Bob Smith",
        designation: "COO",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod nisi, ac bibendum velit. Sed euismod euismod nisi, ac bibendum velit.",
        image: "https://via.placeholder.com/150",
    },
];

const Team = () => {
    return (
        <main className="pb-12 md:pb-16 lg:pb-32 w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Meet our Team
            </h1>
            <p className="text-slate-500 my-4">
                Our distinguished team, comprised of MBA, Chartered Accountants
                and Company Secretary, brings a wealth of knowledge and
                expertise to guide you on your educational journey. With
                academic roots from prestigious institutions, including NYU, our
                team is equipped to provide you with the highest level of
                support and insight to ensure your academic aspirations are
                realized. Rest assured, your future is in capable hands with our
                seasoned professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white rounded-lg shadow-lg"
                    >
                        <Image
                            unoptimized
                            width={100}
                            height={100}
                            src={member.image}
                            alt={member.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-medium">
                                {member.name}
                            </h3>
                            <p className="text-gray-500">
                                {member.designation}
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                {member.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Team;
