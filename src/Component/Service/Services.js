import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Banner from '../About/Banner'
import Yogasection from './Yogasection'

function Services() {
  return (
    <div>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    {/* Header Main Area */}
   <Header/>
    {/* Header Main Area End Here */}
    {/* Title Bar */}
   <Banner/>
    {/* Title Bar End*/}
    {/* Page Content */}
    <div className="page-content">
      {/* Service Details */}
     <Yogasection/>
      {/* Service Details End */}
    </div>
    {/* Page Content End */}
    {/* footer */}
  <Footer/>
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
  {/* Scroll To Top End */}
</>

    </div>
  )
}

export default Services
