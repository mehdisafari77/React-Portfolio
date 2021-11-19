import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let myData = this.props.myData;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    myData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                        
                        <h6>Made with love by <a href="https://github.com/mehdisafari77">Mehdi Safari</a></h6>
                        <p>© 2021 Mehdi Safari - All Rights Reserved</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;