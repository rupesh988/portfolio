import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      {/* Particle Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Behind content
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false }, // Keep inside the div
            particles: {
              number: { value: 100 },
              color: { value: "#000000" },
              opacity: {
                value: 0.2, // Adjust transparency (0 = fully transparent)
                anim: { enable: false },
              },
              size: { value: 3 },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                outMode: "bounce",
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
            },
          }}
        />
      </div>

      {/* Content inside the div */}
      <div
        style={{
          position: "relative",
          zIndex: 2, // Above particles
          color: "white",
          textAlign: "center",
          paddingTop: "150px",
        }}
      >
        <h2>Particles in a Div</h2>
      </div>
    </div>
  );
};

export default ParticleBackground;
