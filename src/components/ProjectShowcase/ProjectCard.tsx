'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;


}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative h-[400px] group perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full preserve-3d"
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-neural/10 p-6 rounded-lg h-full">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-cloud/80 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-electric/20 rounded-full text-xs text-electric"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <div className="bg-neural/10 p-6 rounded-lg h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
              {project.metrics.map((metric, i) => (
                <div key={i} className="mb-3">
                  <div className="text-sm text-cloud/80">{metric.label}</div>
                  <div className="text-electric text-lg font-semibold">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-electric text-space rounded-lg text-sm hover:bg-electric/80 transition-colors"
              >
                View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neural text-cloud rounded-lg text-sm hover:bg-neural/80 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
