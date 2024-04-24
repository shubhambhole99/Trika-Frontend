import React from 'react';
import Marquee from 'react-marquee-slider';
import times from 'lodash/times';

function MarqueeComponent() {
  const titles = ['Sound Healing', 'Hatha Yoga & Meditation', 'Kids Yoga', 'Garbhasanskar Pre & Post Natal Yoga' ];
  const lotusImage = 'https://res.cloudinary.com/dsj9t6adh/image/upload/v1709646782/ml9gnvf4lezcnfq4r0rf.png';

  return (
    <section className="marquee-section_three">
      <div className="container-fluid p-0">
        <Marquee velocity={25}>
          {times(titles.length * 2, Number).map(id => (
            <div key={`marquee-example-${id}`} style={{ display: 'flex', alignItems: 'center', gap: '50px', whiteSpace: 'nowrap' }}>
              {id % 2 === 0 ? (
                <h2 className="pbmit-element-title" style={{
                  fontSize: '90px',
                  lineHeight: '110px',
                  position: 'relative',
                  overflow: 'visible',
                  display: 'flex',
                  fontWeight: '800',
                  textShadow: '1px 1px 0 rgba(24, 26, 23,.8), -1px -1px 0 rgba(24, 26, 23,.8), 1px -1px 0 rgba(24, 26, 23,.8), -1px 1px 0 rgba(24, 26, 23,.8), 1px 1px 0 rgba(24, 26, 23,.8)',
                  WebkitTextFillColor: 'var(--pbmit-light-color)',
                  WebkitTextStrokeWidth: '0',
                  color: 'transparent',
                  letterSpacing: '0.8px',
                  fontFamily: 'Roboto, sans-serif'
                }}>{titles[id / 2]}</h2>
              ) : (
                <img src={lotusImage} alt="Lotus" style={{ width: '100px', height: '100px', alignSelf: 'flex-start' }} />
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default MarqueeComponent;