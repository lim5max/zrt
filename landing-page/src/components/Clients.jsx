import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: '/images/logos/sber.png', alt: 'Сбер' },
  { src: '/images/logos/rostelecom.png', alt: 'Ростелеком' },
  { src: '/images/logos/phosagro.png', alt: 'ФосАгро' },
  { src: '/images/logos/mosmetro.png', alt: 'Московский метрополитен' },
  { src: '/images/logos/apatit.png', alt: 'Апатит' },
  { src: '/images/logos/sber-ckr.png', alt: 'Сбер CKR' },
  { src: '/images/logos/severstal.png', alt: 'Северсталь' },
  { src: '/images/logos/bank-spb.png', alt: 'Банк Санкт-Петербург' },
];

const Clients = () => {
  return (
    <section className="clients-section" id="clients">
      <div className="clients-marquee-wrapper">
        {/* Marquee area */}
        <div className="clients-marquee-track">
          <div className="clients-marquee-inner">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="clients-marquee-item">
                <img src={logo.src} alt={logo.alt} className="clients-marquee-logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Button on the right */}
        <a href="#clients" className="clients-view-all-btn">
          Смотреть всех
        </a>
      </div>
    </section>
  );
};

export default Clients;
