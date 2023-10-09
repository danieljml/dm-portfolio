import styled from 'styled-components';

type TitleProps = {
  content: string;
};

const Title = ({ content }: TitleProps) => {
  return <CustomTitle dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Title;

const CustomTitle = styled.h1`
  font-size: 35px;
  text-align: center;
`;
