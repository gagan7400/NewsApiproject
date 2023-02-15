import React   from 'react'
import Usestate from './Hooks/Usestate';
// import Controlled from './component/Controlled';
// import Navbar from './component/Navbar';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { loadSlim } from 'tsparticles-slim';
 
// import Type from './component/Type';
// import Parentlogin from './component/Parentlogin';
// import Lifecycle from './component/Lifecycle';
// 

 function App() {
//   const particlesInit = useCallback(  engine => {
//    loadSlim(engine);
     
// }, []);
 
// const options = useMemo(() => {
//     return {
//       particles:{
//        links:{
//         enable:true
//        },
        
//         move:{
//           enable:true,
//           speed: { min: 1 , max: 10 },
//         },
//         size:{
//           value:{min:1 ,max:5}
//         } , 
//       },
//     }
// }, []);

  return (
    <div>
       
       {/* <Particles   init={particlesInit} options={options} /> */}
      
       {/* <div style={{ fontSize:"50px"}} className='text-info w-50 m-auto  mt-5'>
      <b>  <Type/></b>
       </div> */}

      {/* <Navbar/> */}
      {/* <Lifecycle/>
      <Parentlogin/> */}
      <Usestate/>
    </div>
  )
}
export default App;
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

//  const App = () => {
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     color: {
//                         value: "#0d47a1",
//                     },
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onClick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             quantity: 4,
//                         },
//                         repulse: {
//                             distance: 200,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 particles: {
//                     color: {
//                         value: "#ffffff",
//                     },
//                     links: {
//                         color: "#ffffff",
//                         distance: 150,
//                         enable: true,
//                         opacity: 0.5,
//                         width: 1,
//                     },
//                     collisions: {
//                         enable: true,
//                     },
//                     move: {
//                         directions: "none",
//                         enable: true,
//                         outModes: {
//                             default: "bounce",
//                         },
//                         random: false,
//                         speed: 6,
//                         straight: false,
//                     },
//                     number: {
//                         density: {
//                             enable: true,
//                             area: 800,
//                         },
//                         value: 80,
//                     },
//                     opacity: {
//                         value: 0.5,
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     size: {
//                         value: { min: 1, max: 5 },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     );
// };
// export default App