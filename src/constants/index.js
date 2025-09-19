import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "AI-Powered React Chatbot",
    description:
     "An intelligent chatbot application developed in React with API integrations for Gemini AI, OpenAI, and DeepSeek AI, enabling real-time, context-aware conversations.",
    subDescription: [
      "Developed a modern chatbot interface using React with responsive design and smooth UI interactions.",
    "Integrated multiple AI APIs (Gemini AI, OpenAI, and DeepSeek AI) for diverse and human-like conversational responses.",
    "Implemented real-time messaging features including typing indicators and chat history.",
    "Optimized performance with efficient state management, lazy loading, and production-ready builds.",
    "Showcased strong skills in API integration, frontend development, and building AI-driven applications.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/chat-bot.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
       {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id:3,
        name:"Api",
        path: "/assets/logos/api.svg",
      }
    ],
  },
  {
    id: 2,
    title: "Paste App",
    description:
      "A web-based note-sharing and code snippet management application inspired by Pastebin, enabling users to create, save, and share text or code easily.",
    subDescription: [
      "Developed using React for the frontend with a clean, responsive UI for seamless user experience.",
    "Implemented features like creating, editing, and deleting pastes with unique shareable links.",
    "Integrated syntax highlighting for better readability of code snippets.",
    "Added local storage support for draft saving and quick retrieval.",
    "Focused on performance optimization and clean UI design to ensure smooth functionality.",
    ],
    href: "https://paste-app-bay-delta.vercel.app/",
    logo: "",
    image: "/assets/projects/pasteapp.jpg",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
  id: 3,
  title: "Currency Converter",
  description:
    "A responsive web-based Currency Converter application built with HTML, CSS, and JavaScript, integrated with a live currency exchange API for real-time conversions.",
  subDescription: [
    "Developed the application using vanilla JavaScript for real-time exchange rate calculations.",
    "Integrated a currency conversion API to fetch up-to-date exchange rates.",
    "Designed a clean and responsive UI with HTML and CSS for seamless usability.",
    "Implemented dynamic dropdowns for selecting currencies and displaying converted values instantly.",
    "Optimized the app for both desktop and mobile devices to ensure accessibility."
  ],
  href: "https://github.com/NikhilMaurya-17/Currency-Converter",
  logo: "",
  image: "/assets/projects/currency converter.webp",
  tags: [
    {
      id: 1,
      name: "HTML",
      path: "/assets/logos/html5.svg",
    },
    {
      id: 2,
      name: "CSS",
      path: "/assets/logos/css3.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      path: "/assets/logos/javascript.svg",
    },
    {
      id: 4,
      name: "API",
      path: "/assets/logos/api.svg",
    }
  ],
},

  {
    id: 4,
    title: "Tic Tac Toe Game",
    description:
      "An interactive web-based Tic Tac Toe game built with Javascript logic, featuring a responsive design and intelligent game logic for two players.",
    subDescription: [
     "Built an interactive Tic Tac Toe game using HTML, CSS, and JavaScript.",
  "Implemented game logic for win/draw detection and two-player mode.",
  "Designed a clean, responsive UI with reset functionality.",
    ],
    href: "https://github.com/NikhilMaurya-17/Tic-tac-toe-game",
    logo: "",
    image: "/assets/projects/tic-tac toe-game jpg.webp",
    tags: [
      {
        id: 1,
        name: "Html5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id:3,
        name:"Javascript",
        path:"/assets/logos/javascript.svg"
      }
    ],
  },
  {
    id: 4,
    title: "To-Do Application",
    description:
      "A modern To-Do application built with Next.js, featuring fast performance, server-side rendering, and a responsive UI to efficiently manage daily tasks.",
    subDescription: [
     "Developed with Next.js to leverage server-side rendering and optimized performance.",
    "Implemented core CRUD functionality (add, edit, delete, mark complete) for task management.",
    "Designed a responsive and clean UI using Tailwind CSS for seamless cross-device experience.",
    "Integrated persistent storage (local storage or database) to save tasks across sessions.",
    "Added task filtering and sorting (All, Active, Completed) for better organization.",
    ],
    href: "https://github.com/NikhilMaurya-17/Todo-app",
    logo: "",
    image: "/assets/projects/todo app.webp",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/assets/logos/Nextjs.webp",
      },
      {
        id: 2,
        name: "tailwindcss",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Javasctipt",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/NikhilMaurya-17",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nikhil-maurya-b9aaa728a/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
   {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
  {
    title: "Frontend Developer ",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  
 
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];