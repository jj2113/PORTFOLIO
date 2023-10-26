import React from "react";
import {footerText} from "../constants";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__inner">
                <ul className="footer__right">
                    {footerText.map((footer, i) => (
                        <li key={i}>
                            <a href={footer.link} target='_blank' rel='noopener noreferrer'>{footer.title}</a>
                        </li>
                    ))}

                </ul>
                <p>(C) 2023 choi jiwon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;