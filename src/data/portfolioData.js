export const personalInfo = {
  name: "Deepak Keshri",
  role: "Sotfware Developer",
  email: "deepakkeshri263@gmail.com",
  phone: "+91 9322129567",
  location: "Malad, Mumbai, India",
  github: "https://github.com/deepak101010",
  linkedin: "https://linkedin.com/in/deepak-keshri-89b99213",
  bio: "I'm a skilled software developer with experience in Javascript, and expertise in frameworks like React and Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
  photo: "/profile-photo.png",
  resumeUrl: "/deepak_keshri-cv.pdf"
};

export const education = [
  {
    degree: "B.Sc. Information Technology",
    institution: "Nagindas Khandwala College Mumbai",
    duration: "2020 – 2023",
    cgpa: "8.51",
    description: "Comprehensive study of Information Technology, Computer Science fundamentals, and software development practices."
  }
];

export const experience = [
  {
    title: "Front End Developer",
    company: "Goldenmace IT Solutions",
    duration: "Apr 2024 – Aug 2025",
    type: "Full-time",
    description: "Developed and maintained responsive web applications using React.js, Vue.js, and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    technologies: ["React.js", "Vue.js", "JavaScript", "HTML5", "CSS3", "SCSS", "Bootstrap", "Laravel"]
  },
  {
    title: "Frontend Development Intern",
    company: "Goldenmace IT Solutions",
    duration: "Aug 2023 – Mar 2024",
    type: "Internship",
    description: "Gained hands-on experience in frontend development, learned modern frameworks, and contributed to various client projects under senior developer mentorship.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Git"]
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, icon: "SiJavascript" },
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss3" },
    { name: "PHP", level: 50, icon: "SiPhp" },
    { name: "Java", level: 40, icon: "SiJava" }
  ],
  frameworks: [
    { name: "React.js", level: 90, icon: "SiReact" },
    { name: "Next.js", level: 85, icon: "SiNextdotjs" },
    { name: "Vue3", level: 80, icon: "SiVuedotjs" },
    { name: "Nuxt4", level: 75, icon: "SiNuxtdotjs" },
    { name: "Laravel", level: 60, icon: "SiLaravel" },
    { name: "Node.js", level: 60, icon: "SiNodedotjs" },
  ],
  tools: [
    { name: "Git", level: 85, icon: "SiGit" },
    { name: "GitHub", level: 85, icon: "SiGithub" },
    { name: "Postman", level: 80, icon: "SiPostman" },
    { name: "Bootstrap", level: 90, icon: "SiBootstrap" },
    { name: "SCSS", level: 85, icon: "SiSass" },
    { name: "Tailwind", level: 90, icon: "SiTailwindcss" },
  ]
};

export const projects = [
  {
    title: "Streamit",
    description: "A modern streaming platform built with React.js, featuring user authentication, video streaming, and responsive design.",
    image: "/images/projects/streamit.webp",
    technologies: ["React.js", "JavaScript", "CSS3", "Vue.js",  "Laravel"],
    githubLink: "#",
    liveLink: "https://preview.themeforest.net/item/streamit-video-streaming-html-admin-template/full_screen_preview/28369705",
    featured: true
  },
  {
    title: "Hope UI Pro",
    description: "Professional admin dashboard template with modern UI components and comprehensive functionality.",
    image: "/images/projects/hopeui.png",
    technologies: ["React.js", "JavaScript", "SCSS", "Bootstrap"],
    githubLink: "#",
    liveLink: "https://templates.iqonic.design/hope-ui/pro/react/",
    featured: true
  },
  {
    title: "SocialV",
    description: "Social media platform with real-time messaging, post sharing, and user interaction features.",
    image: "/images/projects/socialv.jpg",
    technologies: ["React.js", "JavaScript", "SCSS", "Bootstrap"],
    githubLink: "#",
    liveLink: "https://templates.iqonic.design/socialv-dist/react/",
    featured: true
  },
  {
    title: "HealthCare AI Chatbot",
    description: "Healthcare assistant. Analyze the user's symptoms and provide appropriate guidance. The chatbot leverages advanced natural language processing to understand user queries, offers preliminary health advice, and suggests next steps such as home remedies or consulting a medical professional. It supports multi-turn conversations, maintains user context, and integrates with external APIs for up-to-date medical information. Designed with user privacy in mind, the chatbot ensures all interactions are confidential and secure.",
    image: "/images/projects/healthcare-chatbot.svg",
    technologies: ["React.js", "TypeScript", "Python", "FastAPI", "OpenAI API"],
    githubLink: "https://github.com/deepak101010/healthcare-ai-chatbot",
    liveLink: "#",
    featured: true
  },
  {
    title: "TextFormate-React",
    description: "Built a text utility tool using react.js for word/character counting and text manipulation. Implemented features like extra space removal, case conversion (uppercase ↔ lowercase), and copy-to clipboard.",
    image: "/images/projects/textformate.png",
    technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap"],
    githubLink: "https://github.com/deepak101010/textformate",
    liveLink: "https://deepak101010.github.io/textformate/",
    featured: true
  },
  {
    title: "CRUD Operation",
    description: "Crud Developed a comprehensive CRUD application featuring basic Create, Read, Update, and Delete operations to manage data effectively, demonstrating proficiency in building and maintaining fundamental data-driven functionalities.",
    image: "/images/projects/crud.png",
    technologies: ["PHP", "JavaScript"],
    githubLink: "https://github.com/deepak101010/CRUD_Operation",
    liveLink: "#",
    featured: false
  },
  {
    title: "Calculator",
    description: "Calculator built with Python, offering various text manipulation and formatting options.",
    image: "/images/projects/calculator.png",
    technologies: ["Python"],
    githubLink: "https://github.com/deepak101010/Calculator",
    liveLink: "#",
    featured: false
  }
];

export const certifications = [
  {
    title: "Frontend Developer",
    issuer: "Goldenmace IT Solutions",
    date: "2024",
    description: "Comprehensive frontend development certification covering modern frameworks and best practices."
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "2023",
    description: "Fundamentals of Python programming, data structures, and algorithmic thinking."
  },
  {
    title: "PHP for Beginners",
    issuer: "Great Learning",
    date: "2023",
    description: "Server-side programming with PHP, database integration, and web development fundamentals."
  },
  {
    title: "HTML Development",
    issuer: "Great Learning",
    date: "2023",
    description: "Advanced HTML techniques, semantic markup, and web standards compliance."
  }
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "#resume" }
];