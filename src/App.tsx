import profilePicture from './assets/Picture.jpg';
import useDarkMode from './hooks/useDarkMode';
import { useTranslation } from 'react-i18next';
import { Navbar, Switch, Footer } from './components';
import { AboutMeSection, EducationSection, WorkExperiencieSection, SkillSection, ServiceSection, ProjectSection } from './sections';
import { navigationLinks, socialLinks, servicesList, skillList, courseList, workList, projectList } from './data';

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language?.split('-')[0] === 'es';

  const handleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkmode', JSON.stringify(!isDarkMode));
  }

  const handleLanguageSwitch = () =>i18n.changeLanguage(isSpanish ? 'en' : 'es');

  const tooltipMessages = {
    languages: {
      pre: "Switch to English",
      post: "Cambiar a español",
    },
    theme: {
      pre: "theme.light",
      post: "theme.dark"
    }
  };

  const themeIcons = {
    pre: "wb_sunny",
    post: "dark_mode"
  }

  const languagesIcons = {
    pre: "g_translate",
    post: "g_translate"
  }
  
  return (
    <>
      <Navbar navigationLinks={navigationLinks} logo={<span className="logo">D</span>} />
      <AboutMeSection socialLinks={socialLinks} title="Daniel Martinez" content={t("profile_summary.intro")} image={profilePicture} />
      <EducationSection education={courseList} />
      <WorkExperiencieSection workExperiencieList={workList} />
      <SkillSection skills={skillList} />
      <ServiceSection services={servicesList} />
      <ProjectSection projects={projectList} />
      <Switch condition={isSpanish} icons={languagesIcons} labels={tooltipMessages.languages} handleToggle={handleLanguageSwitch} pb="22"/>
      <Switch condition={isDarkMode} icons={themeIcons} labels={tooltipMessages.theme} handleToggle={handleTheme} pb="10"/>
      <Footer phone="+584121938935" mail="danielgarrido425@gmail.com" />
    </>
  );
}

export default App;
