"use client";
import React, { useState } from 'react';
import ProjectHorizontal from './ProjectHorizontal';
import image1 from '@/app/projects/images/coding-1.jpg';
import image2 from '@/app/projects/images/coding-2.jpg';

interface Project {
  images: string[];
  name: string;
  readmeContent: string;
  description: string;
}

interface VerticalCarouselProps {
  project: Project;
  scrollContainerBy: (amount: number) => void;
}

const ProjectVertical: React.FC<VerticalCarouselProps> = ({ project, scrollContainerBy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative h-fit p-4">
        <div className="flex flex-row items-center justify-center w-full h-full transition-transform duration-500" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
            <ProjectHorizontal images={[image1.src, image2.src]} title={project.readmeContent} description={project.description} scrollContainerBy={scrollContainerBy} />
        </div>
    </div>
  );
};

export default ProjectVertical;
