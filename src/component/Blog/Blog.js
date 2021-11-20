import React , {Component} from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import BlogItems from '../Blog/BlogItems';
import Reveal from 'react-reveal/Reveal/';

class Blog extends Component{
    render(){
        return(
            <section className="blog_area" id="blog">
                <div className="container">
                    <Sectiontitle Title="My Articles" TitleP="Writing is not my power suit, but I wil lalways try my best to help the developer community, just like they help me."/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row container2">
                            <BlogItems bTitle1="Creation of jQuery" bDetails="jQuery is a JavaScript library that was created in order to simplify the DOM tree traversing of HTML...." btnText1="Read More" image="jquery.png" Pdata="Nov 07"/>
                            <BlogItems bTitle2="Yelp Fusion API" bDetails="What does a developer do when they don’t know how to do something? Yeah, you’re right, we google it! That's..." btnText2="Read More" image="Yelp.png" Pdata="Oct 09"/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default Blog;