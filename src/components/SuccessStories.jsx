import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowUpRight } from 'lucide-react';

const clientLogos = [
  { src: '/images/logos/mosmetro.png', alt: 'Московский метрополитен' },
  { src: '/images/logos/sber.png', alt: 'Сбер' },
  { src: '/images/logos/phosagro.png', alt: 'ФосАгро' },
  { src: '/images/logos/rostelecom.png', alt: 'Ростелеком' },
];

const stats = [
  {
    company: 'Московский метрополитен',
    value: '70',
    suffix: '%',
    description: 'Автоматизация обработки обращений пассажиров',
    logo: '/images/logos/mosmetro.png',
    logoAlt: 'Московский метрополитен',
  },
  {
    company: 'Сбер ЦКР',
    value: '138',
    suffix: ' млн ₽',
    description: 'Экономический эффект речевой аналитики за год',
    logo: '/images/logos/sber.png',
    logoAlt: 'Сбер',
  },
  {
    company: 'ФосАгро',
    value: '95',
    suffix: '%',
    description: 'Точность распознавания при шуме >90 дБ',
    logo: '/images/logos/phosagro.png',
    logoAlt: 'ФосАгро',
  },
];

const StatCard = ({ stat, large = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
    className="bg-[#FBFBFB] rounded-2xl flex flex-col p-7 cursor-pointer"
  >
    <div className="flex items-center gap-3 mb-1">
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <img
          src={stat.logo}
          alt={stat.logoAlt}
          className="max-h-8 max-w-8 object-contain"
        />
      </div>
      <span className="font-heading font-semibold text-dark-blue text-sm">
        {stat.company}
      </span>
    </div>
    <div className="font-heading font-bold text-dark-blue tracking-tight leading-none mt-auto pt-5 mb-3 text-5xl">
      {stat.value}
      <span className="text-[0.55em]">{stat.suffix}</span>
    </div>
    <p className="text-sm text-text-main/50 leading-relaxed">{stat.description}</p>
  </motion.div>
);

const SuccessStories = () => {
  return (
    <section className="py-24 md:py-32 bg-white" id="success">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">

              <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1] text-dark-blue mb-5">
                Доказано лидерами отрасли
              </h2>

              <p className="text-lg leading-relaxed text-text-main/50 max-w-md mb-7">
                Наши решения работают в крупнейших компаниях России, повышая эффективность и снижая затраты.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-dark-blue text-white px-7 py-4 rounded-full text-base font-normal tracking-normal transition-all duration-300 hover:bg-slate-800 hover:-translate-y-0.5"
              >
                Все истории успеха
              </a>
            </div>

            <div>
              <p className="text-[15px] text-text-main/50 max-w-sm mb-4 leading-relaxed">
                <span className="font-semibold text-text-main">3 300+ тематик</span> обрабатывает виртуальный помощник Московского транспорта, 260 000+ благодарностей.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {clientLogos.map((logo, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white overflow-hidden ring-2 ring-white shadow-sm"
                    >
                      <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain p-1" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-text-main/40">— 50+ внедрений</span>
              </div>
            </div>
          </motion.div>

          {/* Right column — compact stat cards */}
          <div className="flex flex-col gap-3">
            <StatCard stat={stats[0]} large delay={0.1} />
            <div className="grid grid-cols-2 gap-3">
              <StatCard stat={stats[1]} delay={0.2} />
              <StatCard stat={stats[2]} delay={0.3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
