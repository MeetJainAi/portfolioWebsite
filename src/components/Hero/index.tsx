'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import NeuralNetwork from './NeuralNetwork';
import SocialButton from './SocialButton';
import TypewriterComponent from 'typewriter-effect';

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0">
        <Canvas>
          <NeuralNetwork />
        </Canvas>
      </div>
      
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <TypewriterComponent
              options={{
                strings: ["Hey There! 👋", "I'm Meet Shah"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: "text-[#66a6ff]"
              }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-[#fad0c4]"
          >
            <TypewriterComponent
              options={{
                strings: ["AI | Cloud | DevOps", "Let's Build The Future!"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 space-x-4"
          >
            <SocialButton href="https://github.com/yourusername" icon="github" />
            <SocialButton href="https://linkedin.com/in/yourusername" icon="linkedin" />
            <SocialButton href="/resume.pdf" icon="document" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
