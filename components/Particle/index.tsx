import Particles from 'react-tsparticles'

export default function index() {
  return (
      <div></div>
  )
}

// const particlesConfig = {
//   fpsLimit: 60,
//   particles: {
//     number: {
//       value: 0
//     },
//     color: {
//       value: ["#00FFFC", "#FC00FF", "#fffc00"]
//     },
//     shape: {
//       type: ["circle", "square"]
//     },
//     opacity: {
//       value: 1,
//       animation: {
//         enable: true,
//         minimumValue: 0,
//         speed: 2,
//         startValue: "max",
//         destroy: "min"
//       }
//     },
//     size: {
//       value: 7,
//       random: {
//         enable: true,
//         minimumValue: 3
//       }
//     },
//     links: {
//       enable: false
//     },
//     life: {
//       duration: {
//         sync: true,
//         value: 5
//       },
//       count: 1
//     },
//     move: {
//       enable: true,
//       gravity: {
//         enable: true,
//         acceleration: 20
//       },
//       speed: { min: 10, max: 20 },
//       decay: 0.1,
//       direction: "none",
//       straight: false,
//       outModes: {
//         default: "destroy",
//         top: "none"
//       }
//     },
//     rotate: {
//       value: {
//         min: 0,
//         max: 360
//       },
//       direction: "random",
//       move: true,
//       animation: {
//         enable: true,
//         speed: 60
//       }
//     },
//     tilt: {
//       direction: "random",
//       enable: true,
//       move: true,
//       value: {
//         min: 0,
//         max: 360
//       },
//       animation: {
//         enable: true,
//         speed: 60
//       }
//     },
//     roll: {
//       darken: {
//         enable: true,
//         value: 25
//       },
//       enable: true,
//       speed: {
//         min: 15,
//         max: 25
//       }
//     },
//     wobble: {
//       distance: 30,
//       enable: true,
//       move: true,
//       speed: {
//         min: -15,
//         max: 15
//       }
//     }
//   },
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       resize: true
//     }
//   },
//   detectRetina: true,
//   background: {
//     color: "#232323"
//   },
//   emitters: {
//     direction: "none",
//     spawnColor: {
//       value: "#ff0000",
//       animation: {
//         h: {
//           enable: true,
//           offset: {
//             min: -1.4,
//             max: 1.4
//           },
//           speed: 0.1,
//           sync: false
//         },
//         l: {
//           enable: true,
//           offset: {
//             min: 20,
//             max: 80
//           },
//           speed: 0,
//           sync: false
//         }
//       }
//     },
//     life: {
//       count: 0,
//       duration: 0.1,
//       delay: 0.4
//     },
//     rate: {
//       delay: 0.1,
//       quantity: 100
//     },
//     size: {
//       width: 0,
//       height: 0
//     }
//   }
// }