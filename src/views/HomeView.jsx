import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Port from "../components/port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;