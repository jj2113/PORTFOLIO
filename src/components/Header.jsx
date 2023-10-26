import React, { useState } from "react";
import { headerNav } from "../constants";

const Header = () => {
    /* 탭버튼 */
    const [Tab, setTab] = useState(0);
    const selectTab = (index) => {
        setTab(index);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <nav className="header__nav" role="navigation" aria-label="메인메뉴">
                    <ul>
                        {headerNav.map((nav, i) => (
                            <li
                                className={i === Tab ? "item on" : "item"}
                                onClick={() => selectTab(i)}
                                key={i}
                            >
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}</ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;