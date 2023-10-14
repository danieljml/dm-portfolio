import styled from 'styled-components';
import { Title, Container } from '../../components';
import { useTranslation } from 'react-i18next';

type SkillSectionProps = {
  skills: {
    id: number;
    title: string;
  }[];
};

const SkillSection = ({ skills }: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <div id='skills'>
      <Title content={t("skills.heading")}  />
      <Container>
        <SkillContainer>
          {skills.map(({ id, title }) => {
            return <Item key={id}>{title}</Item>;
          })}
        </SkillContainer>
      </Container>
    </div>
  );
};

export default SkillSection;

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 800px;
  gap: 15px;
  padding: 20px;

  .container_motion {
    flex: auto;
  }
`;

const Item = styled.span`
  border: 1px solid ${({ theme }) => theme?.colors?.secondaryBg};
  padding: 5px 10px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
`;
