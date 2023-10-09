import styled from 'styled-components';
import { Icon } from '..';

type FooterType = {
  phone?: string;
  mail: string;
}

const Footer = ({mail}: FooterType) => {
  return (
    <CustomFooter>
      <Container>
        <Title>Espero que te haya gustado mi sitio web.</Title>
        <Subtitle>Si quieres comunicarte conmigo o estás interesado en mis servicios para algún proyecto, ponte en contacto.</Subtitle>
        <UserSection>
          <UserInfo>
            <Icon value="mail" color="white"/>
            <a href={`mailto:${mail}?Subject=Interesado%20en%20su%20servicio`}>{mail}</a>
          </UserInfo>
        </UserSection>
      </Container>
      <CopyrightText>Daniel Martinez Copyright (c) 2023 Todos los derechos reservados</CopyrightText>
    </CustomFooter>
  );
};

export default Footer;

const CustomFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.backgroundDefault};
  padding: 20px;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 715px;

  @media (max-width: 715px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #fff;
  font-weight: 700;

  @media (max-width: 715px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  padding-top: 1rem;
  color: #fff;

  @media (max-width: 715px) {
    font-size: 13px;
  }
`;

const CopyrightText = styled(Subtitle)`
  @media (max-width: 715px) {
    margin-bottom: 50px;
  }
`;

const UserSection = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 715px) {
    flex-wrap: wrap;

    p {
      font-size: 12px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  a {
    color: #999999;
  }
`;
