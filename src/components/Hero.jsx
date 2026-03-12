import React from 'react';
import { motion } from 'framer-motion';
import ParticleLogo from './ParticleLogo';

const Hero = () => {
  return (
    <section className="hero-lusion">
      <div className="container hero-top-container">
        {/* The large image block filling most of the viewport similar to lusion screenshot */}
        <motion.div 
          className="hero-image-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Gradient depth overlay */}
          <div className="hero-depth-overlay" />
          <div className="hero-block-content">
            <motion.h1
              className="hero-giant-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Технологии<br />распознавания<br />речи и биометрии
            </motion.h1>
            <motion.button
              className="hero-giant-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Подробнее
            </motion.button>
          </div>
          <div className="hero-particle-container">
            <ParticleLogo />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
