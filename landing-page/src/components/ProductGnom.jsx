import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Lock,
  AudioWaveform,
  BrainCircuit,
  ChevronRight,
  Phone,
  Headset,
  Cable,
  MonitorDot,
  ShieldCheck,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   FEATURE ROW
   ═══════════════════════════════════════════ */

const FeatureRow = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    className="group grid grid-cols-[auto_1fr] gap-5 py-7 border-b border-dark-blue/[0.06] last:border-0"
  >
    <div className="flex items-start pt-1">
      <div className="w-10 h-10 rounded-lg bg-dark-blue/[0.04] border border-dark-blue/[0.06] flex items-center justify-center transition-all duration-400 group-hover:bg-turquoise/10 group-hover:border-turquoise/20">
        <Icon className="w-4 h-4 text-dark-blue/40 group-hover:text-turquoise transition-colors duration-400" strokeWidth={1.5} />
      </div>
    </div>
    <div>
      <h3 className="font-heading text-lg font-semibold text-dark-blue leading-snug mb-1.5">{title}</h3>
      <p className="text-dark-blue/40 text-[15px] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const features = [
  { icon: AudioWaveform, title: 'Разборчивость речи в сложной акустической обстановке', description: 'Заключение ЭКЦ МВД РФ подтверждает пригодность фонограмм для проведения идентификационных исследований по голосу и речи.' },
  { icon: Zap, title: 'Простота и надёжность использования', description: 'Запись включается одной кнопкой, по таймерам или по акустопуску. Диктофон постоянно находится в режиме ожидания, что позволяет начать запись в течение 0,06 сек.' },
  { icon: Lock, title: 'Четыре степени защиты', description: 'Записанная информация защищена от несанкционированного прослушивания: PIN-код, удостоверяющая подпись, встроенные маркеры и запрет на запись в память по USB-порту.' },
  { icon: Shield, title: 'Защита от устройств подавления аудиозаписи', description: 'Конструктивные особенности диктофонов позволяют защищаться от подавления ультразвуковыми и электромагнитными устройствами.' },
  { icon: Cable, title: 'Аксессуары', description: 'Линейка периферийного оборудования: телефонный адаптер, микрофонная гарнитура, проводной пульт, кабель линейного входа, док-станция.' },
  { icon: BrainCircuit, title: 'Речевые технологии ЦРТ', description: 'Технология распознавания слитной спонтанной русской речи позволяет делать автоматические расшифровки фонограмм и осуществлять поиск по ключевым словам.' },
];

const accessories = [
  { label: 'Телефонный адаптер', icon: Phone },
  { label: 'Микрофонная гарнитура', icon: Headset },
  { label: 'Проводной пульт', icon: MonitorDot },
  { label: 'Кабель линейного входа', icon: Cable },
  { label: 'Док-станция', icon: ShieldCheck },
];

const ease = [0.22, 1, 0.36, 1];

/* ═══════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════ */

