import { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import "./Caribou.css";
import smalldeer from "../../assets/images/smalldeer.svg";

interface CaribouProps {
  color: string
}

export default function Caribou({ color }: CaribouProps) {
  const options = {
    name: "Polygon Mask",
    fullScreen: {
      enable: false
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
      color: {
        value: color
      },
      links: {
        blink: false,
        color: color,
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        limit: 0,
        value: 300,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: {
          min: 0.05,
          max: 0.4
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: color + "33",
        lineWidth: 1
      },
      enable: true,
      move: {
        radius: 10
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 0.5,
      type: "inline",
      url: smalldeer,
    }
  } as ISourceOptions;

  return <Particles
    className="anim-caribou"
    options={options}
  />

}