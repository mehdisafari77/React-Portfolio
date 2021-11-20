# React-Portfolio

## Deployed Link
https://mehdisafari77.github.io/React-Portfolio/

## Summary
This is a portfolio website wriotten in react.js also making use of SASS for better designing. The portfolio has multiple sections with social links, portfolio positioning, link to repos, and a contact form.

## Gif Of Website

## Gif of Website Responsiveness


## Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/docs/)
* [NPM-Library](https://docs.npmjs.com/)
* [Expres.js](https://expressjs.com/)
* [React.js] (https://reactjs.org/)
* [SASS] (https://sass-lang.com/documentation)
* [Animate.css] (https://animate.style/)

## Installation Steps For Local Running
1. Clone project.
2. Open terminal and run these commands in order
    - npm install
    - npm start

## Code Snippet Of My Home.js 
```javascript
export const Home = () => (
  <div className="body_wrapper">
      <Navbar mClass="dark_menu" mContainer="custome_container"/>
      <ParticlesBanner myData={myData}/>
      <About aClass='about_area bg_color' myData={myData}/>
      <Service wClass="work_area_two" myData={myData}/>
      <Portfolio pClass="bg_color"/>
      <Skill cClass="bg_w"/>
      <Blog/>
      <Contact myData={myData}/>
      <Footer myData={myData}/>
  </div>
)
```

## Author

* **Mehdi Safari**

- [Link to Portfolio Site](https://mehdisafari77.github.io/Basic-Bio/)
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
