import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { value: '35 лет', label: 'R&D в области технологий и ИИ' },
  { value: '5000+', label: 'Реализованных проектов' },
  { value: '80+', label: 'Стран присутствия' },
  { value: '2 офиса', label: 'в Санкт-Петербурге и Москве' }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="hidden md:block w-px h-16 bg-dark-blue/15" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="stat-card"
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
