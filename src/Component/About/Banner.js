import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

function Banner() {
    const [banners, setBanners] = useState([]);
    const location = useLocation(); // Get current location

    useEffect(() => {
        axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/banner')
            .then(response => {
                setBanners(response.data.banner);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const getCurrentPageName = () => {
        const path = location.pathname; // Get current path from location
        // Logic to extract page name from path (You might need to customize this)
        const pageName = path.split('/').pop(); // Get the last segment of the path
        return capitalizeFirstLetter(pageName); // Capitalize the page name
    };

    return (
        <div>
            {banners.map(banner => (
                <div
                    key={banner._id}
                    className="pbmit-title-bar-wrapper"
                    style={{ backgroundImage: `url(${banner.imageUrl})` }}
                >
                    <div className="container">
                        <div className="pbmit-title-bar-content">
                            <div className="pbmit-title-bar-content-inner">
                                <div className="pbmit-tbar">
                                    <div className="pbmit-tbar-inner container">
                                        {/* Set title dynamically */}
                                        <h1 className="pbmit-tbar-title">{getCurrentPageName()}</h1>
                                    </div>
                                </div>
                                <div className="pbmit-breadcrumb">
                                    <div className="pbmit-breadcrumb-inner">
                                        <span>
                                            <a title="" href="#" className="home">
                                                <span>Trika</span>
                                            </a>
                                        </span>
                                        <span className="sep">
                                            <i className="pbmit-base-icon-angle-double-right" />
                                        </span>
                                        <span>
                                            <span className="post-root post post-post current-item">
                                                {" "}
                                                {getCurrentPageName()} {/* Set breadcrumb dynamically */}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Banner;
