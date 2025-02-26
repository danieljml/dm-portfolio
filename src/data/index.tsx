import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import whatsappIcon from '../assets/whatsapp.svg'
import cvIcon from '../assets/cv-48.png'
import expenses from '../assets/App-Expenses.png'
import todo_list from '../assets/App-Tareas.png'
import whatsapp from '../assets/Whatsapp-clone.png'
import podcast_stream from '../assets/podcast-stream.png'
import poke_master from '../assets/poke-master.png'
import weather_app from '../assets/Weather-App.png'
import github_tracker from '../assets/Github-user-tracker.png'
import game from '../assets/Rock-Paper-Scissors.png'
import construction_web from '../assets/Homepage-Contruction.png'
import news_web from '../assets/Website-news.png'
import space_web from '../assets/website-space.png'
import soundnext_web from '../assets/soundnext.png'
import acme_dashboard from '../assets/Acme-dashboard.png'
import jm_cv from '../assets/Jesus-CV.png'
import ac_cv from '../assets/Agustin-CV.png'

export const navigationLinks = [
  { id: 1, title: 'navigation_links.about', link: '#about', icon: 'person' },
  { id: 2, title: 'navigation_links.skills', link: '#skills', icon: 'code' },
  {
    id: 3,
    title: 'navigation_links.services',
    link: '#services',
    icon: 'sell',
  },
  {
    id: 4,
    title: 'navigation_links.projects',
    link: '#projects',
    icon: 'folder',
  },
]

export const socialLinks = [
  {
    id: 1,
    link: 'https://github.com/danieljml',
    img: githubIcon,
    alt: 'github',
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/daniel-j-martinez-5a4a171ba/',
    img: linkedinIcon,
    alt: 'linkedin',
  },
  {
    id: 3,
    link: 'https://api.whatsapp.com/send?phone=+584121938935',
    img: whatsappIcon,
    alt: 'whatsapp',
  },
  {
    id: 4,
    link: 'https://drive.google.com/file/d/1HuIKL7XguC9weOA8s8GlPGb_ZxigE7vP/view?usp=sharing',
    img: cvIcon,
    alt: 'cv',
  },
]

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
]

export const skillList = [
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'Tailwind',
  },
  {
    title: 'Material UI',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Node',
  },
  {
    title: 'Express',
  },
  {
    title: 'React',
  },
  {
    title: 'React Native',
  },
  {
    title: 'Next',
  },
  {
    title: 'Jest',
  },
  {
    title: 'Cypress',
  },
  {
    title: 'Python',
  },
  {
    title: 'Django',
  },
  {
    title: 'FastApi',
  },
  {
    title: 'Flask',
  },
  {
    title: 'MYSQL',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'Firebase',
  },
  {
    title: 'Figma',
  },
]

export const courseList = [
  {
    id: 1,
    link: 'https://www.udemy.com/certificate/UC-17363385-c1fc-4589-aead-c2548a5128d3/',
    title: 'Master en Python',
    description: 'profile_summary.sections.academic_background.1.description',
    date: '12/02/2023',
  },
  {
    id: 2,
    link: 'https://www.udemy.com/certificate/UC-f1de1340-97ab-45ff-856b-026e3c4101e6/',
    title: 'Master en Javascript',
    description: 'profile_summary.sections.academic_background.2.description',
    date: '21/11/2018',
  },
  {
    id: 3,
    link: 'https://www.udemy.com/certificate/UC-43f1b5f9-962b-437e-8993-52147cf41580/',
    title: 'React y Firebase',
    description: 'profile_summary.sections.academic_background.3.description',
    date: '02/11/2021',
  },
]

export const workList = [
  {
    id: 1,
    title: '2023',
    cardTitle: 'Freelance',
    cardSubtitle: 'Fullstack Developer',
    cardDetailedText: 'profile_summary.sections.work_background.1.description',
  },
  {
    id: 2,
    title: '01/2022 - 12/2022',
    cardTitle: 'Tutenlabs',
    cardSubtitle: 'Fullstack Developer',
    cardDetailedText: 'profile_summary.sections.work_background.2.description',
  },
  {
    id: 3,
    title: '2019 - 2021',
    cardTitle: 'Black and white solutions',
    cardSubtitle: 'Fullstack Developer',
    cardDetailedText: 'profile_summary.sections.work_background.3.description',
  },
  {
    id: 4,
    title: '2018 - 2020',
    cardTitle: 'Variedades monica.ca',
    cardSubtitle: 'UX Designer - Fullstack Developer',
    cardDetailedText: 'profile_summary.sections.work_background.4.description',
  },
]

export const projectList = [
  {
    title: 'MedScan MSc Portfolio & App',
    image: ac_cv,
    tecnologies: ['Js/Ts', 'Next/React', 'Tailwind', 'Python', 'Flask'],
    link: 'https://agustin-cartaya.vercel.app/',
  },
  {
    title: 'Design & Architecture Showcase',
    image: jm_cv,
    tecnologies: ['Js/Ts', 'Next/React', 'Tailwind', 'PostgreSQL'],
    link: 'https://jesus-martinez-portafolio.vercel.app/',
  },
  {
    title: 'Acme Dashboard',
    image: acme_dashboard,
    tecnologies: ['Js/Ts', 'Next/React', 'Tailwind', 'PostgreSQL'],
    link: 'https://nextjs-dashboard-bice-xi.vercel.app/',
  },
  {
    title: 'Expenses',
    image: expenses,
    tecnologies: ['Js/Ts', 'React', 'Firebase', 'Styled components'],
    link: 'https://app-lista-gastos-425c7.web.app/',
  },
  {
    title: 'To do list',
    image: todo_list,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/App-Tareas/',
  },
  {
    title: 'Podcast stream',
    image: podcast_stream,
    tecnologies: ['Js/Ts', 'React', 'Jest', 'Styled components'],
    link: 'https://danieljml.github.io/Podcast-stream/',
  },
  {
    title: 'Poke master',
    image: poke_master,
    tecnologies: ['Js/Ts', 'React', 'Cypress', 'Jest', 'Styled components'],
    link: 'https://danieljml.github.io/poke-master/',
  },
  {
    title: 'Weather app',
    image: weather_app,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/app-weather/',
  },
  {
    title: 'Github user tracker',
    image: github_tracker,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/github-user-tracker/',
  },
  {
    title: 'Whatsapp clone',
    image: whatsapp,
    tecnologies: ['Js/Ts', 'React', 'Firebase', 'Material UI'],
    link: 'https://whatsapp-clone-526b3.web.app/',
  },
  {
    title: 'Website news',
    image: news_web,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/website-news/',
  },
  {
    title: 'Website construction',
    image: construction_web,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/construction-website/',
  },
  {
    title: 'Website space',
    image: space_web,
    tecnologies: ['Js/Ts', 'React'],
    link: 'https://danieljml.github.io/space-tourism-website/',
  },
  {
    title: 'Website soundnext',
    image: soundnext_web,
    tecnologies: ['html', 'css', 'Js', 'php'],
    link: 'https://danieljml.github.io/soundnext/',
  },
  {
    title: 'Rock paper scissors',
    image: game,
    tecnologies: ['Js/Ts', 'React', 'Material UI'],
    link: 'https://danieljml.github.io/Rock-Paper-Scissors/',
  },
]
