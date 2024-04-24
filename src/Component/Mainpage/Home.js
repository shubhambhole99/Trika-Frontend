import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../Layout/Footer'
import Marquee from '../Marquee/Marquee';
import Carsoule from './Carsoule';
import Motivation from './Motivation';
import Service from './Service';
import Homeblog from './Homeblog';

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <Carsoule />
        {/* Header Main Area End Here */}
        {/* page content */}
        <div className="page-content pbmit-bg-color-light">
          {/* Marquee */}
          <Marquee />
          {/* Marquee end */}
          {/* Tab Start */}
          <Motivation />
          {/* Tab end */}
          {/* Ihbox Start */}
          <section className="ihbox-section_three">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">13+ years experience</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          My 13-year yoga journey has been a profound voyage of self-discovery, from healing to teaching,
                          marked by growth, evolution, and unwavering commitment.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">01</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-4" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">Personal approach</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                          Empowering you through personalized solutions, we tailor our services to suit your unique needs, ensuring every interaction is meaningful and impactful.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">02</div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="pbmit-ihbox-style-7">
                    <div className="pbmit-ihbox-box">
                      <div className="pbmit-icon-wrapper d-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose-9" />
                            </div>
                          </div>
                        </div>
                        <h2 className="pbmit-element-title">Balancing Body, Mind, and Spirit.</h2>
                      </div>
                      <div className="pbmit-content-wrapper">
                        <div className="pbmit-heading-desc">
                        With over 2,685 hours of teaching experience, we bring a wealth of
                         expertise and dedication to every yoga session, 
                        guiding you towards profound transformations and holistic well-being.
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-ihbox-box-number">03</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Ihbox End */}
          {/* Service Start */}
          <Service />
          {/* Service End */}
          {/* Blog Start */}
          <Homeblog/>
          {/* Blog End */}
        </div>
        {/* page content End */}
        {/* footer */}
        <Footer />
        {/* footer End */}
      </div>
      {/* page wrapper End */}
      {/* Search Box Start Here */}
      <div className="pbmit-search-overlay">
        <div className="pbmit-icon-close">
          <svg
            className="qodef-svg--close qodef-m"
            xmlns="http://www.w3.org/2000/svg"
            width="28.163"
            height="28.163"
            viewBox="0 0 26.163 26.163"
          >
            <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
            <rect
              width={36}
              height={1}
              transform="translate(0 25.456) rotate(-45)"
            />
          </svg>
        </div>
        <div className="pbmit-search-outer">
          <form className="pbmit-site-searchform">
            <input
              type="search"
              className="form-control field searchform-s"
              name="s"
              placeholder="Search …"
            />
            <button type="submit" />
          </form>
        </div>
      </div>
      {/* Search Box End Here */}
      {/* Scroll To Top */}
      <div className="pbmit-progress-wrap">
        <svg
          className="pbmit-progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  )
}

export default Home
