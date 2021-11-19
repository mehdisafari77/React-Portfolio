import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import myData from './component/myData';


export const Home = () => (
  <div className="body_wrapper">
      <Navbar mClass="dark_menu" mContainer="custome_container"/>
      <ParticlesBanner myData={myData}/>
      <About aClass='about_area bg_color' myData={myData}/>
      <Service wClass="work_area_two" myData={myData}/>
      <Portfolio pClass="bg_color"/>
      <Blog/>
      <Contact myData={myData}/>
      <Footer myData={myData}/>
  </div>
)


