import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Banner from '../About/Banner'

function Event() {
    return (
        <div>
            <div>
                <div className="page-wrapper">
                    {/* Header Main Area */}
                    <Header />
                    {/* Header Main Area End Here */}
                    {/* Title Bar */}
                    <Banner />
                    {/* Title Bar End*/}

                    {/* schedule start */}

                    <section className="section-md event_boxes">
                    <div style={{ textAlign: 'center', marginTop: '-20px' }} className="pbmit-event-details">
                            <div className="pbmit-event-title">
                                <h1 className="pbmit-heading-text">
                                    <a>Schedule</a>
                                </h1>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }} className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-01.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Skin Quality</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Yoga Nidra Teacher Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">50 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">08-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">5000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-02.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Concentration</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Holistic Yoga Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">55 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">22-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">10000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-03.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Immunity</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Hatha Yoga Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">60 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">20-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">15000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* schedule End */}
                        {/* retreat start */}
                        <div style={{ textAlign: 'center', marginTop: '-20px' }} className="pbmit-event-details">
                            <div className="pbmit-event-title">
                                <h1 className="pbmit-heading-text">
                                    <a>Retreat</a>
                                </h1>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }} className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-01.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Skin Quality</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Yoga Nidra Teacher Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">50 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">08-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">5000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-02.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Concentration</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Holistic Yoga Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">55 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">22-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">10000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pbmit-ele-event_listing">
                                        <div className="pbmit-event-layout-wrapper">
                                            <div className="event_listing event-type-skin-quality">
                                                <div className="pbmit-event-action-url event-style-color skin-quality">
                                                    <div className="pbmit-event-banner">
                                                        <div className="pbmit-event-banner-img" style={{ backgroundImage: 'url("images/event-box/event-img-03.jpg")' }}>
                                                            <div className="pbmit-event-type">
                                                                <a href="event-style-1.html">
                                                                    <span className="pbmit-event-type-text event-type skin-quality">Immunity</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <a className="pbmit-button">
                                                            <span className="pbmit-button-icon-wrapper">
                                                                <span className="pbmit-button-icon">
                                                                    <i className="pbmit-base-icon-black-arrow-1" />
                                                                </span>
                                                            </span>
                                                        </a>
                                                        <a className="pbmit-link" />
                                                    </div>
                                                    <div className="pbmit-event-infomation">
                                                        <div className="pbmit-event-date">
                                                            <div className="pbmit-event-date-type">
                                                                <div className="pbmit-from-date">
                                                                    <div className="pbmit-date">14</div>
                                                                    <div className="pbmit-month">Feb</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pbmit-event-details">
                                                            <div className="pbmit-event-title">
                                                                <h3 className="pbmit-heading-text">
                                                                    <a>Hatha Yoga Training</a>
                                                                </h3>
                                                            </div>
                                                            <div className="pbmit-event-meta d-flex align-items-center">
                                                                <div className="pbmit-event-meta-line pbmit-event-time d-flex">
                                                                    <i className="pbmit-base-icon-time" />
                                                                    <div className="pbmit-event-meta-time">60 min / Session</div>
                                                                </div>
                                                                <div className="pbmit-event-meta-line pbmit-event-registration-date d-flex">
                                                                    <i className="pbmit-base-icon-calendar-3" />
                                                                    <span className="pbmit-event-date-text">20-11-2023</span>
                                                                </div>
                                                            </div>
                                                            <div className="pbmit-event-price">
                                                                <div className="pbmit-event-meta-price">15000 / Month</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-event-arrow-link">
                                                    <a className="event-style-color skin-quality" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* retreat  End */}
                    {/* footer */}
                    {/* footer End */}
                </div>
                {/* Page Wrapper End */}
                {/* Search Box Start Here */}
                <div className="pbmit-search-overlay">
                    <div className="pbmit-icon-close">
                        <svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="28.163" height="28.163" viewBox="0 0 26.163 26.163">
                            <rect width={36} height={1} transform="translate(0.707) rotate(45)" />
                            <rect width={36} height={1} transform="translate(0 25.456) rotate(-45)" />
                        </svg>
                    </div>
                </div>
                {/* Search Box End Here */}
                {/* Scroll To Top */}
                <div className="pbmit-progress-wrap">
                    <svg className="pbmit-progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Event
