import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/get/testimonal')
            .then(response => {
                console.log(response);
                setTestimonials(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 5000, // Set autoplay speed to 5 seconds (5000 milliseconds)
    };

    return (
        <div>
            <section className="testimonial_two section-xl">
                <div className="container">
                    <Slider {...settings}>
                        {testimonials.map(testimonial => (
                            <div className="testimonial-two_bg" key={testimonial.name}>
                                <div className="row g-0">
                                    <div className="col-md-12 col-xl-6 pbmit-col_1">
                                        <div className="testimonial-two-left_img" style={{ backgroundImage: `url(${testimonial.image})` }} />
                                    </div>
                                    <div className="col-md-12 col-xl-6 pbmit-col_2">
                                        <div className="testimonial-two_rightbox">
                                            <div className="pbmit-heading-subheading text-white animation-style2">
                                                <h4 className="pbmit-subtitle">Testimonial</h4>
                                                <h2 className="pbmit-title">Clients feedback</h2>
                                            </div>
                                            <div
                                                className="swiper-slider"
                                                data-arrows-class="testimonial-two_btn"
                                                data-autoplay="true"
                                                data-loop="true"
                                                data-dots="true"
                                                data-arrows="false"
                                                data-columns={1}
                                                data-margin={30}
                                                data-effect="slide"
                                            >
                                                <div className="swiper-wrapper">
                                                    <article className="pbmit-testimonial-style-2 swiper-slide">
                                                        <div className="pbminfotech-post-item">
                                                            <div className="pbminfotech-box-star-ratings">
                                                                {[...Array(testimonial.rating)].map((_, index) => (
                                                                    <i key={index} className="pbmit-base-icon-star-1 pbmit-active" />
                                                                ))}
                                                            </div>
                                                            <div className="pbminfotech-box-desc">
                                                                <blockquote className="pbminfotech-testimonial-text">
                                                                    <p>{testimonial.message}</p>
                                                                </blockquote>
                                                            </div>
                                                            <div className="pbminfotech-box-author d-flex align-items-center">
                                                                <div className="pbminfotech-box-img">
                                                                    <div className="pbmit-featured-img-wrapper">
                                                                        <div className="pbmit-featured-wrapper">
                                                                            <img
                                                                                src={testimonial.image}
                                                                                className="img-fluid"
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="pbmit-auther-content">
                                                                    <h3 className="pbminfotech-box-title">
                                                                        {testimonial.name}
                                                                    </h3>
                                                                    <div className="pbminfotech-testimonial-detail">
                                                                        Satisfied Client
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
