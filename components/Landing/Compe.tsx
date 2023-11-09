import React from "react";
import {
    BadgeCheck,
    Banknote,
    FileCheck2,
    FileEdit,
    LucideIcon,
    Newspaper,
    Search,
} from "lucide-react";

function Compe() {
    const FEATURES = [
        {
            title: "Choosing the Perfect Career Path",
            description:
                "We carefully assess your individual profile, taking into consideration the dynamic professional market landscape. This personalized approach helps you make the best career choices that align with your aspirations and future interests.",
        },
        {
            title: "Selecting the Ideal Course and University",
            description:
                "Our in-depth guidance goes beyond helping you choose the right course; it extends to selecting the most suitable university. We consider your profile, financial constraints, career aspirations, and personal interests to make the perfect match.",
        },
        {
            title: "A Wealth of Institution Information",
            description:
                "Our extensive resources include prospectuses, CDs, video tapes, brochures, and more, providing comprehensive details about all the universities and colleges we represent. These resources empower you with in-depth information about institutions tailored to your interests.",
        },
        {
            title: "Unlocking Scholarship Opportunities",
            description:
                "We ensure you are well-informed about various scholarships offered by different universities, helping you explore financial assistance opportunities to support your education.",
        },
        {
            title: "Efficient Admission Guidance",
            description:
                "Our team places special emphasis on crafting a well-presented application. We assist you with crucial components such as references and the statement of purpose. Our consistent follow-ups with universities lead to quick and positive responses.",
        },
        {
            title: "IELTS/TOEFL Mastery",
            description:
                "FosterMind Overseas Program equips you with a thorough understanding of IELTS and TOEFL, including test structures and registration details. We offer self-support training and comprehensive practice to help you secure high scores.",
        },
        {
            title: "On-Spot Admissions",
            description:
                "Our program provides students with a unique opportunity to interact with university and college representatives. This engagement not only clarifies doubts about the institution and courses but also offers the chance to receive on-the-spot offer letters.",
        },
        {
            title: "Tailored Accommodation Assistance",
            description:
                "Our counselors offer guidance on various types of accommodations that suit your needs and budget, ensuring a comfortable stay while studying abroad.",
        },
        {
            title: "Expert Visa Support",
            description:
                "We take care of the entire visa processing journey. Our services include application filling, financial statement preparation, guidance, and mock interviews. Our strong network and regular consulate communications contribute to our exceptional visa success rate.",
        },
        {
            title: "Seamless Travel Arrangements",
            description:
                "We handle flight bookings well in advance, allowing flexibility in departure dates, optimal routes, and discounts for a hassle-free journey.",
        },
        {
            title: "Pre-Departure Preparations",
            description:
                "Before you embark on your overseas adventure, FosterMind Overseas Program organizes pre-departure gatherings. These events offer you the opportunity to connect with fellow students heading to the same university or country.",
        },
        {
            title: "Post-Arrival Support",
            description:
                "We maintain continuous contact with universities and colleges to ensure a smooth transition for our students. Our support extends to addressing accommodation and course-related challenges in the initial stages of adapting to a new environment.",
        },
    ];
    return (
        <section className="" id="features">
            <div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32">
                <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Comprehensive Career Counselling
                    </h2>
                    <p className="my-4 text-slate-500">
                        At FosterMind Overseas Program, we understand that
                        making the right career choices is pivotal in shaping
                        your future. Our dedicated team of experts is committed
                        to providing you with personalized guidance and a wide
                        array of support services to ensure your educational
                        journey is smooth and successful.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feat, idx) => (
                        <div
                            className="block rounded-xl border bg-teal-400/80 border-white/10 p-8 shadow transition duration-300 hover:-translate-y-1"
                            key={idx}
                        >
                            <div className="flex gap-2 items-center justify-center">
                                <h2 className="text-lg font-bold text-black text-center">
                                    {feat.title}
                                </h2>
                            </div>
                            <p className="mt-4 text-sm text-gray-800 font-medium text-center">
                                {feat.description}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="my-8 text-slate-500 text-justify">
                    Our specialist counsellors, each with their unique areas of
                    expertise, offer extensive personal guidance on every aspect
                    of overseas education. From selecting schools, colleges, and
                    universities to educational planning, university entry,
                    postgraduate studies, and professional training, we are here
                    to address all your educational needs and concerns. Your
                    journey to a brighter future begins here at FosterMind
                    Overseas Program.
                </p>
            </div>
        </section>
    );
}

export default Compe;
