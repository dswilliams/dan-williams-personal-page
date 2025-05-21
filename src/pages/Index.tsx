
import React from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
