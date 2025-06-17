import project1 from "../assets/projects/studywithbuddies.png";
import project2 from "../assets/projects/underwaterrobot.jpg";
import project3 from "../assets/projects/oversurge.png";
import project4 from "../assets/projects/colorsurge.png";
import project5 from "../assets/projects/virtualassistant.jpeg";
import project6 from "../assets/projects/fittogether.png";
import pinpal_logo from "../assets/projects/pinpal-logo.png";
import lahacks25 from "../assets/projects/lahacks25.png";

export const HERO_CONTENT = 
`Hey! I'm a junior at UCLA studying computer science. I have experience in research, full stack development, and artificial intelligence. In my free time, I love hiking, volunteering, and music. My goal is to learn new technologies, acquire new skills, and explore the infinite applications of software.`;

export const EXPERIENCES = [
  {
    year: "Summer 2025",
    role: "Software Development Intern",
    company: "Amazon",
    description: `AWS`,
    technologies: [],
  },
  {
    year: "Summer 2024",
    role: "Software Development Intern",
    company: "rtZen.ai",
    description: `Worked on ML classification/regression models and MLOps pipeline with a Flask server.`,
    technologies: ["Python", "Flask", "MLOps", "scikit-learn"],
  },
  {
    year: "Summer 2023",
    role: "Software Development Intern",
    company: "ClaimZippy",
    description: `Worked on crucial frontend/backend features (MERN stack) for a software startup to automate the medical insurance claim process.`,
    technologies: ["React", "Node.js", "MongoDB", "ExpressJS", "PostgreSQL"],
  },
  {
    year: "Summer 2022",
    role: "STEM Intern",
    company: "NASA",
    description: `Worked on an AI-based science translator for the dissemination of hydrological data to the public. Implemented different NLP and deep learning models for research abstract and poster.`,
    technologies: ["Python", "Pytorch"],
  },
];

export const PROJECTS = [
  {
    title: "PinPal",
    image: pinpal_logo,
    description:
      "Developing map-based social media app (50+ users in beta testing).",
    technologies: ["PostgreSQL", "ExpressJS", "React", "Node.js", "AWS"],
    link: "https://sunnyvinay.com"
  },
  {
    title: "Sir Syncs A Lot | LA Hacks 2025 -->",
    image: lahacks25,
    description:
      "Unified AI agent on the phone that can complete tasks on your computer.",
    technologies: ["Python", "FastAPI", "React"],
    link: "https://github.com/JonOuyang/lahacks"
  },
  {
    title: "Study With Buddies -->",
    image: project1,
    description:
      "Used MERN stack to develop a web app for UCLA students to join, create, and find study groups/buddies.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js"],
    link: "https://github.com/sunnyyvinay/study-with-buddies"
  },
  {
    title: "Underwater Robot -->",
    image: project2,
    description:
      "Designed CAD and put together electronics with C++ code for an underwater robot with a camera and 6 controllable motors.",
    technologies: ["C++"],
    link: "https://github.com/sunnyyvinay/underwater-robot"
  },
  {
    title: "FitTogether",
    image: project6,
    description:
      "Used Javascript and Python to develop a fitness mobile app to create workouts and find partners.",
    technologies: ["React", "Flask", "Firebase"],
    link: "https://sunnyvinay.com"
  },
  {
    title: "OverSurge -->",
    image: project3,
    description:
      "Designed, developed, and maintained a video game companion Android app in Java with 500+ installs and 5-star ratings.",
    technologies: ["Java", "Android"],
    link: "https://github.com/sunnyyvinay/OverSurge"
  },
  {
    title: "ColorSurge -->",
    image: project4,
    description:
      "Designed, developed, and maintained a photo color editing Android app in Java with 100+ installs and 5-star ratings.",
    technologies: ["Java", "Android"],
    link: "https://github.com/sunnyyvinay/ColorSurge"
  },
  {
    title: "AI Chatbot and Assistant -->",
    image: project5,
    description:
      "Developed virtual assistant and chatbot in Python using SQL, various APIs, and natural language processing..",
    technologies: ["Python", "SQL"],
    link: "https://github.com/sunnyyvinay/MultiRoomChat-andChatBot"
  },
];

export const RESEARCH = [
  {
    year: "Jan 2024 - Present",
    role: "Undergraduate Researcher",
    company: "UCLA Cannesson Lab -->",
    description: `Working on  models using surgery patient waveform data. Co-authored 2 abstracts.`,
    technologies: ["Python", "scikit-learn"],
    link: "https://www.uclahealth.org/departments/anes/research/cannesson-laboratory"
  },
  {
    year: "Oct 2024 - Jun 2025",
    role: "Undergraduate Researcher",
    company: "UCLA Ozcan Lab -->",
    description: `Worked on optimizing all-optical machine learning using diffractive deep neural networks (D2NN).`,
    technologies: ["Python", "PyTorch"],
    link: "https://research.seas.ucla.edu/ozcan/"
  },
  {
    year: "Jun 2021 - May 2022",
    role: "Independent Researcher and Author",
    company: "Differential Privacy -->",
    description: `Conducted independent research on accuracy/privacy tradeoff with differential privacy. Published paper to the Journal of Emerging Investigators.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    link: "https://emerginginvestigators.org/articles/22-130"
  },
];

export const CONTACT = {
  phoneNo: "+1 (408) 656-7734",
  email: "sunnyvinay@ucla.edu",
};
