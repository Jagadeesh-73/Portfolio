import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { AiOutlineMedium } from "react-icons/ai";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaJenkins,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiSpringboot,
  SiSpring,
  SiOracle,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },

];

export const HERO = {
  name: "Jillala Jagadeeshwar Reddy",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated Full Stack Developer with expertise in building intuitive user interfaces and scalable back-end solutions. Passionate about transforming complex ideas into seamless and engaging web experiences. Skilled in modern frameworks like React and Spring Boot, with a focus on delivering high-quality, user-centric applications. Let's build something extraordinary together!",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "ANCOL Website Redesign",
    description:
      "Redesigned the website for ANCOL, incorporating responsive design with HTML, CSS, and JavaScript to improve user engagement and accessibility. Implemented optimized navigation and modern UI components for a seamless experience.",
    image: projectImage3,
    githubLink: "https://github.com/user/ancol-website-redesign",
  },
  {
    id: 4,
    name: "Spam Classification System",
    description:
      "Developed a machine learning-based spam classification system using Python, Flask, and Scikit-learn. Integrated the solution with a ReactJS interface for easy data input and result visualization.",
    image: projectImage4,
    githubLink: "https://github.com/user/spam-classification",
  },
  {
    id: 5,
    name: "Amazon Clone",
    description:
      "Created an Amazon website clone using HTML, CSS, and JavaScript, featuring a responsive product catalog, cart functionality, and basic user interaction for a realistic e-commerce experience.",
    image: projectImage5,
    githubLink: "https://github.com/user/amazon-clone",
  },
  {
    id: 6,
    name: "Employee Management System",
    description:
      "Built an employee management system using Java, Spring Boot, and Hibernate. Developed RESTful APIs for employee data operations and integrated a ReactJS frontend for intuitive user interactions.",
    image: projectImage6,
    githubLink: "https://github.com/user/employee-management-system",
  },
];


export const BIO = [
  "A dedicated Full Stack Developer with around 7 years of experience in software development, specializing in Java and JavaScript technologies across Healthcare, Financial, and Retail domains.",
  "Proficient in designing and developing scalable, secure, and efficient applications using Java, Spring Boot, ReactJS, and microservices architecture.",
  "Expertise in modern frontend frameworks like React and Vue.js, combined with backend technologies such as Spring MVC, Spring Security, Hibernate, and RESTful APIs.",
  "Skilled in leveraging AWS services (EC2, S3, RDS, Lambda) and implementing containerized deployments using Docker and Kubernetes for cloud-native solutions.",
  "Highly experienced in Test-Driven Development (TDD), Agile (Scrum) methodologies, and collaborating with cross-functional teams to deliver high-quality, user-centric applications.",

];


export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />, name: "HTML5" },
      { icon: <FaCss3 className="text-4xl text-blue-600 lg:text-5xl" />, name: "CSS3" },
      { icon: <SiJavascript className="text-4xl text-yellow-500 lg:text-5xl" />, name: "JavaScript" },
      { icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />, name: "ReactJS" },
      { icon: <FaAngular className="text-4xl text-red-600 lg:text-5xl" />, name: "Angular" },
      { icon: <FaVuejs className="text-4xl text-green-500 lg:text-5xl" />, name: "VueJS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />, name: "Java" },
      { icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />, name: "Spring Boot" },
      { icon: <SiSpring className="text-4xl text-green-400 lg:text-5xl" />, name: "Spring MVC" },
      { icon: <FaPython className="text-4xl text-blue-400 lg:text-5xl" />, name: "Python" },
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />, name: "MongoDB" },
      { icon: <SiPostgresql className="text-4xl text-sky-700 lg:text-5xl" />, name: "PostgreSQL" },
      { icon: <SiMysql className="text-4xl text-blue-600 lg:text-5xl" />, name: "MySQL" },
      { icon: <SiOracle className="text-4xl text-orange-500 lg:text-5xl" />, name: "Oracle" },
    ],
  },
  {
    category: "Other Tools",
    items: [
      { icon: <FaDocker className="text-4xl text-blue-500 lg:text-5xl" />, name: "Docker" },
      { icon: <SiKubernetes className="text-4xl text-blue-600 lg:text-5xl" />, name: "Kubernetes" },
      { icon: <FaAws className="text-4xl text-orange-600 lg:text-5xl" />, name: "AWS" },
      { icon: <FaJenkins className="text-4xl text-red-600 lg:text-5xl" />, name: "Jenkins" },
      { icon: <FaMicrosoft className="text-4xl text-blue-700 lg:text-5xl" />, name: "Azure" },
    ],
  },
];

export const EXPERIENCES = [
  {
    client: "Premera Blue Cross - Bellevue, WA, USA",
    duration: "April 2023 - Present",
    role: "Sr Full Stack Developer",
    description:
      "Designed and developed a microservices-based healthcare platform using Spring Boot for secure and scalable transaction processing, including claims management and real-time member notifications. " +
      "Built dynamic and responsive front-end interfaces with ReactJS, leveraging React Hooks, Context API, and Redux for state management. " +
      "Integrated Apache Kafka for real-time data streaming and event-driven communications. " +
      "Managed containerized deployments with Docker and Kubernetes (EKS) on AWS, implementing CI/CD pipelines with Jenkins and ensuring high availability. " +
      "Actively collaborated in Agile Scrum ceremonies to deliver high-quality features aligned with project goals.",
  },
  {
    client: "Wells Fargo Advisors - St Louis, MO, USA",
    duration: "May 2021 - March 2023",
    role: "Software Developer",
    description:
      "Developed a customer relationship management system for financial advisors using ReactJS for dynamic UIs and Spring Boot for backend services. " +
      "Integrated WebSocket and Kafka for real-time updates and reliable asynchronous communication. " +
      "Optimized large-scale data processing workflows with PostgreSQL and Spring Data JPA. " +
      "Deployed microservices with Docker and Kubernetes, ensuring scalability and seamless updates. " +
      "Implemented role-based authentication and authorization with Spring Security and OAuth2 for secure API communication.",
  },
  {
    client: "Mayo Clinic - Rochester, MN, USA",
    duration: "January 2020 - April 2021",
    role: "Software Developer",
    description:
      "Enhanced the patient portal module with scalable backend services using Spring Boot and Java 8. " +
      "Developed intuitive user interfaces with ReactJS, ensuring accessibility and cross-browser compatibility. " +
      "Integrated Kafka for real-time messaging and AWS Lambda for serverless workflows, improving scalability and system fault tolerance. " +
      "Managed healthcare data with MySQL and Elasticsearch, optimizing search performance and data retrieval. " +
      "Followed Test-Driven Development (TDD) practices using JUnit and Jest, ensuring robust and reliable application functionality.",
  },
  {
    client: "Sutherland Global Services - Mumbai, India",
    duration: "July 2018 – December 2019",
    role: "Java Developer",
    description:
      "Built web applications with responsive UIs using HTML5, CSS3, JavaScript, and Bootstrap. " +
      "Developed RESTful microservices with Spring Boot and ensured efficient data management with Oracle and Hibernate. " +
      "Integrated logging mechanisms using Log4j and conducted unit testing with JUnit for maintainable and reliable codebases. " +
      "Collaborated with cross-functional teams in Agile Scrum environments to deliver scalable software solutions.",
  },
];




export const EDUCATION = [
  { degree: "Master’s in Computer Science", institution: "Missouri State University", duration: "Aug 2023 - Dec 2024" },
  { degree: "Bachelor’s in Computer Science", institution: "Osmania University" },
];


export const SOCIAL_MEDIA_LINKS = [
  { href: "https://github.com", icon: <FaGithub fontSize={25} className="hover:opacity-80" /> },
  { href: "www.linkedin.com/in/jagadeeshwar-reddy-j-38a484346", icon: <FaLinkedin fontSize={25} className="hover:opacity-80" /> },
  {
    href: "https://medium.com/@jillala2020", 
    icon: <AiOutlineMedium fontSize={25} className="hover:opacity-80" />,
  },
];
