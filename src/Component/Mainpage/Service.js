import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Service() {
    const navigate = useNavigate();


    const reloadServicePage = () => {
        navigate(`/service`);
        window.scrollTo(0, 0);
        window.location.reload();
    };


    const [data, setData] = useState([]);
    const [hoveredService, setHoveredService] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/get/services')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleMouseEnter = (service) => {
        clearTimeout(hoverTimeout);
        const timeout = setTimeout(() => {
            setHoveredService(service);
        }, 200); // Change the delay as needed
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setHoveredService(null); // Reset the hovered service
    };
    
    const defaultServiceImage = data.length > 0 ? data[0].serviceImage : '';

    return (
        <div>
        <section className="section-xl pbmit-extend-animation service-three_bg pbmit-bg-color-global">
            <div className="container">
                <div className="position-relative">
                    <div className="pbmit-heading-subheading text-white animation-style2">
                        <h4 className="pbmit-subtitle">Our Services</h4>
                        <h2 className="pbmit-title">Our Main Services</h2>
                    </div>
                    <div className="service-three_btn">
                        <a
                            className="pbmit-btn pbmit-btn-outline"
                            onClick={reloadServicePage}                        
                            >
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
                                <span className="pbmit-button-text">View All</span>
                            </span>
                        </a>
                    </div>
                </div>
                {window.innerWidth >= 1200 ? (
                    <div className="pbmit-element-service-style-3">
                        <div className="pbmit-main-hover-slider d-flex align-items-center flex-wrap">
                            <div className="swiper-hover-slide-images col-md-5 col-lg-5 col-12 order-2 order-md-1">
                                <div className="swiper pbmit-hover-image">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="pbmit-featured-img-wrapper">
                                                <div  className="pbmit-featured-wrapper">
                                                    <img
                                                        src={hoveredService ? hoveredService.serviceImage : defaultServiceImage}
                                                        alt={hoveredService ? hoveredService.title : ''}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-hover-slide-nav col-md-7 col-lg-7 col-12 order-1 order-md-2">
                                <ul className="pbmit-hover-inner">
                                    {data.map((item, index) => (
                                        <li
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(item)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <span className="pbmit-service-icon">
                                                <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                                            </span>
                                            <h3
                                                className="pbmit-title-data-hover d-flex align-items-center"
                                                data-text="Ardha Chakrasana"
                                            >
                                                <span  className="pbmit-text-content">
                                                    <span className="pbmit-serv-cat">
                                                        <a rel="tag">
                                                            {item.serviceName}
                                                        </a>
                                                    </span>
                                                    <a className="pbmit-title-inner">
                                                        <span>{item.serviceDescription}</span>
                                                    </a>
                                                </span>
                                            </h3>
                                            <a className="pbmit-link" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pbmit-element-service-style-3">
                        <div className="pbmit-main-hover-slider d-flex align-items-center">
                            <ul className="pbmit-hover-inner">
                            {hoveredService?null:(
                                 <img style={{width:"80%",borderRadius:"20px"}} src={defaultServiceImage} alt={''} />
                                )}
                                {data.map((item, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span className="pbmit-service-icon">
                                            <i className="pbmit-yoge-icon pbmit-yoge-icon-yoga-pose" />
                                        </span>
                                        <h3
                                            className="pbmit-title-data-hover d-flex align-items-center"
                                            data-text="Ardha Chakrasana"
                                        >
                                        <div className="swiper-hover-slide-images col-md-5 col-lg-5">
                                            <div className="swiper pbmit-hover-image">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="pbmit-featured-img-wrapper">
                                                            <div style={{width:"80%"}} className="pbmit-featured-wrapper">
                                                          
                                                                {hoveredService === item && (
                                                                    <img
                                                                        src={item.serviceImage}
                                                                        alt={item.title}
                                                                    />
                                                                )}
                                                                {hoveredService !== item && (
                                                                    <img
                                                                        style={{ display: 'none' }}
                                                                        src={item.serviceImage}
                                                                        alt={item.title}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                            <span className="pbmit-text-content">
                                                <span className="pbmit-serv-cat">
                                                    <a rel="tag">
                                                        {item.serviceName}
                                                    </a>
                                                </span>
                                                <a className="pbmit-title-inner">
                                                    <span>{item.serviceDescription}</span>
                                                </a>
                                            </span>
                                          
                                        </h3>
                                        <a className="pbmit-link" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </div>
    
    );
}

export default Service;
