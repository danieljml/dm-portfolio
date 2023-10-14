import Qualification from '../qualification/Qualification';
import { Container } from '../../components';

type WorkExperiencieProps = {
    workExperiencieList: {
    id: number;
    title: string;
    date: string;
    description: string;
    icon?: string;
    link?: string;
    position?: string;
  }[];
};



const WorkExperiencieSection = ({workExperiencieList}: WorkExperiencieProps) => {
  return (
    <Container>
      <Qualification title="Experiencia Laboral" qualification={workExperiencieList}/>
    </Container>
  );
};

export default WorkExperiencieSection;
