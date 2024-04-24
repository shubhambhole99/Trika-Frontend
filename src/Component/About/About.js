import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Marquee from '../Marquee/Marquee'
import Aboutus from './Aboutus'
import Testimonial from './Testimonial'
import Banner from './Banner'

function About() {
    return (
        <div>
            <div className="page-wrapper">
                {/* Header Main Area */}
                <Header/>
                {/* Header Main Area End Here */}
                {/* Title Bar */}
               <Banner/>
                {/* Title Bar End*/}
                {/* Page Content */}
                <div className="page-content">
                    {/* About Us Start */}
                   <Aboutus/>
                    {/* About Us End */}
                    {/* Marquee Start */}
                    <Marquee/>
                    {/* Marquee End */}
                    {/* Static Box */}
                    <section className="static-box-section_two pbmit-element-static-box-style-1">
                        <div className="container-fluid">
                            <div className="pbmit-element-posts-wrapper row">
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(https://images.squarespace-cdn.com/content/v1/5bbe5f86809d8e661488fd30/a2692a9c-2e0a-4ad8-936b-17c31c9f5857/314805011b2715df3cc2569ad963c15d.gif)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">01</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Stress Reduction and Mental Clarity</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="https://images.squarespace-cdn.com/content/v1/5bbe5f86809d8e661488fd30/a2692a9c-2e0a-4ad8-936b-17c31c9f5857/314805011b2715df3cc2569ad963c15d.gif"
                                            alt="Protection From Injury"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Stress Reduction and Mental Clarity</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                            Yoga calms the mind, lowers stress, enhances clarity,
                                            and improves mental well-being through mindful breathwork.
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(https://institute.careerguide.com/wp-content/uploads/2020/10/Yoga-animation.gif)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">02</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Improved Flexibility and Strength</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="https://institute.careerguide.com/wp-content/uploads/2020/10/Yoga-animation.gif"
                                            alt="Weight Reduction"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Improved Flexibility and Strength</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                            Yoga enhances flexibility and strength by stretching muscles and engaging diverse muscle groups in various poses.
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="pbmit-static-box-style-1 pbmit-ele-static-box col-md-4">
                                    <div
                                        className="pbmit-bg-imgbox"
                                        style={{
                                            backgroundImage:
                                                "url(https://cdn.dribbble.com/users/218857/screenshots/4419918/yoga.gif)"
                                        }}
                                    >
                                        <div className="pbmit-img-text">
                                            <div className="pbmit-text d-flex align-items-center justify-content-center">
                                                <div className="pbminfotech-static-box-number">03</div>
                                                <div className="pbminfotech-box-title">
                                                    <h4>Enhanced Balance and Coordination</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbmit-img">
                                        <img
                                            src="https://cdn.dribbble.com/users/218857/screenshots/4419918/yoga.gif"
                                            alt="Increased Flexibility"
                                        />
                                    </div>
                                    <div className="pbmit-contentbox">
                                        <div className="pbmit-contentbox-inner">
                                            <div className="pbmit-ihbox-icon" />
                                            <div className="pbminfotech-box-title">
                                                <h4>Enhanced Balance and Coordination</h4>
                                            </div>
                                            <div className="pbminfotech-static-box-desc">
                                            Yoga improves balance, coordination, and body awareness, 
                                            reducing falls and enhancing physical performance through alignment-focused poses.
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    {/* Static Box End */}
                    
                    {/* Service Start */}
                    {/* Service End */}
                    {/* Tween Effect Start */}
                    {/* Tween Effect End */}
                    {/* Team Start */}
                    {/* Team End */}
                    {/* Client Start */}
                    {/* Client End */}
                    {/* Testimonial Start */}
                   <Testimonial/>
                    {/* Testimonial End */}
                </div>
                {/* Page Content End */}
                {/* footer */}
                <Footer />
                {/* footer End */}
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
                {/* Scroll To Top End */}
            </div>

        </div>
    )
}

export default About
