"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import django from '@/app/images/skills/django.png';
import flutter from '@/app/images/skills/flutter.png';
import sqlite from '@/app/images/skills/sqlite.jpeg';
import python from '@/app/images/skills/python.jpeg';
import Link from "next/link";

interface HorizontalCarouselProps {
    images: string[];
    title: string;
    description: string;
    scrollContainerBy: (amount: number) => void;
}

const ProjectHorizontal : React.FC<HorizontalCarouselProps> = ({images, title, description, scrollContainerBy}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative overflow-hidden w-4/5 h-96">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="flex flex-row flex-shrink-0 h-96">
                        <img src={img} alt={`Slide ${index}`} className="w-96 h-full object-cover rounded-xl shadow-outside shadow-custom-end" />
                        <div className="flex flex-col items-center justify-items-evenly ml-4 mr-4 w-[600px]">
                            <h2 className="text-3xl font-bold text-center text-white mt-2">{title}</h2>
                            <p className="mt-2 mb-4 text-lg text-custom-nav-bg">{description}</p>
                            <h2 className="mt-8 text-2xl font-bold text-white">TECH STACK</h2>
                            <div className="mt-5 flex flex-row justify-evenly">
                            <figure>
                                <img src={flutter.src} className="w-20 h-20 rounded-xl mx-8 object-cover shadow-md shadow-custom-mid" />
                                <figcaption className="mt-1 text-lg text-center text-custom-nav-bg">
                                    Flutter
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={django.src} className="w-20 h-20 rounded-xl mx-8 object-cover shadow-md shadow-custom-mid" />
                                <figcaption className="mt-1 text-lg text-center text-custom-nav-bg">
                                    Django
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={python.src} className="w-20 h-20 rounded-xl mx-8 object-cover shadow-md shadow-custom-mid" />
                                <figcaption className="mt-1 text-lg text-center text-custom-nav-bg">
                                    Python
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={sqlite.src} className="w-20 h-20 rounded-xl mx-8 object-cover shadow-md shadow-custom-mid" />
                                <figcaption className="mt-1 text-lg text-center text-custom-nav-bg">
                                    SQLite
                                </figcaption>
                            </figure>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <button onClick={prevSlide} className="fixed left-[75px] bottom-[160px] transform -translate-y-1/2 p-2 nav-gradient rounded-lg text-white">
                    <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="fixed right-[75px] bottom-[160px] transform -translate-y-1/2 p-2 nav-gradient rounded-lg text-white">
                    <ChevronRight />
                </button>
                <button onClick={() => scrollContainerBy(570)} className="flex flex-row justify-center absolute top-[420px] left-[106px] p-2 w-5/6 border-white scroll-button rounded-lg text-xl text-white">
                    <ChevronDown className="size-10"/>
                </button>

                <button onClick={() => scrollContainerBy(-570)} className="flex flex-row justify-center absolute bottom-[420px] left-[106px] p-2  w-5/6 border-white scroll-button rounded-lg text-xl text-white ">
                    <ChevronUp className="size-10"/>
                </button>

        </div>
      );
}

export default ProjectHorizontal;