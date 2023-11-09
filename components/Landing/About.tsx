import React from "react";

const About = () => {
    const about = [
        {
            title: "Extensive Course and Institution Selection",
            desc: "We proudly represent more than 150 esteemed education institutions worldwide. Rest assured, our selection process is rigorous, ensuring that the institutions we work with are reputable and government-approved.",
        },
        {
            title: "Comprehensive Support",
            desc: "We offer a holistic 'one-stop shop' service. Our support begins with helping you choose the most suitable courses and institutions. We continue to guide you through the application process, assist with visa applications, and provide pre-departure services, including accommodation and student loans, among others.",
        },
        {
            title: "Personalized Guidance from Experts",
            desc: "Our team comprises dedicated professionals and counsellors who take immense pride in their work. Our counsellors are rigorously trained, ensuring that they consistently meet the company's high standards for providing the best advice to you.",
        },
        {
            title: "Quality Education for a Bright Future",
            desc: "At FosterMind, we are dedicated to helping you access top-tier education. We believe in quality education that opens doors to a promising future.",
        },
        {
            title: "Pre-Departure Preparation",
            desc: "We understand that the transition to studying abroad can be daunting. That's why we provide pre-departure briefings and training sessions. These opportunities allow you to connect with fellow students headed to the same university or country, easing your journey.",
        },
        {
            title: "Proven Track Record",
            desc: "When it comes to student visas, our track record is exemplary. You can trust our expertise to guide you through the visa application process seamlessly.",
        },
    ];

    return (
        <main id="about" className="w-full h-full scroll-mt-32">
            <main className="py-12 md:py-16 lg:py-32 w-full h-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                <section className="flex flex-col gap-2 h-fit lg:sticky lg:top-32">
                    <p className="text-teal-500 text-2xl md:text-3xl lg:text-4xl font-medium">
                        About
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl !leading-tight font-semibold">
                        How We Can Be Your Ideal Education Partner
                    </h1>
                    <h2 className="text-lg">
                        Your success is our top priority!{" "}
                    </h2>
                    <p className="text-slate-500 text-justify">
                        At FosterMind, we are driven by the unwavering belief
                        that students needs come first. Our dedicated
                        counsellors are committed to assisting you in making
                        well-informed decisions about your educational journey.
                        We do not endorse courses or institutions solely for our
                        benefit; instead, our counsellors work closely with you
                        to identify the options that align perfectly with your
                        goals and aspirations.
                    </p>
                </section>
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {about.map((a, idx) => (
                            <div
                                key={idx}
                                className="bg-teal-200 hover:-translate-y-1 transition-all duration-300 rounded-md p-6 flex flex-col gap-4"
                            >
                                <h1 className="text-xl text-center font-semibold">
                                    {a.title}
                                </h1>
                                <p className="text-slate-800 text-justify md:text-center">
                                    {a.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </main>
    );
};

export default About;
