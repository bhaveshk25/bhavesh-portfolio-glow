import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Bhavesh Kumawat",
  email: "kumawatbhav001@gmail.com",
  phone: "+91 96609 75486",
  location: "India",
  linkedin: "https://www.linkedin.com/in/bhaveshkumar07",
  github: "https://github.com/bhaveshk25",
  leetcode: "https://leetcode.com/u/bhaveshk25",
};

export const aboutItems = [
  "I am Bhavesh Kumawat, a Computer Science & Engineering undergraduate at Lovely Professional University driven by curiosity, high agency, and a passion for turning ideas into working software.",
  "My core technical sweet spot is at the intersection of Machine Learning, Data Science, and Systems Automation — from architecting native desktop tools like VisionType with Quartz Unicode injection to training predictive pipelines using TensorFlow Decision Forests.",
  "I believe strong software engineering requires both algorithmic rigor and practical craftsmanship. I continuously sharpen my problem-solving skills across Data Structures & Algorithms, Backend systems, and Generative AI through dedicated programs at CipherSchools and GeeksforGeeks.",
  "Beyond writing code, I care about building tools that are dependable, delightful, and genuinely solve real problems. I am currently seeking engineering internships and collaborative opportunities where I can contribute immediately, learn fast, and ship impactful software.",
];

export const skillGroups = [
  {
    title: "Build",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Think",
    items: ["Python", "Data Science", "Machine Learning", "DSA", "DBMS", "Analytics"],
  },
  {
    title: "Ship",
    items: ["Git", "Docker", "Automation", "Problem Solving", "Deployment", "Collaboration"],
  },
];

export const projects = [
  {
    title: "VisionType — macOS OCR & Automation Tool",
    description:
      "A native macOS menu bar utility for high-speed OCR screen capture, clipboard automation, and human-like typing injection with Quartz Unicode support.",
    stack: ["Python", "macOS", "rumps", "pytesseract", "Quartz"],
    note: "Engineered to overcome clipboard restrictions and automate tedious typing workflows.",
  },
  {
    title: "House Price Prediction (Dual ML Pipeline)",
    description:
      "End-to-end regression system predicting property values, benchmarking Linear Regression against TensorFlow Decision Forests (TF-DF) to capture non-linear feature interactions.",
    stack: ["Python", "TensorFlow", "TF-DF", "Scikit-Learn", "Pandas"],
    note: "Complete ML pipeline with EDA, imputation, log-scaling, and metric evaluation.",
  },
  {
    title: "EcoCityIQ — Urban Air Quality Forecasting",
    description:
      "A city intelligence dashboard that studies air quality patterns and forecasts pollution trends with machine learning.",
    stack: ["Python", "Scikit-learn", "ML", "Analytics"],
    note: "Built to turn raw environmental data into readable public insight.",
  },
  {
    title: "AI Charity Donation Optimizer",
    description:
      "An assistant-driven platform that matches donations more intelligently so social impact teams can prioritize where help matters most.",
    stack: ["AI", "Chatbot", "Decision Logic"],
    note: "Focused on using AI to support better decisions, not just automate replies.",
  },
  {
    title: "DriveSense",
    description:
      "A traffic accident analysis experience with interactive insights, global data views, and story-driven visual reporting.",
    stack: ["Visualization", "Data Analysis", "Dashboards"],
    note: "Designed to make complex patterns easier to understand at a glance.",
  },
];

