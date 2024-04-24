import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Homeblog() {
    const [slides, setSlides] = useState([]);
    const navigate = useNavigate();

    const reloadBlogPage = () => {
        navigate("/blog");
        window.scrollTo(0, 0);
        window.location.reload();
    }

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/blog')
            .then(response => {
                setSlides(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Function to truncate the description to 20 words
    const truncateDescription = (description) => {
        const words = description.split(' ');
        if (words.length > 20) {
            return words.slice(0, 20).join(' ') + '...';
        }
        return description;
    }

    return (
        <div>
            <section className="section-xl">
                <div className="container">
                    <div className="position-relative">
                        <div className="pbmit-heading-subheading animation-style2">
                            <h4 className="pbmit-subtitle">blogs</h4>
                            <h2 className="pbmit-title">Recent blogs</h2>
                        </div>
                        <div className="blog-two_arrow swiper-btn-custom d-flex flex-row-reverse" />
                    </div>
                    <div
                        className="swiper-slider"
                        data-arrows-class="blog-two_arrow"
                        data-autoplay="false"
                        data-loop="false"
                        data-dots="false"
                        data-arrows="true"
                        data-columns={2}
                        data-margin={30}
                        data-effect="slide"
                    >
                        <div className="swiper-wrapper">
                            {/* Mapping over the slides array to dynamically generate blog posts */}
                            {slides.slice(0, 1).map((slide, index) => (
                                <article className="pbmit-blog-style-2 swiper-slide" key={index}>
                                    <div className="post-item d-flex">
                                        <div className="pbmit-featured-container">
                                            <div
                                                className="pbmit-bg-image"
                                                style={{
                                                    backgroundImage: `url(${slide.image})`
                                                }}
                                            >
                                                <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pbminfotech-box-wrap">
                                            <div className="pbminfotech-box-content">
                                                <div className="pbmit-date-admin-wraper d-flex align-items-center">
                                                    <div className="pbmit-meta-cat-wrapper pbmit-meta-line">
                                                        <div className="pbmit-meta-category">
                                                            <a rel="category tag">
                                                                {slide.tagline}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="pbmit-meta-date pbmit-meta-line">
                                                        <span className="pbmit-post-date">
                                                            {slide.date}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="pbmit-post-title">
                                                    <a>{slide.heading}</a>
                                                </h3>
                                                <div className="pbminfotech-box-desc">
                                                    {truncateDescription(slide.description)}
                                                </div>
                                            </div>
                                            <a href={`/blog/${slide.id}`} className="pbmit-blog-btn">
                                                <span className="pbmit-button-icon-wrapper">
                                                    <span className="pbmit-button-icon">
                                                        <i className="pbmit-base-icon-black-arrow-1" />
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homeblog;
