import Link from 'next/link';
import React from 'react'
import { RiArtboard2Fill } from "react-icons/ri";
interface BoardOfDirectorsPage {
    name: string;
    title: string;
    image: string;
    bio: string;
    link: string;
}
export default function BoardOfDirectorsPage() {
    const directors = [
        {
            name: "Architect Md. Mamunur Rahman (Munim)",
            title: "MANAGING DIRECTOR",
            image: "/img/bod-01.png",
            bio: "Our managing director Architect Md Mamunur Rahman (Munim) plays a pivotal role as an organizer at BIOBUILD Development Ltd,",
            link: "/managing-director",
        },
        {
            name: "M. M. Rahman Mamun",
            title: "DEPUTY MANAGING DIRECTOR",
            image: "/img/mamun.png",
            bio: "Since 2012, M. M. RAHMAN MAMUN has been actively engaged in the Real Estate Industry, bringing with him extensive expertise, deep sincerity, and unwavering dedication. He is one of the owners and business partners",
            link: "/deputy-md" // Added missing link property
        },
        {
            name: "Md. Sujal Ahmed Talukder",
            title: "DIRECTOR & CEO",
            image: "/img/bod-03.png",
            bio: "Our journey begins with a shared vision—to create innovative, eco-friendly spaces that not only redefine urban living but also contribute to a sustainable future. As an ex cadet and member of Cadet College Club ltd,",
            link: "#" // Added missing link property
        },
        {
            name: "Architect Mir Ashiqur Rahman",
            title: "DIRECTOR",
            image: "/img/bod-04.png",
            bio: "With a keen eye for detail, the director of BIOBUILD, Architect Mir Ashiqur Rahman, has a hunger for innovative and sustainable solutions that meet the needs of people and environment. At the heart of Architect Mir Ashiqur",
            link: "#" // Added missing link property
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="px-4 py-20 text-center bg-gray-100 dark:bg-gray-800">
                <h2 className='text-center text-xl md:text-3xl py-10'>
                    <span className="relative inline-block text-gray-900 dark:text-gray-50">
                        Board of Directors
                        {/* Before and after lines with rings and a star in the center */}
                        <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                            {/* Left Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                            </div>
                            {/* Center Icon */}
                            <span className="z-20 bg-gray-50 dark:bg-gray-800 px-1">
                                <RiArtboard2Fill className="w-6 h-6 sm:w-8 sm:h-8 text-[#7AA859]" />
                            </span>
                            {/* Right Line and Ring */}
                            <div className="relative flex items-center">
                                <span className="w-16 sm:w-20 border-t-2 border-[#7AA859]"></span>
                                <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#7AA859] rounded-full bg-white dark:bg-gray-800"></span>
                            </div>
                        </span>
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                    Meet the leadership team behind our vision, standards, and operational excellence.
                </p>
            </section>

            {/* Directors Grid */}
            <section className="px-4 py-7 md:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {directors.map((director, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-[#7AA859] dark:border-[#7aa859e3]"
                                />
                                <h3 className="dark:text-gray-50">{director.name}</h3>
                                <p className="text-[#7AA859] dark:text-[#7aa859e3] text-sm mb-2">{director.title}</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{director.bio}</p>
                                <button className="px-4 py-2 bg-[#7AA859] hover:bg-[#6a974f] text-white rounded-lg transition-colors duration-300 text-sm">
                                    <Link href={director.link}>View Details</Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="px-4 py-16 bg-[#7AA859] text-white text-center">
                <h2 className="text-gray-50 mb-4">Guided by Vision, Driven by Purpose</h2>
                <p className="max-w-2xl mx-auto mb-6 text-gray-50">
                    Our board ensures every decision aligns with our core values: safety, trust, professionalism, and service excellence.
                </p>
            </section>
        </div>
    );
}