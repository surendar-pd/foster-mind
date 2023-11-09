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

function Why() {
    const FEATURES = [
        {
            title: "Global Exposure",
            description:
                "Studying abroad exposes you to a diverse and multicultural environment. It broadens your horizons, allowing you to interact with people from different cultures and backgrounds, fostering a global perspective.",
        },
        {
            title: "Quality Education",
            description:
                "Many countries renowned for their educational institutions, such as the United States, the United Kingdom, Canada, and Australia, offer world-class education. Studying in these countries can provide you with access to top-quality programs and faculty.",
        },
        {
            title: "Specialized Programs",
            description:
                "Foreign universities often offer a wide range of specialized programs and courses that may not be available in India. This enables you to explore niche areas of study and tailor your education to your interests.",
        },
        {
            title: "Research Opportunities",
            description:
                "If you're interested in research, many international universities provide cutting-edge facilities and opportunities to engage in research projects that can significantly boost your academic and professional growth.",
        },
        {
            title: "Language Skills",
            description:
                "Studying in a foreign country provides an excellent opportunity to enhance your language skills. You'll become proficient in the local language, which can be a valuable asset in a global job market.",
        },
        {
            title: "Cultural Immersion",
            description:
                "Living and studying in a new country immerses you in a different culture. You'll gain a deeper understanding of the customs, traditions, and lifestyle of the local people.",
        },
        {
            title: "Career Opportunities",
            description:
                "A degree from an international university can make your resume stand out to potential employers. You may also have access to job opportunities and networks in your host country, increasing your chances of landing a job or internship abroad.",
        },
        {
            title: "Personal Growth",
            description:
                "Studying abroad challenges you to step out of your comfort zone, fostering personal growth, independence, and adaptability. It's a transformative experience that builds character and resilience.",
        },
        {
            title: "Travel Opportunities",
            description:
                ": Being in a new country provides you with the perfect opportunity to explore other nearby destinations. You can travel and experience different cultures and landscapes during your breaks.",
        },
        {
            title: "Global Network",
            description:
                "You'll have the chance to build a global network of friends, colleagues, and mentors. This network can prove invaluable throughout your life, both personally and professionally.",
        },
        {
            title: "Financial Aid and Scholarships",
            description:
                "Many foreign universities offer financial aid and scholarships for international students, making education abroad more affordable than you might think.",
        },
        {
            title: "Exposure to Different Teaching Methods",
            description:
                "Different countries employ various teaching methods and approaches. Studying abroad exposes you to diverse learning techniques, broadening your educational experience.",
        },
        {
            title: "Independence",
            description:
                "Living away from home teaches you to become self-reliant and independent, as you manage day-to-day tasks and make important decisions on your own.",
        },
        {
            title: "Global Perspective",
            description:
                "Gaining a global perspective can be instrumental in understanding global issues, fostering tolerance, and contributing to a more interconnected world.",
        },
    ];
    return (
        <section>
            <div className="w-full p-4 md:px-16 lg:max-w-screen-2xl lg:mx-auto pb-8 md:pb-16 lg:pb-32">
                <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Why study Abroad
                    </h2>
                    <p className="my-4 text-slate-500">
                        Studying abroad offers a multitude of advantages and
                        opportunities, making it an attractive choice for
                        students. Here are some compelling reasons to choose to
                        study abroad.
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                    {FEATURES.map((feat, idx) => (
                        <div
                            className="block rounded-xl self-stretch max-w-sm border bg-teal-400/80 border-white/10 p-8 shadow transition duration-300 hover:-translate-y-1"
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
                    In conclusion, studying abroad from India is an enriching
                    and transformative experience that equips you with a global
                    outlook, a top-tier education, and a competitive edge in the
                    job market. It&apos;s a journey that can lead to personal
                    and professional growth and lifelong memories.
                </p>
            </div>
        </section>
    );
}

export default Why;
