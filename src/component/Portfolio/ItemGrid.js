import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
            
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            <ul className="list_style portfolio_menu text-center">
                <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>
                <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}>Web Development</li>
                <li className={`${this.onActive(`develop`)}`} data-wow-delay="0.6s" data-filter="develop" onClick={()=> {this.onFilterChange("develop")}}>Mobile Development</li>
                <button className="btn send_btn theme_btn">
                    <a href="https://github.com/mehdisafari77?tab=repositories" target="_blank">View Github Repos</a>
                </button>
            </ul>	

            <div className="grid row">
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item tech develop">
                    <div className="portfolio hover-style">
                        <img src={require('../../images2/gifs/1.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Insta Clone</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/InstagramSwiftUI-MVVM-" target="_blank"><i className="social_share"></i></a>
                                    <p>Live Not available</p>
                                </div>
                            </div>
                        </div>						
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item tech develop">
                    <div className="portfolio hover-style">
                    <img src={require('../../images2/gifs/2.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Chat App</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/SwiftUIChatApp" target="_blank"><i className="social_share"></i></a>
                                    <p>Live Not available</p>
                                </div>
                            </div>
                        </div>
                    </div>						
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                    <img src={require('../../images3/gif1.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">The Holy Hour</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/holy-hour" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://mehdisafari77.github.io/holy-hour/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/1img.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Budget Tracker</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Budget-Tracker" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://budget-tracker-mehdi.herokuapp.com/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/gif3.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Code Quiz</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Code-Quiz" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://mehdisafari77.github.io/Code-Quiz//" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/gif4.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Portfolio Design</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Basic-Bio" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://mehdisafari77.github.io/Basic-Bio/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/2img.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Currency Converter</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/CurrencyConverter" target="_blank"><i className="social_share"></i></a>
                                    <p>Live Not available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/3img.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Tic Tac Toe</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/TicTactToe" target="_blank"><i className="social_share"></i></a>
                                    <p>Live Not available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/2giffy.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Note Taker</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Note-Taker" target="_blank"><i className="social_share"></i></a>
                                    <p>Live Not available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/gif5.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Scheduler</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Work-Day-Scheduler" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://mehdisafari77.github.io/Work-Day-Scheduler/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/gif2.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Weather Forecaster</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Weather-Forecast-Dashboard" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://mehdisafari77.github.io/Weather-Forecast-Dashboard/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img src={require('../../images3/4img.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Workout Tracker</h6>
                                <div className="icons">
                                    <a href="https://github.com/mehdisafari77/Workout-Tracker" target="_blank"><i className="social_share"></i></a>
                                    <a href="https://workout-tracker-mehdi.herokuapp.com/" target="_blank"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                       
            </div>
        </div>
        )
    }
  }

  export default ItemGrid;
