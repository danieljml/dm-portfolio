import styled from 'styled-components';

type SwitchProps = {
  condition: boolean;
  initialValue: React.ReactElement;
  nextValue: React.ReactElement;
  handleSwitch: () => void;
};

const Switch = ({ condition, initialValue, nextValue, handleSwitch }: SwitchProps) => {
  return (
    <SwitchContainer onClick={handleSwitch}>
      <SwitchButton>{condition ? nextValue : initialValue}</SwitchButton>
    </SwitchContainer>
  );
};

export default Switch;

const SwitchContainer = styled.button`
  position: fixed;
  bottom: 10%;
  right: 20px;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme?.colors?.backgroundPrimary};
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  transition: .5s all ease;
  z-index: 10;
  
  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    right: 10px;
  }
`;

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  transition: .3s all ease;

  span {
    color: ${({ theme }) => theme?.colors?.secondary};
  }
`;
