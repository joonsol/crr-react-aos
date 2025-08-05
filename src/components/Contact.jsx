import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기
const Contact = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
        useEffect(() => {
          AOS.init({
            duration: 1000,       // 애니메이션 지속 시간 (ms)
            once: false,           // 스크롤 한 번만 동작
            offset: 120,          // 트리거 포인트 위치 조정
          });
        }, []);
 const contact = {
    email: 'you@example.com',
    message: 'Feel free to reach out via email!'
  };

  return (
    <section className="contact">
      <h1 data-aos="fade-up">Contact</h1>
      <p data-aos="fade-up" data-aos-delay="100">{contact.message}</p>
      <a data-aos="fade-up" data-aos-delay="200" href={`mailto:${contact.email}`}>{contact.email}</a>
    </section>
  )
}

export default Contact