import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: '11.02.2026',
    title: 'Речевая аналитика ЦРТ оптимизировала более 80% рутины в TruckMotors',
    image: '/images/news/news-1.jpg',
  },
  {
    date: '03.02.2026',
    title: 'YADRO протестировала GigaChat на новых ИИ-серверах собственной разработки',
    image: '/images/news/news-2.jpg',
  },
  {
    date: '29.01.2026',
    title: 'О решении группы ЦРТ «Визирь.СКУД» — на телеканале «Россия»',
    image: '/images/news/news-3.jpg',
  },
];

const News = () => {
  return (
    <section className="news-section" id="news">
      <div className="container">
        <div className="news-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title !mb-0"
          >
            Новости
          </motion.h2>
          <motion.a
            href="#all-news"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="news-view-all"
          >
            Смотреть все
          </motion.a>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="news-card"
            >
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="news-date">{item.date}</span>
              <h3 className="news-title">{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
