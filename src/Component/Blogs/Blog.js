import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import axios from 'axios';
import Banner from '../About/Banner';
import MediaComponent from './MediaComponent/Media'

function Blog() {

    const [slides, setSlides] = useState([]);
    const navigate = useNavigate();

    const reloadContactPage = () => {
        navigate(`/contact`);
        window.scrollTo(0, 0);
        window.location.reload();
    };


    const reloadBlogdetailPage = (id) => {
        navigate(`/blogdetails/${id}`);
        window.scrollTo(0, 0);
        window.location.reload();
    };

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/blog')
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
                    <section className="site_content blog_classic">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-9 blog-right-col">
                                    <div className="row pbmit-element-posts-wrapper">
                                        {slides.slice(0, 3).map(slide => (
                                            <article className="post blog-classic" key={slide._id}>
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                        <a onClick={() => reloadBlogdetailPage(slide._id)}>
                                                            <MediaComponent control={1} style={{ width: '60%', marginLeft: '20%', borderRadius: '20px' }} src={slide.image} />
                                                            {/* <MediaComponent src="https://easytender.s3.ap-south-1.amazonaws.com/1710854219564.png"/> */}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pbmit-blog-classic-inner">
                                                    <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                                        <span className="pbmit-meta pbmit-meta-cat">
                                                            <a onClick={() => reloadBlogdetailPage(slide._id)} rel="category tag">
                                                                {slide.tagline}
                                                            </a>
                                                        </span>
                                                        <span className="pbmit-meta pbmit-meta-date">
                                                            <i className="pbmit-base-icon-calendar-3" />
                                                            <a onClick={() => reloadBlogdetailPage(slide._id)} rel="bookmark">
                                                                {slide.date}
                                                            </a>
                                                        </span>
                                                    </div>
                                                    <h3 className="pbmit-post-title">
                                                        <a href="blog-single-details.html">
                                                            {slide.heading}
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-entry-content">
                                                        <div className="pbmit-firstletter-blog">
                                                            <p>{slide.description}</p>
                                                        </div>
                                                        <a
                                                            onClick={() => reloadBlogdetailPage(slide._id)}
                                                        >
                                                        </a>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <div className="sidebar">
                                        <aside className="widget widget-recent-post">
                                            <h2 className="widget-title">Recent Post</h2>
                                            <ul className="recent-post-list">
                                                {slides.slice(2).map(slide => (
                                                    <li className="recent-post-list-li" key={slide.heading}>
                                                        <a className="recent-post-thum" onClick={() => reloadBlogdetailPage(slide._id)}>
                                                            <MediaComponent control={0} src={slide.image} style={{ borderRadius: '50px' }} />
                                                        </a>
                                                        <div className="pbmit-rpw-content">
                                                            <span className="pbmit-rpw-date">
                                                                <a onClick={() => reloadBlogdetailPage(slide._id)} >
                                                                    {slide.date}
                                                                </a>
                                                            </span>
                                                            <span className="pbmit-rpw-title">
                                                                <a onClick={() => reloadBlogdetailPage(slide._id)} >
                                                                    {slide.heading}
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                ))}
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
                                                        +91 91524-82025
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
                                                                <a onClick={reloadContactPage}>Register now</a>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </aside>
                                        <aside className="widget widget-tag-cloud">
                                            <h3 className="widget-title">Tag Cloud</h3>
                                            <div className="tagcloud">
                                                <a href="blog-classic.html" className="tag-cloud-link">
                                                    fitness
                                                </a>
                                                <a href="blog-classic.html" className="tag-cloud-link">
                                                    meditation
                                                </a>
                                                <a href="blog-classic.html" className="tag-cloud-link">
                                                    peace
                                                </a>
                                            </div>
                                        </aside>
                                    </div>
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

export default Blog;
