import React, {Component} from 'react';
class BlogItems extends Component{
    render(){
        let {bTitle1, bTitle2, bDetails, btnText1, btnText2, image, Pdata} = this.props;
        return(
            <div className="col-lg-4 col-sm-6">
                <div className="blog_post">
                    <div className="blog_img">
                        <img className="img-fluid" src={require ("../../image/" + image)} alt=""/>
                        <div className="post_date">
                            {Pdata}
                        </div>
                    </div>
                    <div className="post_content">
                        <div className="blog-meta">
                            <span>
                                <i className="icon_tags_alt"></i>
                                BY : Mehdi Safari
                            </span>
                        </div>
                        <a href="https://medium.com/@sa.mehdisafari/the-creation-of-jquery-d82672caa6b0" target="_blank"><h2>{bTitle1}</h2></a>
                        <a href="https://medium.com/@sa.mehdisafari/use-yelp-fusion-api-without-cors-errors-9af47e98ac4a" target="_blank"><h2>{bTitle2}</h2></a>
                        <p>{bDetails}</p>
                        <a href="https://medium.com/@sa.mehdisafari/the-creation-of-jquery-d82672caa6b0" target="_blank" className="read_btn">{btnText1}</a>
                        <a href="https://medium.com/@sa.mehdisafari/use-yelp-fusion-api-without-cors-errors-9af47e98ac4a" target="_blank" className="read_btn">{btnText2}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogItems;