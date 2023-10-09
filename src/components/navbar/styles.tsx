import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgb(0 0 0 / 12%);
  background-color: ${({ theme }) => theme?.colors?.backgroundDefault};
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  position: fixed;
  top: 0; 
  width: 100%;
  z-index: 1000;
`;


const CustomNavbar = styled.div<{ $hasLogo: boolean }>`
  display: flex;
  justify-content: ${({ $hasLogo }) => ($hasLogo ? 'space-between' : 'center')};
  align-items: center;
  width: 1185px;
  padding: 20px 30px;

  .logo {
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #000;
    background-color: #fff;
    width: 35px;
    height: 35px;
    font-weight: 600;
  }

  @media (max-width: 1185px) {
    display: none;
  }
`;

const CustomList = styled.ul`
  display: flex;
  column-gap: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CustomLink = styled.a`
  text-decoration: none;
  transition: 0.5s all ease;
  color: #fff;
`;

const ContainerMobileList = styled.div`
  position: fixed;
  bottom: 8px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  z-index: 10;

  @media (min-width: 1185px) {
    display: none;
  }
`;

const CustomMobileList = styled(CustomList)`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${({ theme }) => theme?.colors?.backgroundDefault};
  border: 3px solid ${({ theme }) => theme?.colors?.backgroundPrimary};
  z-index: 20;
  height: 100%;
  width: 88%;
  padding: 0 20px;

  a {
    display: grid;
    place-items: center;
  }

  @media (min-width: 1185px) {
    display: none;
  }
`;
const CustomMobileNavbar = styled.div<{ $hasLogo: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid rgb(0 0 0 / 12%);
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  background-color: ${({ theme }) => theme?.colors?.backgroundDefault};
  
  .logo {
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #000;
    background-color: #fff;
    width: 35px;
    height: 35px;
    font-weight: 600;
  }

  @media (min-width: 1185px) {
    display: none;
  }
`;

export { Container, CustomNavbar, CustomList, CustomLink, CustomMobileNavbar, ContainerMobileList, CustomMobileList };
