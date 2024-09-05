"use client";
import Link from "next/link";
import docImage from "@/app/images/pavithra-photo.jpg";
import NavBar from "../components/NavBar";
import React, { useRef, useEffect, useState } from "react";
import image1 from '@/app/projects/images/coding-1.jpg';
import image2 from '@/app/projects/images/coding-2.jpg';
import image3 from '@/app/projects/images/coding-3.jpg';
import image4 from '@/app/projects/images/coding-4.jpg';
import ProjectVertical from "./components/ProjectVertical";

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  interface Repo {
    images: string[],
    name: string;
    description: string;
  }

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github-repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      }
    }

    fetchRepos();
  }, []);

  // const projects = [
  //   {
  //     images: [image1.src, image2.src],
  //     title: 'Volunteering Application with Integrated SDG Classification',
  //     description: 'Flutter-based iOS application for a volunteering platform, designed to connect interested volunteers to non-profit organisations. Integrated with Sustainability Development Goal (SDG) Classification for volunteer opportunities based on SDGs defined by the UN.',
  //   },
  //   {
  //     images: [image3.src, image4.src],
  //     title: 'Project 2',
  //     description: 'Description of Project 2.',
  //   },
  //   {
  //     images: [image3.src, image4.src],
  //     title: 'Volunteering Application with Integrated SDG Classification',
  //     description: 'Flutter-based iOS application for a volunteering platform, designed to connect interested volunteers to non-profit organisations. Integrated with Sustainability Development Goal (SDG) Classification for volunteer opportunities based on SDGs defined by the UN.',
  //   },
  //   {
  //     images: [image1.src, image2.src],
  //     title: 'Project 2',
  //     description: 'Detailed description of Project 2.',
  //   },
  // ];

    const scrollContainerBy = (amount: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: amount,
                behavior: 'smooth',
            });
        }
    };

  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <div ref={scrollContainerRef} className="mt-52 flex flex-col w-full max-h-[calc(100vh-4rem)] overflow-y-auto">
        {repos.map((repo, index) =>
            <div className='flex flex-col relative mt-[50px] mb-[85px] items-center border-2 border-white border-dotted p-2 rounded-xl self-center z-20 w-3/4 h-[490px]'>
                <ProjectVertical key={index} project={repo} scrollContainerBy={scrollContainerBy}/>
            </div>
        )}
      </div>
    </div>
  );
}
