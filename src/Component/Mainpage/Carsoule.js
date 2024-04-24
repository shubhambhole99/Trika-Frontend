import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';

function Carsoule() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slides, setSlides] = useState([]);
  
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
  
  
    // useEffect(() => {
    //   const handleResize = () => setWindowWidth(window.innerWidth);
    //   window.addEventListener('resize', handleResize);
  
    //   // Cleanup
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);
  
    useEffect(() => {
      axios.get('https://r8bkfpncj3.execute-api.ap-south-1.amazonaws.com/production/api/getimage')
        .then(response => {
          setSlides(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }, []);
    // console.log(slides);
    // const slides = [
    //     {
    //       image: "https://easytender.s3.ap-south-1.amazonaws.com/1709733605566",
    //       // caption: 'Practice positive energy. Relax your mind and body.'
    //     },
    //     {
    //       image: "https://easytender.s3.ap-south-1.amazonaws.com/1710152841879",
    //       // caption: 'Practice positive energy. Relax your mind and body.'
    //     }
    //   ];
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 10000); // Rotate every 10 seconds
    
        return () => clearInterval(interval);
      }, [slides.length]);
  
  return (
    <div className="page-wrapper">
       <header className="site-header header-style-3">
          <Header />
          <div className="pbmit-slider-social">
            <ul className="pbmit-social-links">
              <li className="pbmit-social-li pbmit-social-facebook">
                <a title="Facebook" href="https://www.facebook.com/share/d792zGWX6qpgCq5N/?mibextid=WC7FNe" target="_blank">
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
                <a title="Instagram" href="https://www.instagram.com/trika_yoga?igsh=Y25kbjI2N3V5dzcy" target="_blank">
                  <span>
                    <i className="pbmit-base-icon-instagram" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} style={{ flex: '0 0 100%', minWidth: '100%', position: 'relative' }}>
                  <img src={slide.carouselImages} alt={`Slide ${index + 1}`} style={{ width: '100%', height: windowWidth <= 768 ? '450px' : '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  {/* Assuming you want to display captions */}
                  {slide.caption && (
                    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', color: 'white', textAlign: 'center' }}>
                      <h2>{slide.caption}</h2>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
          {/*  */}
        </header>
    </div>
  )
}

export default Carsoule
