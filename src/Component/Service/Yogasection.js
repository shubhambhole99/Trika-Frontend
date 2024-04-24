import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Yogasection() {
  const navigate = useNavigate();

  const reloadContactPage = () => {
    navigate(`/contact`);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/get/work')
      .then(response => {
        
        setServices(response.data);
        // Set the first service as the selected service
        if (response.data.length > 0) {
          setSelectedService(response.data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="site_content service_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 service-right-col">
              {/* Render content based on selected service */}
              {selectedService && (
                <div key={selectedService._id}>
                  <div className="pbmit-service-feature-image">
                    <img
                      src={selectedService.image}
                      className="img-fluid"
                      alt=""
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="pbmit-entry-content">
                    <div className="pbmit-service_content">
                      <div className="pbmit-heading animation-style2">
                        <h3 className="pbmit-title mb-3">
                          {selectedService.heading}
                        </h3>
                      </div>
                      <p className="pbmit-firstletter">{selectedService.content}</p>
                      <div className="pbmit-heading pt-3 animation-style2">
                        <h3 className="pbmit-title mb-3">
                          {selectedService.benfits_heading}
                        </h3>
                      </div>
                      {/* Rendering benefits content as points */}
                      {Array.isArray(selectedService.benfits_content) ? (
                        <ul>
                          {selectedService.benfits_content.map((benefit, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>{benefit}</li>
                          ))}
                        </ul>
                      ) : (
                        <ul>
                          {selectedService.benfits_content.split(/\.\s+/).map((point, index) => (
                            <li key={index} style={{ marginBottom: '10px' }}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-3 service-left-col sidebar">
              <aside className="service-sidebar">
                <aside className="widget post-list">
                  <h2 className="widget-title">Our Service</h2>
                  <div className="all-post-list">
                    <ul>
                      {services.map(service => (
                        <li key={service._id} onClick={() => handleServiceClick(service)}>
                          <a>{service.service_name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
                <aside className="widget pbmit-service-ad float-left ml-5 mt-neg-10">
                  <div className="textwidget">
                    <div className="pbmit-service-ads">
                      <div className="pbmit-logo-img">
                        <img src="images/widget-img.png" alt="" />
                      </div>
                      <h4 className="pbmit-ads-title">
                        Book your yoga session
                      </h4>
                      <div className="pbmit-ads-desc">
                        <i className="pbmit-base-icon-phone-call-1"></i>
                        +91 91524-82025
                      </div>
                      <a className="pbmit-btn" href="#">
                        <span className="pbmit-btn-content-wrapper">
                          <span className="pbmit-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                              <title>black-arrow</title>
                              <path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2"></path>
                              <path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2"></path>
                              <path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" strokeWidth="2"></path>
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
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Yogasection;
