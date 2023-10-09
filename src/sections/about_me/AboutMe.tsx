import styled from 'styled-components';
import { Container } from '../../components';

type AboutMeProps = {
  socialLinks: {
    id: number;
    link: string;
    img: string;
    alt: string;
  }[];
  title: string;
  content: string;
  image: string;
};

const AboutMeSection = ({ socialLinks, title, content, image}: AboutMeProps) => {
  return (
    <Container id="about">
      <CustomAboutMeContainer>
        <ContentFrame>
          <Title>{title}</Title>
          <Subtitle dangerouslySetInnerHTML={{ __html: content }}/>
          <Social>
            {socialLinks.map(({ id, img, link, alt }) => {
              return (
                <a key={id} href={link} target="_blank">
                  <img src={img} alt={alt} />
                </a>
              );
            })}
          </Social>
        </ContentFrame>
        <PictureFrame>
          <img src={image} alt="AboutMe-image" />
          <ShadowImage></ShadowImage>
        </PictureFrame>
      </CustomAboutMeContainer>
    </Container>
  );
};

export default AboutMeSection;

const CustomAboutMeContainer = styled.div`
  display: flex;
  width: 1185px;
  padding: 20px;
  column-gap: 80px;
  margin-top: 90px;

  @media (max-width: 1185px) {
    flex-direction: column;
    margin-top: unset;
  }
`;

const ContentFrame = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 20px 0;

  @media (max-width: 1185px) {
    padding: unset;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 50px;
  margin: 0 0 10px 0;

  @media (max-width: 1185px) {
    font-size: 38px;
  }

`;

const Subtitle = styled.p`
  font-size: 16px;
  width: 550px;
  margin-top: 0;

  span {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 600;
  }

  @media (max-width: 1185px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 20px 0;

  img {
    width: 30px;
    height: 30px;
  }
`;

const PictureFrame = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;
  position: relative;
  height: 350px;
  padding: 20px 20px 0 0;

  img {
    position: relative;
    width: 310px;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 5px;
  }

  @media (max-width: 1185px) {
    padding: 20px;
    justify-content: center;
    height: 190px;

    img {
      width: 190px;
      border-radius: 50%;
      box-shadow: 0 0 25px rgba(0,0,0,.18);
      border: 3px solid ${({ theme }) => theme.colors.primaryBg};
    }
  }
`;

const ShadowImage = styled.div`
  width: 300px;
  height: 340px;
  position: absolute;
  bottom: -0.7rem;
  right: 0.3rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: 4px solid ${({ theme }) => theme.colors.primaryBg};
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);

  @media (max-width: 1185px) {
    display: none;
  }
`;
