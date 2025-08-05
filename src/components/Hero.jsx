// App.jsx 또는 index.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,       // 애니메이션 지속 시간 (ms)
      once: false,           // 스크롤 한 번만 동작
      offset: 120,          // 트리거 포인트 위치 조정
    });
  }, []);
  const heroContent = {
    title: 'Hello React',
    desc: 'Welcome to my portfolio! I build fast and modern web applications.'
  };
    return (
    <section className='hero'>
        <h1  data-aos="fade-up">{heroContent.title}</h1>
        <p  data-aos="fade-up" data-aos-delay="100">{heroContent.desc}</p>
    </section>
  )
}

export default Hero