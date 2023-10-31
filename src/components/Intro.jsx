import React, { useEffect } from "react";
import profile from "../assets/img/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
import iconRight from "../assets/img/ico_right.png"
import resume from "../assets/img/최지원_입사지원서.hwp"

const Intro = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="intro">
            <div className="intro__inner">
                <img className="intro__profile" src={profile} alt="프로필" />
                <div className="intro__text" >
                    <h3>안녕하세요!</h3>
                    <ul data-aos="fade-up"
                        data-aos-duration="1000">
                        <li>웹 퍼블리셔를 준비중인 최지원입니다
                            <br />시작이 늦어도 차근차근 해나가면 더 활짝 피어날 수 있다는 마음으로 공부 중입니다
                        </li>
                        <li>HTML, CSS, JAVAScript를 다루며 웹 표준과 웹 접근성을 고려하고 반응형으로 움직이는 웹페이지를 공부중입니다</li>
                        <li>기본기가 중요하다는 생각으로 반복학습과 복습을 하고 부족한 부분을 스스로 찾아 발전하는 퍼블리셔가 되고싶습니다!</li>
                    </ul>
                    <div className="resume">
                             <a href={resume} download>
                                <img src={iconRight} alt="자기소개서" />
                                자기소개서 다운로드
                            </a>                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;