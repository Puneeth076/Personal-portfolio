import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import Typical from "react-typical";
import { AppWrap, MotionWrap } from '../../wrapper/';

const Header = () => {

  const scaleVariant = {
    whileInView:{
      scale:[0, 1],
      opacity:[0, 1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }


  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 , marginTop: 30}}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Puneeth</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev❤️",
                   1000,
                  "Front End Developer💻",
                   1000,
                  "Back End Developer😍",
                   1000,
                  "Node js developer🤖",
                   1000,
                  "React/React Native developer😎",
                   1000,
                ]}
              />
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="turn on your data" />
        <motion.img
         whileInView={{ scale: [0, 1] }}
         transition={{ duration: 1, ease:"easeInOut" }}
         className="overlay_circles"
         src={images.circle}
        alt="pprofile.circle"
         ></motion.img>
      </motion.div>
    
    
      <motion.div
      variant={scaleVariant}
      whileInView = {scaleVariant.whileInView}
      className="app__header-circles"
      >
        {[images.react,images.figma, images.node].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={'circle-${index'}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>


  );
};

export default AppWrap(
  MotionWrap(Header, 'app__Header'), 
  'Header',
  'app__whitebg');
