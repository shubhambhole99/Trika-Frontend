import React, { useState, useEffect } from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MediaComponent from '../MediaComponent/Media'
import Banner from '../../About/Banner';

function Blogdetail() {
    const [slides, setSlides] = useState([]);
    const param = useParams()
    console.log(param.id, 'd')
    useEffect(() => {
        axios.get(`https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/blog/${param.id}`)
            .then(response => {
                
                setSlides(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="page-wrapper">
                <Header />
                <Banner />
              
                <div className="page-content">
                    <section className="site_content blog-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 blog-right-col">

                                    <article key={slides.heading}>
                                        <div className="post blog-classic">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div className="pbmit-featured-wrapper">
                                                    <MediaComponent control={1} className="img-fluid" src={slides.image} style={{ width: '60%' ,marginLeft:'20%' ,borderRadius:'20px'}} />
                                                </div>
                                            </div>
                                            <div className="pbmit-blog-classic-inner">
                                                <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                    {/* Meta Info */}
                                                </div>
                                                <div className="pbmit-entry-content">
                                                    <p >{slides.tagline}</p>
                                                    <p className="pbmit-firstletter">{slides.description}</p>
                                                    {/* Map date here */}
                                                    <p>Date: {new Date(slides.date).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                                <div className="col-md-12 col-lg-3 blog-left-col">
                                    <aside className="sidebar">
                                        <aside className="widget widget-recent-post">
                                            <h2 className="widget-title">Recent Post </h2>
                                            <ul className="recent-post-list">
                                                <li className="recent-post-list-li">
                                                    <a className="recent-post-thum" href="blog-details.html">
                                                        <img
                                                            src="images/recent-post/blog-01.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <div className="pbmit-rpw-content">
                                                        <span className="pbmit-rpw-date">
                                                            <a href="blog-details.html">August 29, 2023</a>
                                                        </span>
                                                        <span className="pbmit-rpw-title">
                                                            <a href="blog-details.html">
                                                                Which Yoga Class Is Best for Beginners?
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="recent-post-list-li">
                                                    <a className="recent-post-thum" href="blog-details.html">
                                                        <img
                                                            src="images/recent-post/blog-02.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <div className="pbmit-rpw-content">
                                                        <span className="pbmit-rpw-date">
                                                            <a href="blog-details.html">August 29, 2023</a>
                                                        </span>
                                                        <span className="pbmit-rpw-title">
                                                            <a href="blog-details.html">
                                                                Spiritual Cleansing: 14 Rituals to Detox Your Soul
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="recent-post-list-li">
                                                    <a className="recent-post-thum" href="blog-details.html">
                                                        <img
                                                            src="images/recent-post/blog-03.jpg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <div className="pbmit-rpw-content">
                                                        <span className="pbmit-rpw-date">
                                                            <a href="blog-details.html">August 29, 2023</a>
                                                        </span>
                                                        <span className="pbmit-rpw-title">
                                                            <a href="blog-details.html">
                                                                Spiritual Awakening: Definition, Signs and Symptoms
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </aside>
                                        <aside className="widget pbmit-service-ad">
                                            <div className="textwidget">
                                                <div className="pbmit-service-ads">
                                                    <div className="pbmit-logo-img">
                                                        <img src="images/widget-img.png" alt="" />
                                                    </div>
                                                    <h4 className="pbmit-ads-title">
                                                        Book your yoga session
                                                    </h4>
                                                    <div className="pbmit-ads-desc">
                                                        <i className="pbmit-base-icon-phone-call-1" />
                                                        +(123) 1234-567-8901
                                                    </div>
                                                    <a className="pbmit-btn" href="#">
                                                        <span className="pbmit-btn-content-wrapper">
                                                            <span className="pbmit-button-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="22.76"
                                                                    height="22.76"
                                                                    viewBox="0 0 22.76 22.76"
                                                                >
                                                                    <title>black-arrow</title>
                                                                    <path
                                                                        d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                                                                        transform="translate(-0.29 -0.29)"
                                                                        fill="none"
                                                                        stroke="#000"
                                                                        strokeWidth={2}
                                                                    />
                                                                    <path
                                                                        d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                                                                        transform="translate(-0.29 -0.29)"
                                                                        fill="none"
                                                                        stroke="#000"
                                                                        strokeWidth={2}
                                                                    />
                                                                    <path
                                                                        d="M22.34,1,1,22.34"
                                                                        transform="translate(-0.29 -0.29)"
                                                                        fill="none"
                                                                        stroke="#000"
                                                                        strokeWidth={2}
                                                                    />
                                                                </svg>
                                                            </span>
                                                            <span className="pbmit-button-text">
                                                                Register now
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </aside>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Blogdetail;
