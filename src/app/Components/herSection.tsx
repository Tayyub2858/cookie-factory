'use client'
import Image from "next/image";
import logo from "../../../public/Assets/ava logo 3.png";
import navImage from "../../../public/Assets/Component 3.png";
import image1 from "../../../public/Assets/updateimage1-removebg-preview.png";
import image2 from "../../../public/Assets/updateimage2-removebg-preview.png";
import image3 from "../../../public/Assets/updateimage3-removebg-preview.png";
import image4 from "../../../public/Assets/updateimage4-removebg-preview.png";
import image5 from "../../../public/Assets/updateimage5-removebg-preview.png";
import image6 from "../../../public/Assets/updateimage6-removebg-preview.png";
import image7 from "../../../public/Assets/updateimage7-removebg-preview.png";

import updateimage1 from '../../../public/Assets/updateimage1-removebg-preview.png'
import updateimage2 from "../../../public/Assets/updateimage2-removebg-preview.png";
import updateimage3 from "../../../public/Assets/updateimage3-removebg-preview.png";
import updateimage4 from "../../../public/Assets/updateimage4-removebg-preview.png";
import updateimage5 from "../../../public/Assets/updateimage5-removebg-preview.png";
import updateimage6 from "../../../public/Assets/updateimage6-removebg-preview.png";
import updateimage7 from "../../../public/Assets/updateimage7-removebg-preview.png";

import textImage from "../../../public/Assets/AVA’S COOKIE FACTORY.png";
import { useState } from "react";

export default function HeroSection() {
    const initialImages = [
        { src: image1, ringColor: "linear-gradient(359.9deg, #FFECBC 31.28%, #853B2E 50.2%)" },
        { src: image2, ringColor: "linear-gradient(359.9deg, #B63225 20.28%, #FDD597 60.2%)" },
        { src: image3, ringColor: "linear-gradient(359.9deg, #381205 5%, #EED4AD 50%)" },
        { src: image4, ringColor: "linear-gradient(359.9deg, #916D4C 10.28%, #A16A29 50.2%)", },
        { src: image5, ringColor: "linear-gradient(359.9deg, #997c60ff -5.28%, #994B15 20.2%)", },
        { src: image6, ringColor: "linear-gradient(359.9deg, #df75bdff 0.28%, #7e998dff 60.2%)" },
        { src: image7, ringColor: "linear-gradient(359.9deg, #916D4C 20.28%,  #DEC99F 60.2%)" },
    ];

    const updateImages = [
        updateimage1,
        updateimage2,
        updateimage3,
        updateimage4,
        updateimage5,
        updateimage6,
        updateimage7,
    ];

    const gradients = [
        "linear-gradient(359.9deg, #FFECBC 31.28%, #853B2E 50.2%)",
        "linear-gradient(359.9deg, #B63225 20.28%, #FDD597 60.2%)",
        "linear-gradient(359.9deg, #381205 5%, #EED4AD 50%)",
        "linear-gradient(359.9deg, #916D4C 10.28%, #A16A29 50.2%)",
        "linear-gradient(359.9deg, #997c60ff -5.28%, #994B15 20.2%)",
        "linear-gradient(359.9deg, #df75bdff 0.28%, #7e998dff 60.2%)",
        "linear-gradient(359.9deg, #916D4C 20.28%,  #DEC99F 60.2%)",
    ];
    const bottomGradients = [
        "linear-gradient(359.9deg, #853B2E 0%, #FFECBC 90%)",
        "linear-gradient(359.9deg, #FDD597 31.28%, #B63225 80%)",
        "linear-gradient(359.9deg, #EED4AD 20%, #381205 150%)",
        "linear-gradient(359.9deg, #D79A4F 0%, #916D4C 100%)",
        "linear-gradient(359.9deg, #994B15 31.28%, #916D4C 80.2%)",
        "linear-gradient(359.9deg, #63756dff 31.28%, #ca8cb6ff 80.2%)",
        "linear-gradient(359.9deg, #F4DCC2 31.28%, #B07951 80.2%)",
    ];

    const [clickImages, setClickImages] = useState(initialImages);
    const [middleImage, setMiddleImage] = useState(updateImages[1]);
    const [middleGradient, setMiddleGradient] = useState(gradients[0]);
    const [middleGradientBottom, setMiddleGradientBottom] = useState(bottomGradients[0]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [animationClass, setAnimationClass] = useState("animate-slide-down"); // default
    const handleImageClick = (index: number) => {
        if (index === currentIndex) return;

        const newDirectionClass = index > currentIndex ? "animate-slide-down" : "animate-slide-up";

        setAnimationClass("");
        setTimeout(() => {
            setAnimationClass(newDirectionClass);
            setMiddleImage(updateImages[index]);
            setMiddleGradient(gradients[index]);
            setMiddleGradientBottom(bottomGradients[index]);

            const newImages = [...clickImages];
            newImages[index] = {
                ...newImages[index],
                src: updateImages[index],
            };
            setClickImages(newImages);

            setCurrentIndex(index);
        }, 200);
    };




    return (
        <>
            {/* ---------- NAVBAR ---------- */}
            <div className="relative z-10 flex items-start px-8 lg:px-24 lg:py-8 pt-4 h-[80px]">
                {/* Left Logo (40%) */}
                <div className="w-2/5">
                    <div className="inline-block">
                        <Image src={logo} alt="Logo" />
                    </div>
                </div>

                {/* Right Nav Image (Only on md and above) */}
                <div className="w-1/2 hidden md:block ml-[5%]">
                    <Image src={navImage} alt="Nav Banner" className="w-[100%] h-[7vh]" />
                </div>
            </div>



            {/* ---------- MAIN HERO SECTION ---------- */}
            <div className="relative w-full mt-0 px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start pt-[20px] lg:pt-[120px]">

                    {/* === LEFT BLOCK === */}
                    <div className="w-full lg:w-1/3 mb-10 lg:pl-12">
                        <p
                            className={`font-[Noto_Sans] font-extrabold leading-tight tracking-wide text-[#4b1e1e] transition-all duration-200 ease-in-out
                                ${currentIndex === 0 ? "opacity-0" : "opacity-100"}
                                ${[2, 3, 4, 5, 6].includes(currentIndex) ? "text-3xl lg:text-5xl font-extrabold" : "text-[28px] sm:text-[72px] lg:text-[45px]"}
        `}
                        >
                            Every Cookie sold
                            <br />
                            builds confidence,
                            <br />
                            character, and Cash
                            <br />
                            for your{" "}
                            <span className="text-pink-500 drop-shadow-md">Cause</span>
                        </p>


                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-14">
                            <button
                                className="text-[#4b1e1e] font-bold text-sm sm:text-base rounded-[15px] px-6 py-2 w-full sm:w-[200px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 236, 188, 0.5) 0%, rgba(213, 77, 127, 0.5) 100%)",
                                }}
                            >
                                Start A Fundraiser
                            </button>
                            <button
                                className="text-[#994B15] font-bold text-sm sm:text-base rounded-[15px] border-[3px] border-[#381205] px-6 py-2 w-full sm:w-[180px]"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(255, 236, 188, 0) 0%, rgba(255, 118, 237, 0) 100%)",
                                }}
                            >
                                Video Tutorial
                            </button>
                        </div>
                    </div>

                    {/* === MIDDLE BLOCK === */}
                    <div className={`relative w-[80%] lg:max-w-[22%] lg:absolute lg:top-20 lg:right-[34%] ${animationClass}`}>

                        {/* Top Bars */}
                        <div className="absolute top-0 lg:top-[-160px] w-full left-8 z-0 w-full flex flex-col justify-start transition-all duration-700">
                            <div className="flex w-[100%] h-[500px] lg:w-[110%] lg:h-[80vh] gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm p-[3px] transition-all duration-700"
                                        style={{ background: middleGradient }}
                                    >
                                        <div className="w-full h-full bg-transparent rounded-sm"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Image (On Top) */}
                        <div className="relative z-10">
                            <Image
                                key={middleImage.src} // ensures animation triggers
                                src={middleImage}
                                alt="Main Cookie"
                                className="w-full h-[44vh] object-contain ml-10 mt-10 lg:ml-14 lg:mt-0"
                                priority
                            />
                        </div>

                        {/* Bottom Bars */}
                        <div className="hidden md:flex w-[110%] absolute bottom-[-310px] left-8 h-[100px] gap-4 mt-[-40px] z-0 relative transition-all duration-700">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 rounded-sm transition-all duration-700"
                                    style={{ background: middleGradientBottom }}
                                ></div>
                            ))}
                        </div>

                    </div>

                    {/* === RIGHT BLOCK === */}
                    <div className="w-full lg:w-1/3 flex flex-col md:flex-row justify-center items-center gap-6">
                        {/* === Mobile Layout === */}
                        <div className="flex flex-wrap justify-center items-center gap-4 mt-32 md:hidden">
                            {/* First Row (even indexes) */}
                            <div className="flex gap-4">
                                {initialImages.map((cookie, i) => {
                                    if (i % 2 !== 0) return null;
                                    return (
                                        <div
                                            key={`left-sm-${i}`}
                                            onClick={() => handleImageClick(i)}
                                            className="w-16 h-16 rounded-full p-[3px] flex items-center justify-center cursor-pointer"
                                            style={{
                                                background: cookie.ringColor, // gradient as background
                                            }}
                                        >
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                <Image
                                                    src={cookie.src}
                                                    alt={`Cookie ${i}`}
                                                    className="rounded-full object-cover"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Second Row (odd indexes) */}
                            <div className="flex gap-4 mt-4">
                                {initialImages.map((cookie, i) => {
                                    if (i % 2 === 0) return null;
                                    return (
                                        <div
                                            key={`right-sm-${i}`}
                                            onClick={() => handleImageClick(i)}
                                            className="w-16 h-16 rounded-full p-[3px] flex items-center justify-center cursor-pointer"
                                            style={{
                                                background: cookie.ringColor,
                                            }}
                                        >
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                <Image
                                                    src={cookie.src}
                                                    alt={`Cookie ${i}`}
                                                    className="rounded-full object-cover"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Back Button */}
                            <div className="w-16 h-16 rounded-full ring-4 ring-[#4a2c12] flex items-center justify-center mt-4">
                                <span className="text-[#4a2c12] font-bold text-sm">Back</span>
                            </div>
                        </div>



                        {/* === Desktop Layout === */}
                        {/* Left Column (even indexes) */}
                        <div className="hidden md:flex flex-col gap-y-6 items-end lg:mt-8">
                            {initialImages.map((cookie, i) => {
                                if (i % 2 !== 0) return null;
                                return (
                                    <div
                                        key={`left-${i}`}
                                        onClick={() => handleImageClick(i)}
                                        className="w-16 h-16 rounded-full p-[3px] flex items-center justify-center cursor-pointer"
                                        style={{
                                            background: cookie.ringColor, // gradient border
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full bg-[#e485d7ff] flex items-center justify-center">
                                            <Image
                                                src={cookie.src}
                                                alt={`Cookie ${i}`}
                                                className="rounded-full object-cover"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column (odd indexes) */}
                        <div className="hidden md:flex flex-col gap-y-6 items-start lg:mt-8">
                            {initialImages.map((cookie, i) => {
                                if (i % 2 === 0) return null;
                                return (
                                    <div
                                        key={`right-${i}`}
                                        onClick={() => handleImageClick(i)}
                                        className="w-16 h-16 rounded-full p-[3px] flex items-center justify-center cursor-pointer"
                                        style={{
                                            background: cookie.ringColor,
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full bg-[#e485d7ff] flex items-center justify-center">
                                            <Image
                                                src={cookie.src}
                                                alt={`Cookie ${i}`}
                                                className="rounded-full object-cover"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Back Button */}
                            <div className="w-16 h-16 rounded-full p-[3px] flex items-center justify-center"
                                style={{ background: "linear-gradient(359.9deg, #4a2c12, #4a2c12)" }}>
                                <div className="w-full h-full rounded-full bg-[#e485d7ff] flex items-center justify-center">
                                    <span className="text-[#4a2c12] font-bold text-sm sm:text-lg">Back</span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            {/* === Bottom Text Image === */}
            <div className="flex justify-center mt-8 lg:mt-[10%] py-12 px-4 lg:py-[0%] lg:px-[2%]">
                <Image
                    src={textImage}
                    alt="AVA’S COOKIE FACTORY"
                    className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[100%] h-[10vh]"
                />
            </div>

        </>
    );
}
