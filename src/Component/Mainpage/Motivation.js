import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Motivation() {

    const navigate = useNavigate();


    const reloadAboutPage = () => {
        navigate('/about');
        window.scrollTo(0, 0);
        window.location.reload();
    };


    // const [slides, setSlides] = useState([]);
    const [data, setData] = useState([]);
    // const attribbute = slides.map(slide => slide.attribbute);
    // const image = slides.map(slide => slide.image);
    // const heading = slides.map(slide => slide.heading);
    // const content = slides.map(slide => slide.content);
    // const bullet = slides.map(slide => slide.bullet);

    https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production
    // https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/get/motivations

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/get/motivations')
            .then(response => {
                
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    // console.log(slides);
    return (
        <div>
            <section>
                <div className="container">
                    <div className="position-relative">
                        <div className="pbmit-heading-subheading animation-style2">
                            <h4 className="pbmit-subtitle">Trika Yoga</h4>
                            <h2 className="pbmit-title">Let's change your life</h2>
                        </div>
                        <div className="tab_btn">
                            <a
                                className="pbmit-btn pbmit-btn-outline"
                                onClick={reloadAboutPage}
                                data-magnetic=""
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
                                    <span className="pbmit-button-text" onClick={reloadAboutPage}>View All</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="pbmit-tab">

                        <ul className="nav nav-tabs" role="tablist">
                            {data.map((item, index) => (
                                <li className="nav-item" role="presentation" key={index}>
                                    <a
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        data-bs-toggle="tab"
                                        href={`#tab-2-${index + 1}`}
                                        aria-selected={index === 0 ? 'true' : 'false'}
                                        role="tab"
                                    >
                                        <span>{item.Attribbute}</span>
                                        <i className="pbmit-base-icon-black-arrow-1" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content">
                            {data.map((item, index) => (
                            //    { console.log(item)}
                                <div
                                    className={`tab-pane ${index === 0 ? 'show active' : ''}`}
                                    id={`tab-2-${index + 1}`}
                                    role="tabpanel"
                                    key={index}
                                >
                                    <div className="pbmit-column-inner">
                                        <div className="row g-0">
                                            <div className="col-md-12 col-xl-6 pbmit-tab-img">
                                                <img src={item.Image} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-12 col-xl-6 pbmit-tab-list">
                                                <h2>{item.Heading}</h2>
                                                
                                                <div>{item.content}</div>
                                                

                                                <ul className="list-group list-group-borderless">
                                                    {/* {item.bullet((bullet, idx) => ( */}
                                                        <li className="list-group-item" >
                                                            <span className="pbmit-icon-list-icon">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="pbmit-base-icon-check"
                                                                />
                                                            </span>
                                                            <span className="pbmit-icon-list-text">
                                                                {item.bullet_one}
                                                            </span>
                                                        </li>
                                                        <li className="list-group-item" >
                                                            <span className="pbmit-icon-list-icon">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="pbmit-base-icon-check"
                                                                />
                                                            </span>
                                                            <span className="pbmit-icon-list-text">
                                                                {item.bullet_two}
                                                            </span>
                                                        </li>
                                                        <li className="list-group-item" >
                                                            <span className="pbmit-icon-list-icon">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="pbmit-base-icon-check"
                                                                />
                                                            </span>
                                                            <span className="pbmit-icon-list-text">
                                                                {item.bullet_three}
                                                            </span>
                                                        </li>
                                                    {/* ))} */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div >
    )
}

export default Motivation
