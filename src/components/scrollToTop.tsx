import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`
      scroll-to-top-button ${isVisible ? 'opacity-1' : 'opacity-0'}
      fixed bottom-8 right-8
      py-2 px-4
      cursor-pointer
      text-4xl
      rounded-md
      z-10
      `}
      onClick={scrollToTop}
    >
      <span>&uarr;</span>
    </div>
  );
};

export default ScrollToTopButton;
