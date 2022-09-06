import { Component, OnInit } from '@angular/core';
import { Container, ISourceOptions, Main } from 'ng-particles';

@Component({
  selector: 'app-ng-particle',
  templateUrl: './ng-particle.component.html',
  styleUrls: ['./ng-particle.component.css']
})
export class NgParticleComponent implements OnInit {

  id: string = 'id';

  constructor() { }

  ngOnInit(): void {
  }

  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "none"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onHover: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#FDC921"
      },
      links: {
        color: "#12212B",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 35
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        random: {
          enable: false,
          minimumValue: 8
        },
        value: 5
      },
    },
    detectRetina: true,
    style: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: '-100'
    }
  };

  particlesLoaded(container: Container): void {
  }

  particlesInit(main: Main): void {
  }

}
