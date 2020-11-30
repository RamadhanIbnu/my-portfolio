import React from 'react'

const About = () => {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>My name is Ramadhan Ibnu Khatamsyah, and you can call me Ibnu. I have bachelor degree in Informatic Engineering from Gunadarma University. I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-device-laptop" />
                </span>
                <div className="desc">
                    <h3>Front-end Web Development </h3>
                    <p>I have experience building Front-end websites using JavaScript, React, HTML, CSS, Bootstrap, Rest API</p>
                </div>
                </div>
            </div>
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div> */}
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back-end Web Development</h3>
                    <p>I have experience building server side websites using Node.js, Express, MySQL, and mongoDB</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  
}

export default About;
