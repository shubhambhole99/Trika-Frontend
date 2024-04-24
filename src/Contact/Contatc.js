import React, { useEffect, useState } from 'react'
import Header from '../Component/Layout/Header'
import Footer from '../Component/Layout/Footer'
import axios from 'axios'
import Banner from '../Component/About/Banner';

function Contatc() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/addcontact ', formData);
      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
      setSuccessMessage('');
    }
    setIsLoading(false);
  };

  


  return (
    <div>
      <>
        <div className="page-wrapper">
          {/* Header Main Area */}
          <Header />
          {/* Header Main Area End Here */}
          {/* Title Bar */}
          <Banner />
          {/* Title Bar End*/}
          {/* Contact Us Content */}
          <div className="page-content">
            {/* Ihbox */}
            <section className="section-xl ihbox_section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-9">
                      <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-phone-call" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">24/7 Contact us</h2>
                          <div className="pbmit-heading-desc">
                            Mobile : +91 91524 82025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-9">
                      <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-email" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">24/7 Mail us</h2>
                          <div className="pbmit-heading-desc">
                            <a
                              href="mailto:your-email@example.com"
                              className="__cf_email__"
                              data-cfemail="711f1e5c0314011d083101131c18055f121e1c"
                            >
                              sonia@trika.co.in
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4">
                    <div className="pbmit-ihbox-style-9">
                      <div className="pbmit-ihbox-headingicon d-sm-flex align-items-center">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper">
                            <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-yoge-icon pbmit-yoge-icon-location" />
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">Our Address</h2>
                          <div className="pbmit-heading-desc">
                            Vaikunthlal Mehta Rd, <br />JVPD Scheme, Juhu, Mumbai, Maharashtra 400049.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Ihbox End */}
            {/* Contact Form */}
            <section className="section-lgb">
              <div className="container">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">Contact us</h4>
                  <h2 className="pbmit-title">
                    Contact &amp; hire us for your fitness!
                  </h2>
                  <div className="mt-4">
                    Begin your transformative yoga journey today.
                    Contact us now for guidance and support on your path to wellness.
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-md-8 contact-us-left_col">
                    <div className="contact-form_main">
                      <h3 className="pbmit-title mb-3">Send a message</h3>
                      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                      {successMessage && <div className="alert alert-success">{successMessage}</div>}
                      <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Your Name *" name="name" value={formData.name} onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Your Email *" name="email" value={formData.email} onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="tel" className="form-control" placeholder="Your Phone *" name="phone" value={formData.phone} onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                          </div>
                          <div className="col-md-12">
                            <textarea name="message" cols={40} rows={10} className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} required />
                          </div>
                          <div className="col-md-12">
                            <button className="pbmit-btn pbmit-btn-global" type="submit" disabled={isLoading}>
                              {isLoading ? 'Sending...' : 'Submit Now'}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4 contact-us-right_col">
                    <div className="contact-us-right-box">
                      <div className="contact-us-right_img">
                        <div className="pbmit-animation-style4">
                          <img src="images/contact-us-img.jpg" alt="" />
                        </div>
                      </div>
                      <div className="ihbox-style_11">
                        <div className="pbmit-ihbox-style-11">
                          <div className="pbmit-ihbox-headingicon">
                            <div className="pbmit-ihbox-contents">
                              <h2 className="pbmit-element-title">
                                Relax your Body & Mind with Trika
                              </h2>
                              <h4 className="pbmit-element-heading">
                                Opening days :
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pbmit-contact-share-btn_box">
                        <div className="pbmit-contact-share-btn">
                          <div className="pbmit-share-icon-wrapper">
                            <span className="pbmit-share-icon">
                              <i className="pbmit-base-icon-share-2" />
                            </span>
                            <ul className="pbmit-social-links">
                              <li className="pbmit-social-li pbmit-social-facebook">
                                <a title="Facebook" href="#" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-facebook-f" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-twitter">
                                <a title="Twitter" href="#" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-twitter-2" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-linkedin">
                                <a title="LinkedIn" href="#" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-linkedin-in" />
                                  </span>
                                </a>
                              </li>
                              <li className="pbmit-social-li pbmit-social-instagram">
                                <a title="Instagram" href="#" target="_blank">
                                  <span>
                                    <i className="pbmit-base-icon-instagram" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill=""
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                              </svg>
                            </div>
                            <div className="pbmit-sticky-corner pbmit-top-right-corner">
                              <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M30 30V0C30 16 16 30 0 30H30Z" fill="red" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Form */}
            {/* Iframe */}
            <section className="iframe_section section-lgb">
              <div className="container-fluid">
                <div className="iframe_box">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0962949236505!2d72.83008497593669!3d19.10343105110931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf5aae1367%3A0xd0b948b462f60df5!2sVaikunthlal%20Mehta%20Rd%2C%20JVPD%20Scheme%2C%20Juhu%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710838828083!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: "100" }}  // Correcting the style prop format
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>
            {/* Iframe End*/}
          </div>
          {/* Contact Us Content End */}
          {/* footer */}
          <Footer />
          {/* footer End */}
        </div>
        {/* Page Wrapper End */}
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
      </>

    </div>
  )
}

export default Contatc
