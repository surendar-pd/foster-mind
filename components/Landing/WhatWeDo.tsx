import { Globe2, GraduationCap, ShieldCheck, User, Users } from "lucide-react";
import React from "react";

const WhatWeDo = () => {
    const data = [
        {
            icon: <GraduationCap className="text-emerald-700" size={40} />,
            title: "Passion for Education",
            desc: "Our team shares a deep passion for education. We believe in the transformative power of learning and are dedicated to helping students achieve their academic dreams.",
        },
        {
            icon: <User className="text-emerald-700" size={40} />,
            title: "Counsellors You Can Trust",
            desc: "Our counsellors are your trusted guides on the journey to overseas education. They are rigorously trained, stay updated on the latest trends, and work tirelessly to ensure that your choices align perfectly with your aspirations.",
        },
        {
            icon: <Globe2 className="text-emerald-700" size={40} />,
            title: "Global Reach",
            desc: "Our international team's diverse backgrounds and experiences enable us to provide a global perspective. We work with education institutions worldwide, ensuring you have access to a world of opportunities.",
        },
        {
            icon: <ShieldCheck className="text-emerald-700" size={40} />,
            title: "Quality Service",
            desc: "We take immense pride in the quality of service we provide. Our team is committed to going the extra mile to ensure your experience with us is exceptional from start to finish.",
        },
        {
            icon: <Users className="text-emerald-700" size={40} />,
            title: "Your Partners in Success",
            desc: "We are not just an education consultancy; we are your partners in success. Our team is dedicated to making your educational journey seamless and rewarding.",
        },
    ];
    return (
        <main className="w-full h-full bg-teal-400">
            <main className="py-8 md:py-16 lg:py-32 w-full p-4 md:px-16 lg:max-w-screen-2xl lg:mx-auto flex flex-col gap-4">
                <section className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        What we do
                    </h1>
                    <p className="text-slate-800 mt-4">
                        At FosterMind, our team is the backbone of our success.
                        Comprising seasoned professionals, dedicated
                        counsellors, and industry experts, each team member
                        brings their unique strengths to the table. Our
                        commitment to providing the highest level of service and
                        support is made possible by the passion and expertise of
                        our exceptional team.
                    </p>
                </section>
                <section>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
                        {/* <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8"> */}
                        {data.map((d, idx) => (
                            <div
                                key={idx}
                                // lg:last:odd:col-start-2 lg:col-span-2
                                className="bg-white w-full self-stretch max-w-sm hover:-translate-y-1 transition-all duration-300 rounded-md p-6 flex flex-col gap-4"
                            >
                                <div className="flex gap-2 items-center justify-center">
                                    {d.icon}
                                    <h1 className="text-xl font-semibold">
                                        {d.title}
                                    </h1>
                                </div>
                                <p className="text-slate-800 text-center">
                                    {d.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </main>
    );
};

export default WhatWeDo;
