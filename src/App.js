import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './assets/css/index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;