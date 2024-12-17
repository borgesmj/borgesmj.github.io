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
  bio: "Hi! I'm **Miguel**, a FrontEnd dev, focused on create atractive and user friendly websites || I’m a strong believer in continuous learning, which keeps me adaptable and growing with industry trends. My goal is to deliver quality and efficiency on every project while prioritizing collaboration and constant improvement. If you're looking for someone who’s committed, adaptable, and results-driven, I’d love to connect!",
};

export const socials = [
  { name: "github", href: "https://github.com/borgesmj", color: "#171515" },
  { name: "linkedin", href: "https://www.linkedin.com/in/borgesmj/", color: "#0073b1" },
  { name: "twitter", href: "https://x.com/saburodotjs", color: "#1DA1F2" },
  { name: "instagram", href: "https://instagram.com/saburodotjs", color: "#E1306C" },
  { name: "telegram", href: "https://t.me/saburodotjs", color: "#229ED9" },
];

export const workExperience = [
  {
    id: 1,
    company: "Freelance",
    position: "Frontend Developer",
    startDate: "January 2023",
    endDate: "Present",
    responsibilities: [
      "Built and deployed responsive web projects using React.js, Astro, and Tailwind CSS, focusing on performance and user-centered design.",
      "Collaborated with backend technologies like Node.js and Flask, enhancing my understanding of full-stack development through hands-on projects.",
      "Integrated REST APIs and Firebase Authentication in personal projects, learning best practices for secure and efficient data handling.",
      "Developed UI/UX features with an emphasis on accessibility and mobile-first design, improving usability and visual consistency across devices.",
      "Engaged in continuous learning, exploring modern frameworks and design patterns to enhance my skills and deliver quality in each project."
    ],
    location: "Remote"
  }
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
      "An e-commerce platform for sweets and snacks built with NextJs. It includes features such as product catalog, shopping cart, and user reviews. The database is built with firebase",
    technologies: ["NextJs", "Tailwind CSS", "Firebase", "React"],
    repositoryLink: "https://github.com/borgesmj/sweet-bites",
    liveDemo: "https://sweet-bites.vercel.app/",
    year: 2024,
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