import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import About from './components/About';
import SuccessStories from './components/SuccessStories';
import News from './components/News';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <About />
        <SuccessStories />
        <News />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
