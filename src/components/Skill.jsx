import React, { useEffect, useState } from "react";
import { SkillText } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
    /* 탭버튼 */
    const [Tab, setTab] = useState(0);
    const selectTab = (index) => {
        setTab(index);
    };
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="skill" >
            <div className="skill__inner" >
                <div className="skill__warp">
                    <h3 className="skill__title">Skill & Tools</h3>
                    <div className="skill__tab">
                        <ul className="list">
                            {SkillText.map((skill, i) => (
                                <li className={i === Tab ? "item on" : "item"} onClick={() => selectTab(i)} key={i}>
                                    <img src={skill.img} alt="" />
                                </li>
                            ))}
                        </ul>

                        <div className="content-wrapper">
                            <div className="content" data-aos="zoom-in">
                                {SkillText[Tab].content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;