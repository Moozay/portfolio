import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    vue,
    next,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    fastapi,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    fundme,
    credirect,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [{
        name: "Vue js",
        icon: vue,
    },
    {
        name: "Next js",
        icon: next,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
         name: "FastAPI",
         icon: fastapi,
     },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
       name: "Python",
       icon: python,
     },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [{
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Credirect",
        description: "Web-base platform that allows management of credit records. This goes all the way to records creation, updating and deleting. Automatic contract/invoice generation, easy calculation of existing credit score and taxes ",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "fastapi",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: credirect,
        source_code_link: "https://github.com/Moozay/CredirectSoftware",
    },
    {
        name: "FundMe",
        description: "Fund Me is a comprehensive financial services platform that provides a range of features including Savings + Investments, Loans, Virtual Cards, Payments (Transfers, bills, and utilities), Airtime to Cash, and Accounts. It is designed to empower users with various financial tools to manage their money efficiently.",
        tags: [{
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "fastapi",
                color: "green-text-gradient",
            },
            {
                name: "node js",
                color: "pink-text-gradient",
            },
        ],
        image: fundme,
        source_code_link: "https://github.com/FUND-ME-AFRICA/fund-me-prod/",
    },
];

export { services, technologies, experiences, testimonials, projects };