import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 불러오기

const Skill = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
      useEffect(() => {
        AOS.init({
          duration: 1000,       // 애니메이션 지속 시간 (ms)
          once: false,           // 스크롤 한 번만 동작
          offset: 120,          // 트리거 포인트 위치 조정

        });
      }, []);
  return (
    <section>
       <h1 data-aos="fade-up">Skills</h1>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx} data-aos="fade-up" data-aos-delay={idx*100}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skill