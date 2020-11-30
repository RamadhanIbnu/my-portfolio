import React, {useState} from 'react'
import {
  slice, concat, 
} from 'lodash';

const DATA = [ 
  {
    name:"My Portfolio",
    description:"Website Portfolio about me and my project, i'm using React, and template from colorlib",
    image:"url(images/project-1.png)",
    linkPorto:"http://my-portfolio.ramadhanibnu.vercel.app/",
    linkImage:"images/project-1.png",
    linkCode:"https://github.com/RamadhanIbnu/my-portfolio"
  },
  {
    name:"Instancee",
    description:"This website has an educational theme, I work with my team to create this website using vanilla javascript, bootstrap, and jquery, I am in charge of the purchasing section such as shopping carts and payments, and several other functions",
    image:"url(images/project-2.png)",
    linkPorto:"https://in5tancee.netlify.app/",
    linkImage:"images/project-2.png",
    linkCode:"https://github.com/respatik/bimbel-online-in5tancee"
  },
  {
    name:"Group-1-Flix",
    description:"This website has the theme of movie streaming, I with my team created this website using references from the GoFlix web, and using vanilla javascript and vanilla css, I work in the Responsive Web Design section with media queries as a point break on a certain screen width",
    image:"url(images/project-3.png)",
    linkPorto:"https://group-1-flix.netlify.app/",
    linkImage:"images/project-3.png",
    linkCode:"https://github.com/mohammedazez/Group-1-Flix"
  },
  {
    name:"Reuce",
    description:"In this project, my team and I created a website that brings together recycling industry and waste owners to make it easier for waste owners to dispose of their trash that can still be recycled and at the same time campaigning about the importance of waste management. And in this project I work in Back-end area but I help Front-end to, like create Add Product section and fixing some bug",
    image:"url(images/project-4.png)",
    linkPorto:"https://reuce-web.netlify.app/",
    linkImage:"images/project-4.png",
    linkCode:"https://github.com/Supreme-Spyro/Reuce-Front"
  }
 ];
// const IMAGE_SRC="https://source.unsplash.com/random";
  const LIMIT = 3;

const  Projects = () => {



  const [showMore,setShowMore] = useState(true);
  const [index,setIndex] = useState(LIMIT);
  const [list,setList] = useState(slice(DATA, 0, index));
  console.log("data index: ", index)

  const loadMore = (e) =>{
    e.preventDefault()
    const newIndex = index + 3 ;
    const newShowMore = newIndex < (DATA.length - 1);
    // const newList =  slice(DATA, 0, newIndex);
    setIndex(newIndex);
    setList(slice(DATA, 0, newIndex));
    setShowMore(newShowMore);
  }

    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              {console.log("data list: ", list)}
              {list.map((item, index) => (
                <div
                  key={index}
                  className="col-md-4"
                  // data-animate-effect="fadeInLeft"
                >
                  <div
                    className="project"
                    style={{ backgroundImage: `${item.image}` }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>
                          <a href={item.linkPorto}>{item.name}</a>
                        </h3>
                        <span>{item.description}</span>
                        <p className="icon">
                          <span>
                            <a href={item.linkPorto} target="_blank">
                              <i className="icon-link" />
                              Link
                            </a>
                          </span>
                          <span>
                            <a href={item.linkImage}>
                              <i className="icon-eye" target="_blank" /> image
                            </a>
                          </span>
                          <span>
                            <a href={item.linkCode} target="_blank">
                              <i className="icon-code-outline" /> Code
                            </a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {showMore && <button onClick={loadMore}> Load More </button>}

              {/* <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/project-1.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">My Portfolio</a>
                      </h3>
                      <span>
                        Website Portfolio about me and my project, i'm using
                        React, and template from{" "}
                        <a
                          href="https://colorlib.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Colorlib
                        </a>{" "}
                        for this website
                      </span>
                      <p className="icon">
                        <span>
                          <a
                            href="http://my-portfolio.ramadhanibnu.vercel.app/"
                            target="_blank"
                          >
                            <i className="icon-link" />
                            Link
                          </a>
                        </span>
                        <span>
                          <a href="images/project-1.png">
                            <i className="icon-eye" target="_blank" /> image
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://github.com/RamadhanIbnu/my-portfolio"
                            target="_blank"
                          >
                            <i className="icon-code-outline" /> Code
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  
}

export default Projects;