const ProductGnom = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section className="container pt-32 pb-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 text-[13px] text-dark-blue/35 mb-3"
        >
          <span className="hover:text-dark-blue/60 cursor-pointer transition-colors" onClick={onBack}>Продукты</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Профессиональные диктофоны</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-dark-blue/70 font-medium">Гном</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="font-heading text-4xl sm:text-5xl md:text-[56px] font-bold text-dark-blue leading-[1.05] tracking-[-0.02em] mb-4"
        >
          Диктофон Гном
        </motion.h1>
        <div className="flex items-end justify-between gap-6 mb-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="text-dark-blue/50 text-xl leading-snug max-w-2xl"
          >
            Записывают в&nbsp;любых условиях. Профессиональный диктофон
            <br />с&nbsp;четырьмя степенями защиты и&nbsp;встроенными речевыми технологиями.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <button className="group relative overflow-hidden bg-dark-blue text-white text-lg font-bold py-[18px] px-10 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,38,59,0.2)]">
              <span className="relative z-10">Купить</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </button>
          </motion.div>
        </div>

        {/* ─── BENTO GRID — asymmetric like reference ─── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-4 mb-10">
          {/* Card 1 — dark, stats (narrow) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="relative overflow-hidden rounded-2xl bg-[#00263b] p-7 md:p-8 flex flex-col justify-between min-h-[360px]"
          >
            {/* Radial dot pattern — concentric circles like reference */}
            <div className="absolute bottom-12 right-0 left-0 flex justify-center opacity-[0.06] pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                {[30, 50, 70, 90].map((r, ri) => (
                  <React.Fragment key={ri}>
                    {Array.from({ length: Math.floor(r * 0.4) }).map((_, di) => {
                      const angle = (di / Math.floor(r * 0.4)) * Math.PI * 2;
                      return (
                        <circle
                          key={`${ri}-${di}`}
                          cx={100 + Math.cos(angle) * r}
                          cy={100 + Math.sin(angle) * r}
                          r={1.2}
                          fill="#009bab"
                        />
                      );
                    })}
                  </React.Fragment>
                ))}
              </svg>
            </div>

            <div>
              <h3 className="text-white/90 text-base font-semibold">Четыре степени защиты информации</h3>
            </div>

            <div>
              <div className="text-6xl md:text-7xl font-heading font-bold text-white leading-none mb-2 tracking-tight">
                0.06<span className="text-turquoise text-xl md:text-2xl ml-1 font-semibold">сек</span>
              </div>
              <span className="text-white/30 text-sm">Старт записи</span>
            </div>
          </motion.div>

          {/* Card 2 — dict2.png (wider, dramatic) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="relative overflow-hidden rounded-2xl bg-[#f0f1f3] min-h-[360px] flex items-end justify-center"
          >
            <img
              src="/dict2.png"
              alt="Гном — вид спереди и сзади"
              className="w-auto max-w-[85%] h-[92%] object-contain object-bottom"
            />
          </motion.div>

          {/* Card 3 — dict1.png (crop/overflow at right edge) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="relative overflow-hidden rounded-2xl bg-[#f0f1f3] min-h-[360px]"
          >
            <img
              src="/dict1.png"
              alt="Гном с гарнитурой"
              className="absolute inset-0 w-full h-full object-contain object-center p-4"
            />
          </motion.div>
        </div>

        {/* Bottom row — title + description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-dark-blue leading-snug">
            Надёжность программного и&nbsp;аппаратного обеспечения
          </h2>
          <p className="text-dark-blue/40 text-[15px] leading-relaxed self-end">
            Заключение ЭКЦ МВД РФ подтверждает пригодность фонограмм для проведения идентификационных исследований по голосу и&nbsp;речи. Диктофон постоянно находится в&nbsp;режиме ожидания, что позволяет начать запись в&nbsp;течение 0,06 сек.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <button className="h-11 rounded-full bg-dark-blue text-white px-7 text-base font-normal tracking-normal flex items-center hover:bg-slate-800 transition-colors">
            Получить предложение
          </button>
        </motion.div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="container py-24 md:py-28 border-t border-dark-blue/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-dark-blue leading-tight">
            Ключевые преимущества
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {features.slice(0, 3).map((f, i) => (
              <FeatureRow key={i} {...f} number={String(i + 1).padStart(2, '0')} index={i} />
            ))}
          </div>
          <div>
            {features.slice(3).map((f, i) => (
              <FeatureRow key={i + 3} {...f} number={String(i + 4).padStart(2, '0')} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACCESSORIES + CTA ─── */}
      <section className="bg-[#f8faff]">
        <div className="container py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-heading text-xl font-semibold text-dark-blue mb-6">Периферийное оборудование</h3>
              <div className="space-y-3">
                {accessories.map((acc, i) => {
                  const AccIcon = acc.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-dark-blue/[0.06] flex items-center justify-center flex-shrink-0">
                        <AccIcon className="w-3.5 h-3.5 text-dark-blue/30" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm text-dark-blue/55 font-medium">{acc.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-heading text-xl font-semibold text-dark-blue mb-3">Гном</h3>
              <p className="text-dark-blue/40 text-sm leading-relaxed mb-6">
                Доступен для покупки юридическими и&nbsp;физическими лицами. Свяжитесь с&nbsp;нами для получения коммерческого предложения.
              </p>
              <div className="p-5 rounded-xl bg-white border border-dark-blue/[0.06] mb-5">
                <div className="text-xs text-dark-blue/30 font-mono tracking-wide mb-1.5">Санкт-Петербург</div>
                <a href="tel:+78123258848" className="text-lg font-heading font-semibold text-dark-blue hover:text-turquoise transition-colors duration-300">
                  +7 (812) 325-88-48
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="h-11 rounded-full bg-dark-blue text-white px-7 text-base font-normal tracking-normal flex items-center hover:bg-slate-800 transition-colors">
                  Получить предложение
                </button>
                <button className="h-11 rounded-full bg-[#FBFBFB] text-dark-blue px-7 text-base font-normal tracking-normal flex items-center border border-black/5 hover:bg-black/10 transition-colors">
                  Купить
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGnom;