export type JourneyItem = {
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const journey: JourneyItem[] = [
  {
    title: "Computer Science Student",
    label: "Current Focus",
    description:
      "Building a foundation across software engineering, data science, and machine learning while sharpening practical project skills.",
    icon: GraduationCap,
  },
  {
    title: "Hands-on Project Builder",
    label: "What I Do",
    description:
      "Turning ideas into working products, from data-driven tools to automation experiments and polished web interfaces.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Open To Opportunities",
    label: "Next Step",
    description:
      "Looking for internships, collaborations, and real-world problems where contribution, rapid learning, and consistent shipping can create value.",
    icon: Sparkles,
  },
];

export const training = [
  {
    title: "Data Structures & Algorithms, Backend & GenAI",
    provider: "CipherSchools (Jun'26 - Aug'26)",
    detail:
      "Completed industry-oriented training covering advanced DSA problem solving, backend systems architecture, and Generative AI application development.",
  },
  {
    title: "Frontend Development Training",
    provider: "Self-paced + project-based learning",
    detail:
      "Built stronger fundamentals in React, responsive layouts, TypeScript patterns, and component-first UI development.",
  },
  {
    title: "Data Science and Machine Learning Training",
    provider: "Hands-on coursework and practice",
    detail:
      "Worked through data cleaning, visualization, model evaluation, and practical ML workflows using real datasets.",
  },
  {
    title: "DevOps and Deployment Basics",
    provider: "Tooling-focused exploration",
    detail:
      "Learned version control, Docker concepts, deployment flow, and automation habits that make projects easier to ship.",
  },
];

export const certificates = [
  {
    title: "Industry-Oriented Program: DSA, Backend & GenAI",
    issuer: "CipherSchools",
    note: "Completed comprehensive industry training in Data Structures & Algorithms, Backend Systems, and Generative AI for Development (ID: CS2026-18807).",
    image: "/certificates/cipherschools-dsa-backend-genai.png",
    date: "AUG 26",
    href: "/certificates/full/cipherschools-dsa-backend-genai.pdf",
  },
  {
    title: "Complete Machine Learning & Data Science",
    issuer: "GeeksforGeeks",
    note: "Recognizes completion of the GFG machine learning and data science skill program.",
    image: "/certificates/gfg-ml-ds-real.png",
    date: "NOV 25",
    href: "/certificates/full/gfg-ml-ds.pdf",
  },
  {
    title: "Computer Communications",
    issuer: "Coursera",
    note: "Built strong foundations in network design, protocols, and communication systems.",
    image: "/certificates/coursera-networking.png",
    date: "NOV 24",
    href: "/certificates/full/computer-communications.pdf",
  },
  {
    title: "6-Week Live Internship in Data Science",
    issuer: "Techvanto Academy",
    note: "Hands-on internship focused on data science training, evaluation, and applied learning.",
    image: "/certificates/techvanto-data-science.png",
    date: "JUL 25",
    href: "/certificates/full/techvanto-data-science.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL / IIT Kharagpur",
    note: "NPTEL certification covering cloud concepts, evaluation, and platform-level understanding.",
    image: "/certificates/nptel-cloud-computing.png",
    date: "MAY 25",
    href: "/certificates/full/nptel-cloud-computing.pdf",
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    note: "Focused on prompt engineering, GenAI fundamentals, and practical LLM usage.",
    image: "/certificates/chatgpt-prompt-engineering.png",
    date: "AUG 25",
    href: "/certificates/full/chatgpt-prompt-engineering.pdf",
  },
  {
    title: "Digital Systems: From Logic Gates to Processors",
    issuer: "Coursera",
    note: "Covered digital logic, processor concepts, and system-level computing design basics.",
    image: "/certificates/coursera-computer-design.png",
    date: "OCT 24",
    href: "/certificates/full/digital-systems.pdf",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google x Coursera",
    note: "Strengthened practical understanding of networking fundamentals and internet architecture.",
    image: "/certificates/google-networking.png",
    date: "SEP 24",
    href: "/certificates/full/bits-and-bytes-networking.pdf",
  },
  {
    title: "Code-A-Haunt Hackathon Participation",
    issuer: "LPU / Coding Blocks",
    note: "Participation certificate for the 24-hour Code-A-Haunt hackathon at LPU.",
    image: "/certificates/code-a-haunt.png",
    date: "MAR 24",
    href: "/certificates/full/code-a-haunt.png",
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    place: "Current Degree",
    description:
      "Studying core computer science subjects with continued focus on software development, data science, and machine learning.",
  },
  {
    title: "Project-Based Technical Learning",
    place: "Ongoing",
    description:
      "Extending classroom learning through self-driven builds, experimentation, and hands-on portfolio work.",
  },
];

export const heroStats = [
  { value: "7.91", label: "Current CGPA" },
  { value: `${projects.length}+`, label: "Projects completed" },
  { value: `${certificates.length}+`, label: "Total certifications" },
];

export const cvSkillSections = [
  {
    title: "Languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend & Web Technologies",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive Design",
    ],
  },
  {
    title: "Machine Learning & Data Science",
    items: [
      "TensorFlow",
      "TensorFlow Decision Forests (TF-DF)",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "DAX",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    title: "DevOps, Cloud & System Tools",
    items: [
      "Git / GitHub",
      "Docker",
      "Jenkins",
      "Maven",
      "Linux",
      "Visual Studio Code",
      "macOS Quartz / CoreGraphics",
    ],
  },
  {
    title: "Core Competencies",
    items: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "CI/CD Pipelines",
      "System Automation",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Critical Thinking",
      "Technical Communication",
      "Continuous Learning",
    ],
  },
];

