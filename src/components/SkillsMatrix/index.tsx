'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCloud from './SkillCloud';
import { Canvas } from '@react-three/fiber';

const skills = {
  ml: [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'OpenCV',
    'Keras',
    'MLflow'
  ],
  cloud: [
    'AWS',
    'Azure',
    'GCP',
    'Docker',
    'Kubernetes',
    'Terraform'
  ],
  devops: [
    'Jenkins',
    'GitHub Actions',
    'Ansible',
    'GitLab CI',
    'ArgoCD'
  ],
  databases: [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Cassandra',
    'MySQL'
  ]
};

export default function SkillsMatrix() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="min-h-screen bg-space/95 py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-electric">Skills Matrix</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-[600px] relative">
            <Canvas>
              <SkillCloud />
            </Canvas>
          </div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-neural/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-electric">
                  {category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-space/50 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
