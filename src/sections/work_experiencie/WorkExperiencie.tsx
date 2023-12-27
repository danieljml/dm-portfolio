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

const WorkExperiencieSection = ({
  workExperiencieList,
}: WorkExperiencieProps) => {
  return (
    <Container>
      <Qualification
        title="profile_summary.sections.work_background.heading"
        qualification={workExperiencieList}
      />
    </Container>
  );
};

export default WorkExperiencieSection;
