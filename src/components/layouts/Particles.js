import React, { useEffect } from "react";
import Particles from "react-particles-js";

export const ParticlesFallingBackground = () => {
  return (
    <div className="particle">
      <Particles
        height="100vh"
        width="100%"
        params={{
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            size: {
              value: 20,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: "/react-transparent.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/typescript.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/javascript.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/nodejs.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/graphql-trans.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/html-logo.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/database-logo.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/python-logo.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/csharp.png",
                  height: 50,
                  width: 50,
                },
                {
                  src: "/angular-logo.png",
                  height: 50,
                  width: 50,
                },
              ],
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 5,
              },
            },
          },
        }}
      />
    </div>
  );
};
export const ParticlesGridBackground = () => {
  return (
    <div className="particle">
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            collisions: {
              enable: true,
            },
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            color: "#000",
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: true,
              color: "#000",
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 6,
                opacity: 0.4,
              },
              push: {
                particles_nb: 5,
              },
            },
            retina_detect: true,
          },
        }}
      />
    </div>
  );
};
