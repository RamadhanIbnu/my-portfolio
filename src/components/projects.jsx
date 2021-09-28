import React, { useState } from "react";
import { slice, concat } from "lodash";

// Data for Projects
const DATA = [
  {
    name: "My Portfolio",
    description:
      `Website Portfolio about me and my project, i'm using React, and template from <a href="https://colorlib.com/" target="_blank">colorlib</a>`,
    role: "Front-end",
    techStack: "ReactJS, Bootstrap",
    image: "url(images/project-1.png)",
    linkPorto: "http://my-portfolio.ramadhanibnu.vercel.app/",
    linkImage: "images/project-1.png",
    linkCode: "https://github.com/RamadhanIbnu/my-portfolio",
  },
  {
    name: "Instancee",
    description:
      "This website has an educational theme, I work with my team to create this website using vanilla javascript, bootstrap, and jquery, I am in charge of the purchasing section such as shopping carts and payments, and several other functions",
    role: "Front-end",
    techStack: "Boostrap, JQuery, Mockup API",
    image: "url(images/project-2.png)",
    linkPorto: "https://in5tancee.netlify.app/",
    linkImage: "images/project-2.png",
    linkCode: "https://github.com/respatik/bimbel-online-in5tancee",
  },
  {
    name: "Group-1-Flix",
    description:
      "This website has the theme of movie streaming, I with my team created this website using references from the GoFlix web, and using vanilla javascript and vanilla css, I work in the Responsive Web Design section with media queries as a point break on a certain screen width",
    role: "Front-end",
    techStack: "Vanilla CSS, Vanilla JS",
    image: "url(images/project-3.png)",
    linkPorto: "https://group-1-flix.netlify.app/",
    linkImage: "images/project-3.png",
    linkCode: "https://github.com/mohammedazez/Group-1-Flix",
  },
  {
    name: "Reuce",
    description:
      "In this project, My team and I created a website that brings together recycling industry and waste owners to make it easier for waste owners to dispose of their trash that can still be recycled and at the same time campaigning about the importance of waste management. And in this project I work in Back-end area creating Rest API for Front-end with Data Authorization. But I help Front-end to, like create Add Product section and fixing some bug",
    role: "Full-stack",
    techStack: "ReactJS, React Bootstrap, Nodejs, ExpressJS, Mongoose, MongoDB",
    image: "url(images/project-4.png)",
    linkPorto: "https://reuce-web.netlify.app/",
    linkImage: "images/project-4.png",
    linkCode: "https://github.com/Supreme-Spyro/Reuce-Front",
  },
  {
    name: "Store Navee Gold",
    description:
      `Creating store for Naveesgold.id, using templates from <a href="https://themeforest.net/item/affan-pwa-mobile-html-template/29715548?gclid=Cj0KCQjw18WKBhCUARIsAFiW7JxNNGlIPGy-McI39KJLuYTbsKpcr6et9bCALWcSZb2na-wVnhy8wmUaArIpEALw_wcB" target="_blank">Affan - PWA mobile template</a> with vanilla Js, Bootstrap 5, and Ajax. And Has Optimized performance with lighthouse`,
    role: "Frontend",
    techStack: "Vanilla JS, Bootstrap 5, Ajax ",
    image: "url(images/project-5.png)",
    linkPorto: "https://store.naveesgold.id/",
    linkImage: "images/project-5.png",
    linkCode: "#",
  },
  {
    name: "UI Design Otlet Mobile Apps",
    description:
      "Make UI Design & Prototype for PT Veripay Global Indonesia Otlet Mobile Apps, Using Figma.com",
    role: "UI/UX Designer",
    techStack: "Figma",
    image: "url(images/project-6.png)",
    linkPorto: "https://www.figma.com/proto/OvqEw7kgCawnl3xbiMfHwI/Otlet-Apps?node-id=96%3A0&starting-point-node-id=96%3A0",
    linkImage: "images/project-6.png",
    linkCode: "#",
  },
  {
    name: "Otlet Dashboard Admin",
    description:
      `Creating Dashboard Admin for PT. Veripay Global Indonesia Otlet Mobile Apps, using template from <a href='https://themeforest.net/item/cuba-bootstrap-responsive-admin-dashboard-template/27530933' target="_blank">Cuba-Admin Template</a>  with ReactJs, Redux-Persist, Redux-Thunk, Boostrap 4, Leaflet, And Axios`,
    role: "Frontend",
    techStack: "ReactJs, Redux-Thunk, Redux-Persist, Boostrap 4, Leaflet, Axios",
    image: "url(images/project-7.png)",
    linkPorto: "#",
    linkImage: "images/project-7.png",
    linkCode: "#",
  },
];
const LIMIT = 3;

const Projects = () => {
  // state for loadmore
  const [showMore, setShowMore] = useState(true);
  // state for limit data, like how much you want to show your data
  const [index, setIndex] = useState(LIMIT);
  // state for listing DATA
  const [list, setList] = useState(slice(DATA, 0, index));
  console.log("data index: ", index);

  // function for loadmore, when you click the loadmore then this function will give latest value for each state you have
  const loadMore = (e) => {
    e.preventDefault();
    const newIndex = index + 3;
    const newShowMore = index < DATA.length - 1;
    setIndex(newIndex);
    setList(slice(DATA, 0, newIndex));
    setShowMore(newShowMore);
  };

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
              <h2 className="colorlib-heading animate-box">Recent Projects</h2>
            </div>
          </div>
          <div className="row">
            {console.log("data list: ", list)}
            {list.map((item, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="project"
                  style={{ backgroundImage: `${item.image}` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href={item.linkPorto}>{item.name}</a>
                      </h3>
                      <span></span>
                      <p className="icon">
                        <span>
                          <a href={item.linkPorto} target="_blank">
                            <i className="icon-link" />
                            Link
                          </a>
                        </span>
                        <span>
                          <a data-toggle="modal" data-target={`#${index}`}>
                            <i className="icon-eye" target="_blank" /> Detail
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
                <div
                  className="modal fade"
                  id={index}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3
                          className="modal-title"
                          id="exampleModalLabel"
                          style={{ textAlign: "center" }}
                        >
                          {item.name}
                        </h3>
                      </div>
                      <div className="modal-body">
                        <p>
                          Description:
                          <br />
                          <div dangerouslySetInnerHTML={{ __html: item.description }}/>
                          {/* {item.description} */}
                        </p>
                        <p>
                          Role:
                          <br />
                          {item.role}
                        </p>
                        {console.log("data tech stack: ", item.techStack)}
                        <p>
                          Tech Stack:
                          <br />
                          {item.techStack}
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {showMore && (
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <a
                      onClick={loadMore}
                      className="btn btn-primary btn-lg btn-load-more"
                    >
                      Load more <i className="icon-reload" />
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
