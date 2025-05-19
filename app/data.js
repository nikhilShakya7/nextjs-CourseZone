import {
  FaCode,
  FaJava,
  FaPython,
  FaReact,
  FaPhp,
  FaCloudDownloadAlt,
  FaServer,
} from "react-icons/fa";

export const courses = [
  {
    id: "dsa",
    title: "Advanced Data Structure",
    icon: <FaCode color="#facc15" />,
  },
  {
    id: "java",
    title: "Java Full Stack",
    icon: <FaJava color="#f97316" />,
  },
  {
    id: "python",
    title: "Python Full Stack",
    icon: <FaPython color="#38bdf8" />,
  },
  {
    id: "mern",
    title: "MERN Full Stack",
    icon: <FaReact color="#22c55e" />,
  },
  {
    id: "php",
    title: "PHP Full Stack",
    icon: <FaPhp color="#a855f7" />,
  },
  {
    id: "fetch",
    title: "Fetch Data (Client)",
    icon: <FaCloudDownloadAlt color="#eab308" />,
  },
  {
    id: "server",
    title: "Fetch Data (Server)",
    icon: <FaServer color="#ec4899" />,
  },

  
 

];
export const courseDetails = [
  {
    id: "dsa",
    title: "Advanced Data Structure",
    duration: "4 months",
    level: "Intermediate",
    projects: [
      { id: 201, title: "File Compression Tool" },
      { id: 202, title: "Data Caching System" },
      { id: 203, title: "Memory Management Simulator" },
      { id: 204, title: "Graph-based Social Network" },
    ],
  },
  {
    id: "java",
    title: "Java Full Stack",
    duration: "6 months",
    level: "Advanced",
    projects: [
      { id: 101, title: "E-Commerce Website" },
      { id: 102, title: "Online Banking System" },
      { id: 103, title: "Job Portal" },
      { id: 104, title: "Library Management System" },
    ],
  },
  {
    id: "python",
    title: "Python Full Stack",
    duration: "5 months",
    level: "Advanced",
    projects: [
      { id: 301, title: "Online Learning Platform" },
      { id: 302, title: "Weather Forecasting App" },
      { id: 303, title: "Finance Tracker" },
      { id: 304, title: "Blog Website with Django" },
    ],
  },
  {
    id: "mern",
    title: "MERN Full Stack",
    duration: "6 months",
    level: "Advanced",
    projects: [
      { id: 401, title: "Social Media App" },
      { id: 402, title: "Project Management Tool" },
      { id: 403, title: "Chat Application" },
      { id: 404, title: "Real-Time Collaboration Tool" },
    ],
  },
  {
    id: "php",
    title: "PHP Full Stack",
    duration: "5 months",
    level: "Intermediate",
    projects: [
      { id: 501, title: "Inventory Management System" },
      { id: 502, title: "School Management System" },
      { id: 503, title: "Blog CMS" },
      { id: 504, title: "Online Voting System" },
    ],
  },
  {
    id: "fetch",
    title: "Fetch Data (Client)",
    duration: "1 month",
    level: "Beginner",
    projects: [
      { id: 601, title: "API Integration in React" },
      { id: 602, title: "Weather App using Fetch" },
      { id: 603, title: "News Feed App" },
    ],
  },
  {
    id: "server",
    title: "Fetch Data (Server)",
    duration: "1 month",
    level: "Beginner",
    projects: [
      { id: 701, title: "SSR Blog with Next.js" },
      { id: 702, title: "Server-Side Auth Example" },
      { id: 703, title: "Database Fetch API" },
    ],
  },
  
];
