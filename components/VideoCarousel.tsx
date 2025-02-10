"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudDrizzle } from "iconsax-react";

const videos = [
    {
        src: "/videos/video-1.mp4",
        title: "Explore the Future",
        buttonText: "Order your car",
        buttonLink: "https://drizo.uz",
        content: "Looking to sell your old car? Get the best market price and trade up to a newer, more reliable model hassle-free."
    },
    {
        src: "/videos/video-4.mp4",
        title: "Discover Innovations",
        buttonText: "Buy now",
        buttonLink: "https://drizo.uz",
        content: ``
    },
    {
        src: "/videos/video-3.mp4",
        title: "Tasyt coffee",
        buttonText: "Call action",
        buttonLink: "https://drizo.uz",
        content: `Selling or buying a car has never been easier. Enjoy a smooth, transparent, and trusted process with no hidden fees. Drive with confidence!`
    },
];

export default function VideoCarousel() {
    const [currentVideo, setCurrentVideo] = useState(0);

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    // const prevVideo = () => {
    //     setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    // };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.video
                    key={videos[currentVideo].src}
                    src={videos[currentVideo].src}
                    autoPlay
                    muted
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onEnded={nextVideo} // ✅ Switch video only when it ends
                />
            </AnimatePresence>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50">
                <h1 className="text-4xl font-bold">{videos[currentVideo].title}</h1>
                {videos[currentVideo].content && (
                    <p className="md:w-96 bg-white/10 p-5 backdrop-blur rounded-lg shadow w-4/5 my-2 text-sm text-center">
                        {videos[currentVideo].content}
                    </p>
                )}
                <a
                    href={videos[currentVideo].buttonLink}
                    className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                    {videos[currentVideo].buttonText}
                </a>
            </div>
            <div className="absolute top-1 right-1 bg-white/10 py-1 rounded-lg shadow-sm px-3 backdrop-blur-sm">
                <h1 className="text-sm font-medium">Drizo Ads</h1>
            </div>
            <div className="absolute top-1 left-1 bg-white/10 py-1 rounded-lg shadow-sm px-3 backdrop-blur-sm flex gap-4 items-center">
                <CloudDrizzle
                    size="28"
                    color="#ffffff"
                    variant="Outline"
                />
                <div>
                    <h1 className="text-lg font-bold bg-white/20 p-1 rounded-full w-10 h-10 flex items-center justify-center">+5</h1>
                    <p className="text-xs mt-1 font-medium">Drizzle outside</p>
                </div>
            </div>

            {/* Prev & Next Buttons */}
            {/* <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur p-3 rounded-full"
            >
                <ArrowLeft
                    size="32"
                    color="#ffffff"
                    variant="Broken"
                />

            </button> */}
            {/* <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 p-3 rounded-full backdrop-blur"
            >
                <ArrowRight
                    size="32"
                    color="#ffffff"
                    variant="Broken"
                />
            </button> */}
        </div>
    );
}
