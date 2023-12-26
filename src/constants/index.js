import {
    mobile,
    backend,
    // creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    supabase,
    tailwind,
    nextjs,
    python,
    git,
    figma,
    django,
    mulogo,
    park,
    space,
    iedc,
    threejs,
	threeportfolio,
	campus,
	maze,
	careerio,
	eachpays,
	chrome,
	sngist,
	todo,
	iedcold,
	portfolio,
} from "../assets";

export const navLinks = [
    {
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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React PWA Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Supabase",
        icon: supabase,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Python",
        icon: python,
    },
];

const experiences = [
    {
        title: "Front-End Team Lead",
        company_name: "MuLearn Foundation",
        icon: mulogo,
        iconBg: "#383E56",
        date: "August 2023 - Present",
        points: [
            "Developing and maintaining web applications using React with TypeScript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer Intern",
        company_name: "MuLearn Foundation",
        icon: mulogo,
        iconBg: "#E6DEDD",
        date: "May 2023 - August 2023",
        points: [
            "Acquiring proficiency in React, JavaScript, TypeScript, and Django to enhance web development skills.",
            "Gaining valuable experience in team collaboration and effective communication while working on diverse software projects.",
            "Designing and implementing various core components for the company's dashboard, ensuring functionality and user-friendliness.",
            "Engaging in continuous learning to stay updated with the latest trends and best practices in full-stack development.",
            "Participating in regular team meetings to discuss project progress, share insights, and brainstorm innovative solutions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Three JS Portfolio",
        description:
            "A portfolio website designed with React and Three.js, featuring interactive 3D elements and animations for a captivating online presence.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "threejs",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "text-[purple]",
            },
        ],
        image: threeportfolio,
        source_code_link: "https://github.com/Jenin82/threejs-portfolio",
    },
    {
        name: "SNGIST IEDC",
        description:
            "A responsive website created with Next.js, Tailwind, and DaisyUI for the Innovation and Entrepreneurship Development Center at SNGIST Group of Institutions.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "daisyui",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "text-[purple]",
            },
        ],
        image: iedc,
        source_code_link: "https://github.com/Jenin82/sngist-iedc",
    },
    {
        name: "Park Plus",
        description:
            "Web-based platform that allows users to search, book, and manage car parking from various providers, providing a convenient and efficient solution for parking.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "text-[purple]",
            },
        ],
        image: park,
        source_code_link: "https://github.com/Jenin82/ParkPlus",
    },
    {
        name: "Space Portfolio",
        description:
            "A space-themed portfolio website using Next.js and Tailwind CSS for a unique, cosmic showcase of skills and projects with responsive design and optimal performance.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "framermotion",
                color: "pink-text-gradient",
            },
        ],
        image: space,
        source_code_link: "https://github.com/Jenin82/SpacePortfolio",
    },
    {
        name: "EachPays",
        description:
            "EachPays is a PWA built with React, Vite, and TypeScript, streamlining group expense management and tracking individual contributions.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "pwa",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "text-[purple]",
            },
        ],
        image: eachpays,
        source_code_link: "https://github.com/Jenin82/EachPays",
    },
    {
        name: "Careerio",
        description:
            "A platform linking students and companies, leveraging the Beckn protocol and OpenAI's API to offer more than just job listings—it's an ecosystem for growth and opportunities.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "beckn",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "pink-text-gradient",
            },
            {
                name: "django",
                color: "text-[purple]",
            },
        ],
        image: careerio,
        source_code_link: "https://github.com/Jenin82/SkillSpectrum",
    },
    {
        name: "Maze App",
        description:
            "A React-based Progressive Web App (PWA) designed for facilitating team collaboration activities and hosting games such as treasure hunts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "pwa",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "text-[purple]",
            },
            {
                name: "django",
                color: "text-[grey]",
            },
        ],
        image: maze,
        source_code_link: "https://github.com/Jenin82/iedc-summit-app",
    },
    {
        name: "Campus Chapters",
        description:
            "A no-code website developed for MuLearn Community's Campus Chapters, constructed with React and TypeScript for ease of use and customization.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
        ],
        image: campus,
        source_code_link: "https://github.com/Jenin82/campus-chapter",
    },
    {
        name: "SNGIST Website",
        description:
            "A responsive website with a grievance management system created with django, html, css, and bootstrap for SNGIST Group of Institutions.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: sngist,
        source_code_link: "https://github.com/Jenin82/django-web",
    },
    {
        name: "Chrome Extension",
        description:
            "A basic Chrome extension developed using HTML, CSS, and JavaScript, It enabling users to save and access website links for future use.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: chrome,
        source_code_link: "https://github.com/Jenin82/cl-web-chromeex",
    },
    {
        name: "Todo Website",
        description:
            "A basic TODO website created as a personal project using React, Vite, CSS, and TypeScript, offering functionalities to add, edit, and remove tasks.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "vite",
                color: "text-[purple]",
            },
        ],
        image: todo,
        source_code_link:
            "https://github.com/Jenin82/mulearn-internship-react-vite",
    },
    {
        name: "SNGIST IEDC (old)",
        description:
            "A responsive website created with HTML, CSS, and Bootstrap for the Innovation and Entrepreneurship Development Center at SNGIST Group of Institutions.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: iedcold,
        source_code_link: "https://github.com/Jenin82/IEDC-webpage",
    },
    {
        name: "Portfolio Website",
        description:
            "A simple and mobile-friendly portfolio website created with Bootstrap, HTML and CSS, featuring scroll-triggered animations for an interactive user experience.",
        tags: [
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "animateOnScroll",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/Jenin82/Jenin82.github.io/",
    },
];

export { services, technologies, experiences, testimonials, projects };
