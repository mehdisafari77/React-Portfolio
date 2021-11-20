import React, {Component} from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

class Service extends Component{
    render(){
        let myData = this.props.myData;
        var {wClass} = this.props
        return(
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="What I'm Doing" TitleP="I love what I do. I take great pride in what I do."/>
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                myData.service && myData.service.map(item =>{
                                return(
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                                <i className={item.iconName}></i>
                                                <p><h2 className="t_color">{item.serviceTitle}</h2></p>
                                                <p>{item.sDetails}</p>
                                            </div>
                                        </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;