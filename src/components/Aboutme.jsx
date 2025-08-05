import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기
const Aboutme = () => {

      useEffect(() => {
        AOS.init({
          duration: 1000,       // 애니메이션 지속 시간 (ms)
          once: false,           // 스크롤 한 번만 동작
          offset: 120,          // 트리거 포인트 위치 조정
        });
      }, []);
  const about = {
    heading: 'About Me',
    content: 'I am a passionate frontend developer with a love for clean code and modern design.'
  };

  return (
    <section className="about">
      <h1  data-aos="fade-up">{about.heading}</h1>
      <p data-aos="fade-up" data-aos-delay="100">{about.content}</p>
    </section>
  );
}

export default Aboutme