import styled from 'styled-components';
import { Container, Title } from '../../components';
import { useTranslation } from 'react-i18next';

type ProjectSectionProps = {
  projects: {
    id: number;
    title: string;
    tecnologies: string[];
    image: string;
    link?: string;
  }[];
};

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  const { t } = useTranslation();

  return (
    <Container id="projects">
      <ProjectContainer>
        <Title content={t("projects.heading")} />
        <ProjectCards>
          {projects.map(({ id, title, tecnologies, link, image }) => {
            return (
              <ProjectCard key={id} href={link} target='_blank'>
                <img src={image} alt={title} loading="lazy" />
                <Content>
                  <Title content={title} />
                  <p>{tecnologies.join(' - ')}</p>
                </Content>
              </ProjectCard>
            );
          })}
        </ProjectCards>
      </ProjectContainer>
    </Container>
  );
};

export default ProjectSection;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1185px;
  gap: 20px;
  padding: 20px;
  z-index: 1;
`;

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;


const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80%;
  transition: transform .5s ease; 
  transform: translateY(100%);
  align-content: center;
  text-transform: capitalize;
  text-align: center; 

  h1 {
    margin-bottom: 0;
  }
`


const ProjectCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(33.8% - 20px);
  border-radius: 5px;
  font-weight: 500;
  min-width: 300px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  transition: all .5 ease;
  height: 190px;
  overflow-y: hidden;

  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
  }

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
  }

  &:hover {    
    ${Content} {
      transform: translateY(0);
      display: grid;
    }
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;
