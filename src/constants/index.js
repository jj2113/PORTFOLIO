import iconGithub from "../assets/img/ico_github.png"
import iconRight from "../assets/img/ico_right.png"

import skill01 from "../assets/img/ico_html.png";
import skill02 from "../assets/img/ico_css.png";
import skill03 from "../assets/img/ico_js.png";
import skill04 from "../assets/img/ico_scss.png";
import skill05 from "../assets/img/ico_git.png";
import skill06 from "../assets/img/ico_react.png";
import skill07 from "../assets/img/ico_figma.png";

import site01 from "../assets/img/site_port.jpg";
import site02 from "../assets/img/site_kps.jpg";
import site03 from "../assets/img/site_dell.jpg";
import site04 from "../assets/img/site_mouseEffect.jpg";
import site05 from "../assets/img/site_andar.jpg";


export const headerNav = [
    {
        title: "Home",
        url: "#intro",
    },
    {
        title: "Projects",
        url: "#site",
    },
    {
        title: "Contact",
        url: "#contact",
    },
];

export const introText = [
    {
        link: "https://github.com/jj2113",
        img: iconGithub,
        desc: "깃허브",
        title: "GitHub 바로가기",
    },
    {
        link: "https://blog.naver.com/chemi9702",
        img: iconRight,
        desc: "오른쪽화살표",
        title: "블로그 바로가기",
    },
]

export const SkillText = [
    {
        img: skill01,
        content: "웹표준, 웹접근성에 올바르며 모든 사람들이 편하게 이용할 수 있는 HTML 구조를 마크업하고  \n 반응형/적응형 웹사이트를 구현할 수 있습니다. "
    },
    {
        img: skill02,
        content: " 다양한 최신 트렌드 디자인과 애니메이션을 구성하며 JAVASCRIPT와 \n 연동할 수 있는 디자인을 제작할 수 있습니다."
    },
    {
        img: skill03,
        content: " 슬라이드, 메뉴, 스크롤 애니메이션 기능 등 최신 트렌드에 적용된 다양한 \n 동적 기능을 자바스크립트로 구현 가능합니다."
    },
    {
        img: skill04,
        content: "CSS 전처리기인 SCSS를 사용하여  모듈화, 믹스인, 상속 등을 이용한 개발 및 \n 코드의 재활용성을 올리고, 가독성을 높일 수 있습니다. "
    },
    {
        img: skill05,
        content: " git 명령어를 활용하여 gitHub에 진행중인 프로젝트를 푸쉬하고 \n 소스 코드를 관리할 수 있습니다."
    },
    {
        img: skill06,
        content: "리액트의 함수형 컴포넌트 단위의 마크업 개발을 할 수 있습니다. \n  React Hooks, Router 등에 대해 공부하고 있습니다."
    },
    {
        img: skill07,
        content: "피그마를 사용하여 와이어프레임, 프로토타입을 활용한 아이디어 기획 구조 등 \n 웹디자인을 기획, 제작할 수 있습니다."
    },
]

export const siteText = [
    {
        img: site01,
        title01: "PORTFOLIO-React",
        title02: "사이트",
        desc: "제작 : 7일, 코딩, 디자인 개인 100% 작업",
        skill: "REACT, SCSS, HTML, CSS, JAVASCRIPT",
        code: "https://github.com/jj2113/PORTFOLIO",
        view: "https://portfolio-jiwon.netlify.app/",
    },
    {
        img: site02,
        title01: "한전 KPS",
        title02: "리디자인",
        desc: "제작 : 7일, 코딩, 디자인 개인 100% 작업",
        skill: "HTML, CSS, JAVASCRIPT",
        code: "https://github.com/jj2113/kps-site",
        view: "https://jj2113.github.io/kps-site/",
    },
    {
        img: site03,
        title01: "DELL Technologies",
        title02: "리디자인",
        desc: "제작 : 7일, 코딩, 디자인 개인 100% 작업",
        skill: "HTML, CSS, JAVASCRIPT",
        code: "https://github.com/jj2113/dell-site",
        view: "https://jj2113.github.io/dell-site/",
    },
    {
        img: site04,
        title01: "Mouse Effect",
        title02: "연습 사이트",
        desc: "제작 : 1일, 코딩 개인 100% 작업",
        skill: "HTML, CSS, JAVASCRIPT",
        code: "https://github.com/jj2113/mouse-site",
        view: "https://jj2113.github.io/mouse-site/",
    },
    {
        img: site05,
        title01: "Andar",
        title02: "모바일 앱 리디자인",
        desc: "제작 : 7일, 코딩, 디자인 개인 100% 작업",
        skill: "HTML, CSS, JAVASCRIPT, JQUERY",
        code: "https://github.com/jj2113/andar-site",
        view: "https://jj2113.github.io/andar-site/",
    },
]

export const contactText = [
    {
        title: "E-mail",
        link: "mailto:chemi9702@naver.com",
        linkTitle: "chemi9702@naver.com"
    },
    {
        title: "GitHub",
        link: "https://github.com/jj2113",
        linkTitle: "https://github.com/jj2113"
    },
    {
        title: "Phone",
        link: "tel:010-9702-7449",
        linkTitle: "010-9702-7449"
    },
]

export const footerText = [
    {
        link: "https://github.com/jj2113",
        title: "Github"
    },
    {
        link: "https://blog.naver.com/chemi9702",
        title: "Blog"
    },
    {
        link: "mailto:chemi9702@naver.com",
        title: "E-mail"
    },
]