export const cvProjects = [
  {
    title: "VisionType — macOS OCR & Keystroke Automation Tool",
    duration: "MAR 25 - APR 25",
    summary:
      "A native macOS menu bar utility that combines background OCR screen capture, clipboard automation, and human-like keystroke injection with full Unicode/emoji Quartz support.",
    points: [
      "Designed and built VisionType, a macOS status bar application automating typing of clipboard and pre-configured text snippets with configurable hotkeys and natural typing jitter.",
      "Implemented screen selection OCR using Tesseract, extracting text from copy-restricted windows, dialogs, and images with automatic preprocessing.",
      "Overcame macOS keyboard layout limitations by implementing CoreGraphics/Quartz event tap injection to faithfully render emojis, special symbols, and Unicode strings.",
    ],
    tech: ["Python", "rumps", "pytesseract", "pyautogui", "Quartz / pyobjc", "macOS"],
    image: "/project-covers/macos-automation.svg",
    href: "https://github.com/bhaveshk25/macOS-copy-paste-tool",
    cta: "Open Project",
  },
  {
    title: "House Price Prediction (Dual ML Pipeline: TF-DF vs. Regression)",
    duration: "JAN 26 - FEB 26",
    summary:
      "An end-to-end machine learning system analyzing property features to predict sales prices, implementing both standard Linear Regression and TensorFlow Decision Forests.",
    points: [
      "Engineered an end-to-end tabular machine learning pipeline with comprehensive data exploration, handling missing values, encoding 79 categorical features, and applying log transformation to reduce skewness.",
      "Built and benchmarked baseline Linear Regression alongside Random Forest and advanced TensorFlow Decision Forests (TF-DF) Gradient Boosted Trees for non-linear feature interactions.",
      "Evaluated model performance using Root Mean Squared Error (RMSE) on log-transformed targets, achieving high predictive accuracy and publishing reproducible notebooks and code.",
    ],
    tech: ["Python", "TensorFlow Decision Forests", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: "/project-covers/house-price-prediction.svg",
    href: "https://github.com/bhaveshk25/House-Price-Prediction",
    cta: "Open Project",
  },
  {
    title: "EcoCityIQ — Urban Air Quality & Pollution Forecasting",
    duration: "AUG 25 - OCT 25",
    summary:
      "An environmental intelligence platform analyzing historical urban air pollution sensors and forecasting AQI trends using machine learning.",
    points: [
      "Developed a predictive analytics pipeline processing atmospheric and environmental sensor datasets (PM2.5, PM10, NO2, CO) for urban air quality monitoring.",
      "Engineered time-series features and trained regression models to forecast air quality indices across urban zones.",
      "Constructed interactive visual dashboards to make environmental trends and hazard warnings understandable for citizens and civic planners.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: "/project-covers/ecocityiq.svg",
    href: "https://github.com/bhaveshk25/ECOCITYIQ-",
    cta: "Open Project",
  },
  {
    title: "DevOps Project: CI/CD Pipeline for Portfolio Website",
    duration: "NOV 25 - DEC 25",
    summary:
      "An end-to-end portfolio delivery pipeline that automates build, testing, containerization, and local deployment with DevOps best practices.",
    points: [
      "Designed and implemented an end-to-end CI/CD pipeline to automate build, test, and deployment of a personal portfolio website using DevOps best practices.",
      "Used Git and GitHub for version control, Jenkins for automation, and Maven for build and dependency management.",
      "Containerized the application using Docker and deployed it locally to ensure consistent environments and faster, reliable deployments.",
    ],
    tech: ["Git", "GitHub", "Jenkins", "Maven", "Linux", "HTML", "CSS"],
    image: "/project-covers/devops-pipeline.svg",
    href: "https://github.com/bhaveshk25/devops-portfolio-project",
    cta: "Open Project",
  },
  {
    title: "India Stock Market Analysis Dashboard",
    duration: "OCT 25 - DEC 25",
    summary:
      "A data-rich Power BI dashboard for tracking Indian stock performance with KPIs, slicers, and company-wise market insight.",
    points: [
      "Designed and developed an interactive Power BI dashboard to analyze Indian stock market performance, visualizing price trends, trading volume, market highs/lows, and sector-wise movements.",
      "Created calculated columns, measures, and KPIs using DAX to track key performance metrics and enable data-driven comparison across companies and time periods.",
      "Implemented dynamic slicers and filters for company-wise and time-based analysis, presenting insights through a clean, user-friendly dashboard to support better investment decision-making.",
    ],
    tech: ["Power BI", "DAX", "Excel/CSV"],
    image: "/project-covers/stock-dashboard.svg",
    href: "https://www.linkedin.com/posts/bhaveshkumar07_indian-stock-market-analytics-dashboard-activity-7408913075929640960-TcK5/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEf6LBsB7zmYttTKCD9cCWRCq9A9kSwIdXE",
    cta: "Open Project",
  },
];

export const cvTraining = {
  title: "Summer Training in Data Science (Techvanto)",
  duration: "JUN 25 - JUL 25",
  summary:
    "A single formal training experience focused on Python-led data analysis, dashboarding, and a machine learning home price estimator project.",
  points: [
    "Completed structured summer training in Data Science with hands-on experience in Python, data analysis, and visualization using real-world datasets.",
    "Performed end-to-end data analysis including data cleaning, exploratory data analysis (EDA), statistical evaluation, and dashboard creation.",
    "Project: Built a Home Price Estimator using machine learning regression techniques to predict property prices based on key features.",
  ],
  tech: ["Python", "Pandas", "NumPy", "Power BI", "Scikit-learn"],
  image: "/project-covers/data-science-training.svg",
  href: "https://drive.google.com/file/d/1HAd0HVXSyCpMda8GSwk5FTYAz5mliy8v/view",
  links: [
    {
      label: "GitHub Repo",
      href: "https://github.com/bhaveshk25/House-Price-Prediction",
    },
    {
      label: "View Report",
      href: "https://drive.google.com/file/d/1HAd0HVXSyCpMda8GSwk5FTYAz5mliy8v/view",
    },
    {
      label: "Open Colab",
      href: "https://colab.research.google.com/drive/1Fa-akm1iOLfrpO3xWASI7YgKEo2yGI2t?usp=sharing",
    },
  ],
};

export const cvCertificates = [
  { title: "CipherSchools", detail: "Industry-Oriented Program: DSA, Backend & GenAI", date: "Aug 2026" },
  { title: "GeeksforGeeks", detail: "Complete Machine Learning & Data Science", date: "Nov 2025" },
  { title: "Springboard", detail: "Generative AI & Computational Theory", date: "Aug 2025" },
  { title: "NPTEL", detail: "Cloud Computing", date: "May 2025" },
  { title: "Coursera", detail: "Computer Networking & Computer Design Specializations I", date: "Oct 2024" },
];

export const cvActivities = [
  {
    title: "Code-A-Haunt - Web Development Hackathon",
    detail: "Secured Top 10 Rank",
    date: "Mar 2024",
  },
  {
    title: "Jankalyan Sansthan",
    detail: "Environmental & Social Service Activities",
    date: "Jul 2024",
  },
];

export const cvEducation = [
  {
    institution: "Lovely Professional University",
    detail: "Bachelor of Technology - Computer Science and Engineering",
    meta: "CGPA: 8.10",
    location: "Punjab, India",
    date: "Since Aug 2023",
  },
  {
    institution: "Matrix Sr. Sec. School",
    detail: "Intermediate",
    meta: "Percentage: 93.2%",
    location: "Rajasthan, India",
    date: "Apr 2021 - Mar 2022",
  },
  {
    institution: "Tagore Public School",
    detail: "Matriculation",
    meta: "Percentage: 84.2%",
    location: "Rajasthan, India",
    date: "Apr 2019 - Mar 2020",
  },
];
