import React, { useEffect } from "react";
import { contactText } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="contact">
            <div className="contact__inner">
                <table
                    className="contact__text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <tbody>
                        {contactText.map((contact, i) => (
                            <tr key={i}>
                                <td>{contact.title}</td>
                                <td><a href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.linkTitle}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Contact;