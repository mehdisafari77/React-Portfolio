import React, {Component} from 'react';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let myData = this.props.myData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{myData.aboutme}</h2>
                                    <h6>{myData.role}</h6>
                                    <p>{myData.aboutdetails}</p>
                                    <a className="theme_btn radius" href='https://drive.google.com/file/d/1Qah5GcU5O40UQ6V9Hmp5nESFuZeghXs5/view?usp=sharing' download="MehdiResume.pdf"  target="_blank">View CV</a>
                                </div>
                                
                            </Fade>
                        </div>
                        {/* <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/1.png')} alt=""/></Reveal>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
