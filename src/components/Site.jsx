import React, { useEffect, useRef } from "react";
/* gsap */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* 자료 */
import {siteText} from "../constants";
/* 이미지 */
import iconGithub from "../assets/img/ico_github.png";
import iconRight from "../assets/img/ico_right.png";

const Site = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 0",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="site" ref={horizontalRef}>
            <div className="site__inner">
                <div className="site__list">
                    {siteText.map((site, key) => (
                        <div 
                            className="site__item" 
                            key={key}
                            ref={(el) => (sectionsRef.current[key] = el)}
                        >
                            <a href={site.view} target='_blank' rel='noopener noreferrer'>
                                <img className="siteImg" src={site.img} alt="포트폴리오" />
                            </a>
                            <div className="text">
                                <h3><em>{site.title01}</em> {site.title02}</h3>
                                <strong>{site.desc}</strong>
                                <p>{site.skill}</p>
                                <a href={site.code} target='_blank' rel='noopener noreferrer'>
                                    <img src={iconGithub} alt="깃허브" />
                                    GitHub 바로가기
                                </a>
                                <a href={site.view} target='_blank' rel='noopener noreferrer'>
                                    <img src={iconRight} alt="오른쪽화살표" />
                                    사이트 바로가기
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;