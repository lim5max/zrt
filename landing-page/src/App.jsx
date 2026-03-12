import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import About from './components/About';
import SuccessStories from './components/SuccessStories';
import News from './components/News';
import Clients from './components/Clients';
import Footer from './components/Footer';
import ProductGnom from './components/ProductGnom';

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'products/gnom') return 'gnom';
  return 'home';
}

function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (target) => {
    if (target === 'home') {
      window.location.hash = '';
    } else if (target === 'gnom') {
      window.location.hash = 'products/gnom';
    }
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {page === 'gnom' ? (
          <ProductGnom onBack={() => navigateTo('home')} />
        ) : (
          <>
            <Hero />
            <Stats />
            <Products onProductClick={(id) => { if (id === 'gnom') navigateTo('gnom'); }} />
            <About />
            <SuccessStories />
            <News />
            <Clients />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
