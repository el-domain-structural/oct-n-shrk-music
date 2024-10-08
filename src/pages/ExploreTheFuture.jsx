import React from 'react';
import Footer from '../components/Footer';
import ShaderCanvas from '../components/ShaderCanvas';
import '../styles/ExploreTheFuture.css';

const ExploreTheFuture = () => {
  return (
    <div className="explore-future-container">
      <div className="explore-future-content">
        <h1 className="explore-future-title cyber-glitch">Explore the Future</h1>
        <div className="explore-future-shader">
          <ShaderCanvas />
        </div>
        <p className="explore-future-text">
          Welcome to the cutting edge of cybernetic innovation. Here, we push the boundaries of human-machine interaction,
          exploring new frontiers in artificial intelligence, neural interfaces, and augmented reality.
        </p>
        <div className="explore-future-features">
          <div className="feature">
            <h2>AI Integration</h2>
            <p>Discover how AI is reshaping our world and enhancing human capabilities.</p>
          </div>
          <div className="feature">
            <h2>Neural Interfaces</h2>
            <p>Explore direct brain-computer connections that unlock new potentials.</p>
          </div>
          <div className="feature">
            <h2>Augmented Reality</h2>
            <p>Experience a world where digital and physical realities seamlessly merge.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreTheFuture;