import Qualification from '../qualification/Qualification';
import { Container } from '../../components';

type EducationSectionProps = {
  education: {
    id: number;
    link: string;
    title: string;
    icon?: string;
    date: string;
    description: string;
  }[];
};

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <Container>
      <Qualification
        title="profile_summary.sections.academic_background.heading"
        qualification={education}
      />
    </Container>
  );
};

export default EducationSection;
