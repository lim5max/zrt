import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-layout">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content"
          >
            <h2 className="section-title">О компании</h2>
            <p className="about-highlight">
              <span className="text-turquoise">Группа компаний ЦРТ</span> — глобальный разработчик продуктов и решений на основе разговорного ИИ, машинного обучения и компьютерного зрения.
            </p>
            <p className="about-text">
              Более 35 лет мы создаём технологии в области речевой аналитики, генеративного ИИ, лицевой и голосовой биометрии. Наши решения работают в 80+ странах мира.
            </p>
            <a href="#products" className="about-btn">Подробнее</a>
          </motion.div>

          <div className="about-collage">
            <motion.div
              className="about-img about-img-1"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/images/about/team-2.png" alt="Офис ЦРТ" />
            </motion.div>

            <motion.div
              className="about-img about-img-2"
              initial={{ opacity: 0, y: -30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <img src="/images/about/team-1.jpg" alt="Команда ЦРТ" />
            </motion.div>

            <motion.div
              className="about-img about-img-3"
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img src="/images/about/team-3.png" alt="Технологии ЦРТ" />
            </motion.div>

            <motion.div
              className="about-img about-img-4"
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <img src="/images/about/office-1.jpg" alt="Проекты ЦРТ" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
