import React, { useState } from 'react';
import { Plus, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const footerSolutions = [
  'Государственные структуры',
  'Здравоохранение и социальные службы',
  'Финансовые организации',
  'Энергетика и промышленные предприятия',
  'Телекоммуникации',
  'Транспорт и логистика',
  'Образовательные учреждения',
  'Контактные центры',
  'Ритейл',
  'Судебная система',
];

const footerProducts = [
  'Запись разговоров',
  'Речевое оповещение',
  'Видеопротоколирование',
  'ИИ для контакт-центров',
  'Биометрический контроль',
  'Шумоочистка',
  'Микрофоны и усилители',
  'Видеонаблюдение',
  'Распознавание речи',
  'Диктофоны',
];

const footerCompany = [
  'Новости',
  'Контакты',
  'Комплаенс',
  'Истории успеха',
  'Партнерам',
  'Обучение',
  'Поддержка',
  'Карта сайта',
];

const Footer = () => {
  const [agreed, setAgreed] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <footer className="bg-dark-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-turquoise/3 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container relative">

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="pt-28 pb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-14 text-white">
            Обсудить, посоветоваться, спросить
          </h2>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0" onSubmit={(e) => e.preventDefault()}>

            {/* Left column */}
            <div className="flex flex-col">
              {[
                { num: '01', label: 'Меня зовут', type: 'text', placeholder: 'Ваше имя' },
                { num: '02', label: 'Я работаю в компании', type: 'text', placeholder: 'Название компании' },
                { num: '03', label: 'Связаться со мной по e-mail', type: 'email', placeholder: 'Ваш e-mail' },
                { num: '04', label: 'Позвонить мне', type: 'tel', placeholder: 'Ваш номер телефона' },
              ].map((field, i) => (
                <div key={i} className={`py-6 border-b border-white/[0.06] ${i === 3 ? 'lg:border-b-0' : ''}`}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-turquoise text-lg font-mono">{field.num}</span>
                    <span className="text-white text-xl font-medium">{field.label}</span>
                  </div>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-none text-2xl md:text-3xl text-white/40 placeholder:text-white/20 focus:text-white focus:outline-none py-1 pl-9 transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col">
              {/* Message */}
              <div className="py-6 border-b border-white/[0.06]">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-turquoise text-lg font-mono">05</span>
                  <span className="text-white text-xl font-medium">Сообщение</span>
                </div>
                <textarea
                  placeholder="Опишите задачу или загрузите описание ниже"
                  className="w-full bg-transparent border-none text-2xl text-white/40 placeholder:text-white/20 focus:text-white focus:outline-none py-1 pl-9 resize-none min-h-[56px] transition-colors"
                />
              </div>

              {/* Add file */}
              <div className="py-5 border-b border-white/[0.06]">
                <button type="button" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
                  <Plus className="w-5 h-5 text-turquoise" />
                  <span className="text-lg font-medium">Добавить файл</span>
                </button>
                <p className="text-sm text-white/25 mt-2 pl-8">Можно загрузить один файл размером максимум 15 Мб</p>
              </div>

              {/* Checkboxes */}
              <div className="py-4 flex flex-col gap-3">
                {[
                  {
                    checked: agreed,
                    onChange: () => setAgreed(!agreed),
                    label: <>Я прочитал <a href="#" className="underline text-white/70 hover:text-white transition-colors">политику обработки персональных данных</a> и даю согласие на обработку своих данных</>,
                  },
                  {
                    checked: newsletter,
                    onChange: () => setNewsletter(!newsletter),
                    label: 'Я хочу получать новости от роботов',
                  },
                ].map((cb, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input type="checkbox" checked={cb.checked} onChange={cb.onChange} className="sr-only peer" />
                      <div className="w-5 h-5 border-2 border-white/20 rounded-sm peer-checked:bg-turquoise peer-checked:border-turquoise transition-all duration-200 flex items-center justify-center">
                        {cb.checked && (
                          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-base text-white/50 leading-relaxed">{cb.label}</span>
                  </label>
                ))}
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="group relative overflow-hidden bg-turquoise text-white text-lg font-bold py-[22px] px-12 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,155,171,0.3)]"
                >
                  <span className="relative z-10">
                    Отправить
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* ═══════════════ SOLUTIONS — pill tag cloud ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/[0.06] pt-10 pb-8"
        >
          <div className="flex items-center gap-4 mb-5">
            <h4 className="font-heading text-2xl font-semibold text-white">Готовые решения</h4>
            <div className="flex-1 h-px bg-gradient-to-r from-turquoise/20 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-2">
            {footerSolutions.map((item, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[15px] text-white/60 transition-all duration-300 hover:border-turquoise/40 hover:bg-turquoise/[0.07] hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════ PRODUCTS — pill tags ═══════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/[0.06] pt-16 pb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <h4 className="font-heading text-2xl font-semibold text-white">Продукты</h4>
            <div className="flex-1 h-px bg-gradient-to-r from-turquoise/20 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {footerProducts.map((item, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative px-5 py-2.5 rounded-full border border-turquoise/[0.12] bg-turquoise/[0.04] text-[15px] text-white/60 transition-all duration-300 hover:border-turquoise/40 hover:bg-turquoise/[0.1] hover:text-white hover:shadow-[0_0_20px_rgba(0,155,171,0.12)]"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════ COMPANY NAV + CONTACTS — split layout ═══════════════ */}
        <div className="border-t border-white/[0.06] pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-12 lg:gap-8">

            {/* Company nav — large bold links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-heading text-2xl font-semibold text-white mb-6 flex items-center gap-4">
                Компания
                <span className="flex-1 h-px bg-gradient-to-r from-turquoise/20 to-transparent lg:hidden" />
              </h4>
              <div className="flex flex-col">
                {footerCompany.map((link, j) => (
                  <a
                    key={j}
                    href="#"
                    className="group flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0 transition-colors hover:border-turquoise/20"
                  >
                    <span className="text-base text-white/50 group-hover:text-white transition-colors duration-200">
                      {link}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-turquoise transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* SPb contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-white/[0.04] p-7 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/[0.06] rounded-full blur-[50px] translate-x-8 -translate-y-8 group-hover:bg-turquoise/[0.15] transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-turquoise" />
                  </div>
                  <span className="font-heading text-xl font-semibold text-white">Санкт-Петербург</span>
                </div>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  Выборгская набережная, д. 45, лит. Е
                </p>
                <a
                  href="tel:+78123258848"
                  className="inline-flex items-center gap-3 text-white font-heading text-2xl font-semibold hover:text-turquoise transition-colors"
                >
                  <Phone className="w-5 h-5 text-turquoise/70" />
                  +7 (812) 325 88 48
                </a>
              </div>
            </motion.div>

            {/* Moscow contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-white/[0.04] p-7 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/[0.06] rounded-full blur-[50px] translate-x-8 -translate-y-8 group-hover:bg-turquoise/[0.15] transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-turquoise" />
                  </div>
                  <span className="font-heading text-xl font-semibold text-white">Москва</span>
                </div>
                <p className="text-white/50 text-base leading-relaxed mb-6">
                  2-ой Сыромятнический переулок, дом 1
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+74956697440"
                    className="inline-flex items-center gap-3 text-white font-heading text-2xl font-semibold hover:text-turquoise transition-colors"
                  >
                    <Phone className="w-5 h-5 text-turquoise/70" />
                    +7 (495) 669 74 40
                  </a>
                  <a
                    href="tel:+74956697444"
                    className="inline-flex items-center gap-3 text-white font-heading text-2xl font-semibold hover:text-turquoise transition-colors"
                  >
                    <Phone className="w-5 h-5 text-turquoise/70" />
                    +7 (495) 669 74 44
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ═══════════════ BOTTOM BAR ═══════════════ */}
        <div className="border-t border-white/[0.08] py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-center gap-5">
            <p className="text-white/50 text-sm">&copy; Группа компаний ЦРТ 2001–2026</p>
            {/* VK */}
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-turquoise/40 hover:bg-turquoise/[0.06] transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 14.27h-1.71c-.65 0-.85-.52-2.01-1.7-1.02-1-1.46-1.12-1.71-1.12-.35 0-.45.1-.45.58v1.56c0 .41-.13.66-1.22.66-1.8 0-3.8-1.09-5.21-3.13C3.74 10.38 3.2 8.28 3.2 7.81c0-.25.1-.48.58-.48h1.71c.44 0 .6.19.77.65.84 2.44 2.26 4.58 2.84 4.58.22 0 .32-.1.32-.66V9.72c-.07-1.12-.65-1.22-.65-1.62 0-.19.16-.39.42-.39h2.69c.37 0 .5.19.5.62v3.39c0 .37.16.5.27.5.22 0 .4-.13.8-.53 1.24-1.39 2.13-3.53 2.13-3.53.12-.25.32-.48.76-.48h1.71c.51 0 .63.27.51.62-.22 1.02-2.36 4.03-2.36 4.03-.19.3-.26.44 0 .78.19.25.8.78 1.21 1.25.76.85 1.34 1.56 1.5 2.06.17.48-.08.73-.56.73z"/></svg>
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors duration-200">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/70 transition-colors duration-200">Обработка персональных данных</a>
            <span className="hidden lg:inline text-white/30">Информация на сайте не является публичной офертой</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
