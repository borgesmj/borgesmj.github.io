export const navlinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "#about",
  },
  {
    name: "experience",
    href: "#experience",
  },
  {
    name: "projects",
    href: "#projects",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

export const profile = {
  name: "Miguel José",
  role: "FrontEnd Web Developer",
  available: true,
  bio: "**Lorem ipsum dolor sit amet**, consectetur adipisicing elit. Assumenda itaque eligendi aliquid alias quibusdam, sequi rem totam amet blanditiis dolorem a, non, dignissimos molestiae autem odio soluta fugiat? || Voluptatibus facilis eveniet facere dolorem sunt nulla laboriosam temporibus voluptatem blanditiis commodi repellendus eligendi vel, molestias cumque at totam perspiciatis deserunt quisquam debitis rerum laudantium!",
};

export const socials = [
  { name: "github", href: "#", color: "#171515" },
  { name: "linkedin", href: "#", color: "#0073b1" },
  { name: "twitter", href: "#", color: "#1DA1F2" },
  { name: "instagram", href: "#", color: "#E1306C" },
  { name: "telegram", href: "#", color: "#229ED9" },
];

export const workExperience = [
  {
    id: 1,
    company: "Tech Corp", // Nombre de la empresa
    position: "Frontend Developer", // Cargo desempeñado
    startDate: "January 2022", // Fecha de inicio
    endDate: "Present", // Fecha de finalización (o "Present" si sigues trabajando allí)
    responsibilities: [
      // Lista de responsabilidades o logros
      "Developed responsive web applications using React and Tailwind CSS.",
      "Collaborated with backend team to integrate REST APIs.",
      "Led UI/UX improvements that enhanced user experience by 20%.",
    ],
    location: "Remote", // Ubicación (puede ser física o remoto)
    technologies: [
      // Tecnologías usadas
      "JavaScript",
      "React",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    id: 2,
    company: "Creative Solutions",
    position: "Junior Developer",
    startDate: "June 2020",
    endDate: "December 2021",
    responsibilities: [
      "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
      "Implemented SEO best practices to increase website visibility.",
      "Supported team in debugging and testing web applications.",
    ],
    location: "New York, NY",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    id: 3,
    company: "Creative Solutions",
    position: "Junior Developer",
    startDate: "June 2020",
    endDate: "December 2021",
    responsibilities: [
      "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
      "Implemented SEO best practices to increase website visibility.",
      "Supported team in debugging and testing web applications.",
    ],
    location: "New York, NY",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export const projects = [
  {
    id: 1,
    name: "ChatMob",
    description:
      "A real-time chat application built using Firebase for backend services and React for the frontend. The app supports user authentication, message storage, and real-time updates.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    repositoryLink: "https://github.com/borgesmj/real-time-chat-app",
    liveDemo: "https://chatmob.netlify.app/",
    year: 2024,
    features: [
      "Real-time messaging",
      "Firebase authentication",
      "Responsive design",
    ],
  },
  {
    id: 2,
    name: "Sweet Bites",
    description:
      "An e-commerce platform for sweets and snacks built with React Router. It includes features such as product catalog, shopping cart, and user reviews.",
    technologies: ["React Router", "Tailwind CSS", "Firebase", "React"],
    repositoryLink: "https://github.com/borgesmj/sweet-bites",
    liveDemo: "https://sweet-bites.co/",
    year: 2023,
    features: [
      "Product catalog",
      "Secure payment integration",
      "Shopping cart functionality",
    ],
  },
  {
    id: 3,
    name: "Frontend 101",
    description:
      "A blog that focuses on teaching the fundamentals of frontend development with tutorials on React, JavaScript, and other frontend technologies.",
    technologies: ["Astro", "React", "Tailwind CSS"],
    repositoryLink: "https://github.com/borgesmj/saburo-blog",
    liveDemo: "https://frontend101.netlify.app/",
    year: 2024,
    features: [
      "Tutorials on React and JavaScript",
      "SEO-friendly static site",
      "Responsive layout",
    ],
  },
  {
    id: 4,
    name: "SaburoFinanceBot",
    description:
      "A Telegram bot built with Java and MySQL that tracks user expenses and income. It features user-friendly commands for adding, updating, and viewing financial data.",
    technologies: ["Java", "MySQL", "Telegram"],
    repositoryLink: "https://github.com/borgesmj/telegram_app_bot",
    liveDemo: null,
    year: 2024,
    features: [
      "Expense and income tracking",
      "MySQL database integration",
      "Interactive user commands",
    ],
  },
];


export const badges = [
  {
    name: "tailwindcss",
    color: "#06B6D4"
  },{
    name: "firebase",
    color: "#DD2C00"
  },
  {
    name: "react",
    color: "#61DAFB"
  },
  {
    name: "javascript",
    color: "#F7DF1E"
  },
  {
    name: "reactrouter",
    color: "#CA4245"
  },
  {
    name: "astro",
    color: "#BC52EE"
  },
  {
    name: "mysql",
    color: "#4479A1"
  },
  {
    name: "telegram",
    color: "#26A5E4"
  }
]