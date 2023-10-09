import { Navbar, Switch, Footer, Icon } from './components';
import { AboutMeSection, EducationSection, WorkExperiencieSection, SkillSection, ServiceSection, ProjectSection } from './sections';

import profilePicture from './assets/Picture.jpg';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import whatsappIcon from './assets/whatsapp.svg';
import cvIcon from './assets/cv-48.png';

import expenses from './assets/App-Expenses.png';
import todo_list from "./assets/App-Tareas.png"
import whatsapp from "./assets/Whatsapp-clone.png"
import podcast_stream from "./assets/podcast-stream.png"
import poke_master from "./assets/poke-master.png"
import weather_app from "./assets/Weather-App.png"
import github_tracker from "./assets/Github-user-tracker.png"
import game from "./assets/Rock-Paper-Scissors.png"
import construction_web from "./assets/Homepage-Contruction.png"
import news_web from "./assets/Website-news.png"
import space_web from "./assets/website-space.png"


import useDarkMode from './hooks/useDarkMode';

const navigationLinks = [
  { id: 1, title: 'Acerca de mi', link: '#about', icon: 'person' },
  { id: 2, title: 'Habilidades', link: '#skills', icon: 'code' },
  { id: 3, title: 'Servicios', link: '#services', icon: 'sell' },
  { id: 4, title: 'Proyectos', link: '#projects', icon: 'folder' },
];

const socialLinks = [
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


const servicesList = [
  {
    id: 1,
    icon: 'computer',
    title: 'Desarrollo frontend',
    description: 'Unifico funcionalidad y diseño de manera equilibrada en la interfaz web.',
  },
  {
    id: 2,
    icon: 'integration_instructions',
    title: 'Desarrollo backend',
    description: 'Garantizo seguridad y escalabilidad en la aplicación desde el lado del servidor.',
  },
  {
    id: 3,
    icon: 'devices',
    title: 'Diseño responsivo',
    description: 'Adapto el diseño web para funcionar sin problemas en dispositivos móviles.',
  },
  {
    id: 4,
    icon: 'border_color',
    title: 'Pixel perfect',
    description: 'Implemento código preciso para una reproducción exacta, píxel por píxel, del diseño original.',
  },
];


const skillList = [
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


const courseList = [
  {
    id: 1,
    link: 'https://www.udemy.com/certificate/UC-17363385-c1fc-4589-aead-c2548a5128d3/',
    title: 'Master en Python',
    description: "Curso de programación desde Cero a Experto: PySide, Tkinter, OOP, Web con Django, Flask, Jinja, SQL Alchemy, Postgresql y PyCharm, Dictado por ING. UBALDO ACOSTA.",
    date: '12/02/2023',
  },
  {
    id: 2,
    link: 'https://www.udemy.com/certificate/UC-f1de1340-97ab-45ff-856b-026e3c4101e6/',
    title: 'Master en Javascript',
    description: "Curso de programación: JavaScript, jQuery, JSON, TypeScript, Node, Express JS, MongoDB, MEAN, Dictado por Víctor Robles.",
    date: '21/11/2018',
  },
  {
    id: 3,
    link: 'https://www.udemy.com/certificate/UC-43f1b5f9-962b-437e-8993-52147cf41580/',
    title: 'React y Firebase',
    description: "Curso de programación: Firebase, JSX, Context API, React Hooks, Redux, Dictado por Carlos Arturo Esparza.",
    date: '02/11/2021',
  },
];


const workList = [
  {
    id: 1,
    date: '2023 - Presente',
    title: 'Freelance',
    position: 'Fullstack Developer',
    description: 'Trabajo programando en Javascript/TypeScript, React, Node, Express, TDD, Python, Django, MongoDB y Firebase',
  },
  {
    id: 2,
    date: '01/2022 - 12/2022',
    title: 'Tutenlabs',
    position: 'Fullstack Developer',
    description:
      'Trabajé utilizando la metodología Scrum, los servicios de Azure DevOps, programando en Javascript/Typescript, Node HTML, CSS, React, TDD (Desarrollo Guiado por Pruebas), Java, Spring Boot y PostgreSQL.',
  },
  {
    id: 3,
    date: '2019 - 2021',
    title: 'Black and white solutions',
    position: 'Fullstack Developer',
    description:
      'Trabajé utilizando la metodología Scrum y los servicios de Azure DevOps. Programando en JavaScript/TypeScript, Node.js, React, React Native, TDD, Next.js, AWS, Firebase, Python, PostgreSQL, Flask, FastAPI y Django.',
  },
  {
    id: 4,
    date: '2018 - 2020',
    title: 'Variedades monica.ca',
    position: 'UX Designer - Fullstack Developer',
    description:
      'Trabajé con Figma para diseños e implementación de aplicaciones desde cero utilizando HTML5, CSS3, JavaScript/TypeScript, React, Next, AWS, Firebase, TDD, Node, Express, PHP, Python y MySQL',
  },
];


const projectList = [
  {
    id: 1,
    title: 'Rock paper scissors',
    image: game,
    tecnologies: ["Js/Ts","React", "Material UI"],
    link: "https://danieljml.github.io/Rock-Paper-Scissors/"
  },
  {
    id: 2,
    title: 'Expenses',
    image: expenses,
    tecnologies: ["Js/Ts", "React", "Firebase", "Styled components"],
    link: "https://app-lista-gastos-425c7.web.app/log-in"
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
    link: "https://danieljml.github.io/poke-master/login"
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
  }
]

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <Navbar navigationLinks={navigationLinks} logo={<span className='logo'>D</span>} />
      <AboutMeSection
        socialLinks={socialLinks}
        title="Daniel Martinez"
        content="<span>Desarrollador Fullstack</span> con 5 años de experiencia en el desarrollo web, preparado
            para afrontar nuevos retos. Me especializo en la creación de sitios web y
            aplicaciones utilizando MERN stack."
        image={profilePicture} 
      />
      <EducationSection education={courseList}/>
      <WorkExperiencieSection workExperiencieList={workList}/>
      <SkillSection skills={skillList}/>
      <ServiceSection services={servicesList} />
      <ProjectSection projects={projectList} />
      <Switch
        condition={isDarkMode}
        initialValue={<Icon value="dark_mode"/>}
        nextValue={<Icon value="wb_sunny"/>}
        handleSwitch={toggleDarkMode}
      />
      <Footer phone="+584121938935" mail="danielgarrido425@gmail.com" />
    </>
  );
}

export default App;
