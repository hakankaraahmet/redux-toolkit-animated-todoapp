import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Background = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
      }, []);


  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#eba2f5",
        },
        links: {
          color: "#eba2f5",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 0.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
  )
}

export default Background