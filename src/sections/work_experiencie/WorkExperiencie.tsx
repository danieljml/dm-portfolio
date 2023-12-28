import { Container, Title } from '../../components';
import { useTranslation } from 'react-i18next';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';

type WorkExperiencieProps = {
  workExperiencieList: {
    id: number;
    title: string;
    cardSubtitle: string;
    cardDetailedText: string;
    icon?: string;
    link?: string;
    position?: string;
  }[];
};

const WorkExperiencieSection = ({
  workExperiencieList,
}: WorkExperiencieProps) => {
  const { t } = useTranslation();

  const workExperiences = workExperiencieList.map(items => {
    return {
      ...items,
      cardDetailedText: t(items.cardDetailedText),
    };
  });

  return (
    <Container>
      <WorkExperienceContainer>
        <Title
          content={t('profile_summary.sections.work_background.heading')}
        />
        <Chrono
          items={workExperiences}
          mode="VERTICAL_ALTERNATING"
          hideControls
          allowDynamicUpdate
          disableAutoScrollOnClick
          disableClickOnCircle
          activeItemIndex
          theme={{
            primary: 'black',
          }}
          classNames={{
            card: 'card',
            cardTitle: 'card-title',
            cardSubTitle: 'card-subtitle',
            cardText: 'card-text',
            title: 'title',
          }}
        />
      </WorkExperienceContainer>
    </Container>
  );
};

export default WorkExperiencieSection;

const WorkExperienceContainer = styled.div`
  width: 1185px;

  header {
    padding: 0;
  }

  span {
    background-color: ${({ theme }) => theme?.colors?.backgroundBody};
  }

  h1 {
    text-align: start;
    font-size: 25px;
  }

  .timeline-main-wrapper {
    padding: 0;
  }

  .card {
    border: none;
    padding: 30px;
    height: auto;
    min-height: unset;
    row-gap: 10px;
    box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
    background-color: ${({ theme }) => theme?.colors?.backgroundBody};
    border-radius: 5px;
  }

  .title,
  .card-text p,
  .card-text,
  .card-subtitle,
  .card-title {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme?.colors?.primary};
  }

  .card-subtitle {
    margin-top: 5px;
  }

  @media (max-width: 1185px) {
    h1 {
      text-align: center;
    }
  }
`;
