import React, { useEffect, useRef, useState } from 'react';
import '../css/AnimatedSvg.css';

const AnimatedSvg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`animated-svg-container ${isVisible ? 'is-visible' : ''}`}>
      <svg width="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <g className="illustration-scene">
            {/* Central Sphere */}
            <circle className="path globe-sphere" cx="400" cy="300" r="150" stroke="#1466C7" strokeWidth="2" fill="none"/>

            <g className="group globe-lines">
                {/* Latitude lines */}
                <ellipse className="path globe-line" cx="400" cy="300" rx="145" ry="50" stroke="#6BB7D1" strokeWidth="1" fill="none"/>
                <ellipse className="path globe-line" cx="400" cy="300" rx="120" ry="100" stroke="#6BB7D1" strokeWidth="1" fill="none"/>
                {/* Longitude lines */}
                <path className="path globe-line" d="M 400 150 A 75 150 0 0 0 400 450" stroke="#6BB7D1" strokeWidth="1" fill="none"/>
                <path className="path globe-line" d="M 400 150 A 75 150 0 0 1 400 450" stroke="#6BB7D1" strokeWidth="1" fill="none"/>
            </g>

            {/* Orbits */}
            <g className="group orbits">
                <ellipse className="path orbit" cx="400" cy="300" rx="250" ry="100" stroke="#40B3FF" strokeWidth="1.5" fill="none" transform="rotate(15, 400, 300)"/>
                <ellipse className="path orbit" cx="400" cy="300" rx="250" ry="100" stroke="#40B3FF" strokeWidth="1.5" fill="none" transform="rotate(-15, 400, 300)"/>
                <ellipse className="path orbit" cx="400" cy="300" rx="200" ry="200" stroke="#6BB7D1" strokeWidth="1" fill="none" />
                <ellipse className="path orbit" cx="400" cy="300" rx="180" ry="220" stroke="#40B3FF" strokeWidth="1.5" fill="none" transform="rotate(80, 400, 300)"/>
                <ellipse className="path orbit" cx="400" cy="300" rx="180" ry="220" stroke="#40B3FF" strokeWidth="1.5" fill="none" transform="rotate(-80, 400, 300)"/>
            </g>

            {/* Nodes */}
            <g className="group nodes">
                <circle className="shape node" cx="400" cy="100" r="10" fill="#0A4C8B" />
                <circle className="shape node" cx="147" cy="265" r="12" fill="#0A4C8B" />
                <circle className="shape node" cx="540" cy="378" r="12" fill="#0A4C8B" />
                <circle className="shape node" cx="280" cy="450" r="8" fill="#1466C7" />
                <circle className="shape node" cx="200" cy="300" r="6" fill="#1466C7" />
                <circle className="shape node" cx="600" cy="300" r="6" fill="#1466C7" />
                <circle className="shape node" cx="400" cy="500" r="6" fill="#1466C7" />
                <circle className="shape node" cx="285" cy="138" r="6" fill="#1466C7" />
                <circle className="shape node" cx="515" cy="138" r="6" fill="#1466C7" />
                <circle className="shape node" cx="680" cy="280" r="5" fill="#40B3FF" />
                <circle className="shape node" cx="120" cy="320" r="5" fill="#40B3FF" />
                <circle className="shape node" cx="480" cy="480" r="5" fill="#40B3FF" />
                <circle className="shape node" cx="225" cy="200" r="7" fill="#1466C7" />
                <circle className="shape node" cx="575" cy="200" r="7" fill="#1466C7" />
            </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSvg;