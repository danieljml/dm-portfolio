import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import cvIcon from '../assets/cv-48.png';
import expenses from '../assets/App-Expenses.png';
import todo_list from "../assets/App-Tareas.png"
import whatsapp from "../assets/Whatsapp-clone.png"
import podcast_stream from "../assets/podcast-stream.png"
import poke_master from "../assets/poke-master.png"
import weather_app from "../assets/Weather-App.png"
import github_tracker from "../assets/Github-user-tracker.png"
import game from "../assets/Rock-Paper-Scissors.png"
import construction_web from "../assets/Homepage-Contruction.png"
import news_web from "../assets/Website-news.png"
import space_web from "../assets/website-space.png"
import soundnext_web from "../assets/soundnext.png"
import acme_dashboard from "../assets/Acme-dashboard.png"

export const navigationLinks = [
  { id: 1, title: 'navigation_links.about', link: '#about', icon: 'person' },
  { id: 2, title: 'navigation_links.skills', link: '#skills', icon: 'code' },
  { id: 3, title: 'navigation_links.services', link: '#services', icon: 'sell' },
  { id: 4, title: 'navigation_links.projects', link: '#projects', icon: 'folder' },
];


export const socialLinks = [
  { id: 1, link: 'https://github.com/danieljml', img: githubIcon, alt: 'github' },
  { id: 2, link: 'https://www.linkedin.com/in/daniel-j-martinez-5a4a171ba/', img: linkedinIcon, alt: 'linkedin' },
  {
    id: 3,
    link: 'https://api.whatsapp.com/send?phone=+584121938935',
    img: whatsappIcon,
    alt: 'whatsapp',
  },
  {
    id: 4,
    link: 'https://drive.google.com/file/d/1U3yGiLsa7A-CH8y79uZBQEhOMvnDPny0/view?usp=sharing',
    img: cvIcon,
    alt: 'cv',
  },
];


export const servicesList = [
  {
    id: 1,
    icon: 'computer',
    title: 'services.frontend_development.title',
    description: 'services.frontend_development.description',
  },
  {
    id: 2,
    icon: 'integration_instructions',
    title: 'services.backend_development.title',
    description: 'services.backend_development.description',
  },
  {
    id: 3,
    icon: 'devices',
    title: 'services.responsive_design.title',
    description: 'services.responsive_design.description',
  },
  {
    id: 4,
    icon: 'border_color',
    title: 'services.pixel_perfect.title',
    description: 'services.pixel_perfect.description',
  },
];


export const skillList = [
  {
    title: 'HTML',
    id: 1,
  },
  {
    title: 'CSS',
    id: 2,
  },
  {
    title: 'Bootstrap',
    id: 3,
  },
  {
    title: 'Material UI',
    id: 4,
  },
  {
    title: 'JavaScript',
    id: 5,
  },
  {
    title: 'TypeScript',
    id: 6,
  },
  {
    title: 'Node',
    id: 7,
  },
  {
    title: 'Express',
    id: 8,
  },
  {
    title: 'React',
    id: 9,
  },
  {
    title: 'Next',
    id: 10,
  },
  {
    title: 'Python',
    id: 11,
  },
  {
    title: 'Django',
    id: 12,
  },
  {
    title: 'FastApi',
    id: 13,
  },
  {
    title: 'MYSQL',
    id: 14,
  },
  {
    title: 'MongoDB',
    id: 15,
  },
  {
    title: 'Firebase',
    id: 16,
  },
  {
    title: 'Figma',
    id: 17,
  },
];


export const courseList = [
  {
    id: 1,
    link: 'https://www.udemy.com/certificate/UC-17363385-c1fc-4589-aead-c2548a5128d3/',
    title: 'Master en Python',
    description: "profile_summary.sections.academic_background.1.description",
    date: '12/02/2023',
  },
  {
    id: 2,
    link: 'https://www.udemy.com/certificate/UC-f1de1340-97ab-45ff-856b-026e3c4101e6/',
    title: 'Master en Javascript',
    description: "profile_summary.sections.academic_background.2.description",
    date: '21/11/2018',
  },
  {
    id: 3,
    link: 'https://www.udemy.com/certificate/UC-43f1b5f9-962b-437e-8993-52147cf41580/',
    title: 'React y Firebase',
    description: "profile_summary.sections.academic_background.3.description",
    date: '02/11/2021',
  },
];


export const workList = [
  {
    id: 1,
    date: '2023',
    title: 'Freelance',
    position: 'Fullstack Developer',
    description: 'profile_summary.sections.work_background.1.description',
  },
  {
    id: 2,
    date: '01/2022 - 12/2022',
    title: 'Tutenlabs',
    position: 'Fullstack Developer',
    description:
      'profile_summary.sections.work_background.2.description',
  },
  {
    id: 3,
    date: '2019 - 2021',
    title: 'Black and white solutions',
    position: 'Fullstack Developer',
    description:
      'profile_summary.sections.work_background.3.description',
  },
  {
    id: 4,
    date: '2018 - 2020',
    title: 'Variedades monica.ca',
    position: 'UX Designer - Fullstack Developer',
    description:
      'profile_summary.sections.work_background.4.description',
  },
];


export const projectList = [
  {
    id: 1,
    title: 'Acme Dashboard',
    image: acme_dashboard,
    tecnologies: ["Next", "Typescript", "Tailwind"],
    link: "https://nextjs-dashboard-bice-xi.vercel.app/"
  },
  {
    id: 2,
    title: 'Expenses',
    image: expenses,
    tecnologies: ["Js/Ts", "React", "Firebase", "Styled components"],
    link: "https://app-lista-gastos-425c7.web.app/"
  },
  {
    id: 3,
    title: 'To do list',
    image: todo_list,
    tecnologies: ["Js/Ts", "React"],
    link: "https://danieljml.github.io/App-Tareas/"
  }, 
  {
    id: 4,
    title: 'Podcast stream',
    image: podcast_stream,
    tecnologies: ["Js/Ts", "React", "Jest", "Styled components"],
    link: "https://danieljml.github.io/Podcast-stream/"
  },
  {
    id: 5,
    title: 'Poke master',
    image: poke_master,
    tecnologies:  ["Js/Ts", "React", "Cypress", "Jest", "Styled components"],
    link: "https://danieljml.github.io/poke-master/"
  },
  {
    id: 6,
    title: 'Weather app',
    image: weather_app,
    tecnologies:  ["Js/Ts", "React"],
    link: "https://danieljml.github.io/app-weather/"
  },
  {
    id: 7,
    title: 'Github user tracker',
    image: github_tracker,
    tecnologies:  ["Js/Ts", "React"],
    link: "https://danieljml.github.io/github-user-tracker/"
  },
  {
    id: 8,
    title: 'Whatsapp clone',
    image: whatsapp,
    tecnologies:  ["Js/Ts", "React", "Firebase", "Material UI"],
    link: "https://whatsapp-clone-526b3.web.app/"
  },
  {
    id: 9,
    title: 'Website news',
    image: news_web,
    tecnologies:  ["Js/Ts", "React"],
    link: "https://danieljml.github.io/website-news/"
  },
  {
    id: 10,
    title: 'Website construction',
    image: construction_web,
    tecnologies:  ["Js/Ts", "React"],
    link: "https://danieljml.github.io/construction-website/"
  },
  {
    id: 11,
    title: 'Website space',
    image: space_web,
    tecnologies:  ["Js/Ts", "React"],
    link: "https://danieljml.github.io/space-tourism-website/"
  },
  {
    id: 12,
    title: 'Website soundnext',
    image: soundnext_web,
    tecnologies:  ["html", "css", "Js", "php"],
    link: "https://danieljml.github.io/soundnext/"
  },
  {
    id: 13,
    titl: 'Rock paper scissors',
    image: game,
    tecnologies: ["Js/Ts","React", "Material UI"],
    link: "https://danieljml.github.io/Rock-Paper-Scissors/"
  },
]