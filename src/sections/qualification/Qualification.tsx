import styled from 'styled-components';
import { Title } from '../../components';

type QualificationProps = {
  qualification: {
    id: number;
    title: string;
    date: string;
    description?: string;
    icon?: string;
    link?: string;
    position?: string;
  }[];
  title: string;
};

const Qualification = ({ title, qualification }: QualificationProps) => {
  return (
    <QualificationContainer>
      <Title content={title} />
      <QualificationCards>
        {qualification.map(({ id, title, description, date }) => {
          return (
            <QualificationCard key={id}>
              <Title content={title} />
              <p>{description}</p>
              <span>{date}</span>
            </QualificationCard>
          );
        })}
      </QualificationCards>
    </QualificationContainer>
  );
};

export default Qualification;

const QualificationContainer = styled.div`
  width: 1185px;
  padding: 20px;

  h1 {
    text-align: start;
    font-size: 25px;
  }

  @media (max-width: 1185px) {
    h1 {
      text-align: center;
    }
  }
`;

const QualificationCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const QualificationCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(30.5% - 20px);
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease;
  font-weight: 500;
  min-width: 300px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 13px;
    height: 100%;
  }

  span {
    font-weight: 600;
  }

  a {
    color: white;
    background-color: black;
    padding: 5px 10px;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;
