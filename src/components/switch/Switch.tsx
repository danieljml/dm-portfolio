import styled from 'styled-components';
import { Icon } from '../../components';
import { useTranslation } from 'react-i18next';

type SwitchProps = {
  condition: boolean;
  handleToggle: () => void;
  labels: { pre: string; post: string};
  icons: { pre: string; post: string};
  pb: string;
};

const Switch = ({ icons, condition, handleToggle, labels, pb }: SwitchProps) => {
  const { t } = useTranslation();
  const icon = condition ? icons.pre : icons.post;
  const tooltipText = condition ? labels.pre : labels.post;

  return (
    <CustomContainer onClick={handleToggle} $pb={pb}>
      <SwitchButton>
        <Icon value={icon} />
        <Tooltip>{t(tooltipText)}</Tooltip>
      </SwitchButton>
    </CustomContainer>
  );
};

export default Switch;

const SwitchButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: 0.3s all ease;
  background: none;
  border: none;

  span {
    color: ${({ theme }) => theme?.colors?.secondary};
  }
`;

const Tooltip = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme?.colors?.backgroundPrimary};
  color: ${({ theme }) => theme?.colors?.secondary};
  border-radius: 5px;
  top: 0px;
  right: 65px;
  white-space: nowrap;
  z-index: 1;
  padding: 10px 15px;
`;

const CustomContainer = styled.div<{ $pb?: string }>`
  position: fixed;
  bottom: ${({ $pb }) => `${$pb}%` || '20%'};
  right: 20px;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme?.colors?.backgroundPrimary};
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  z-index: 10;
  width: 34px;
  height: 34px;

  &:hover {
    transform: scale(1.07);
    ${Tooltip} {
      display: block;
    }
  }

  @media (max-width: 600px) {
    right: 10px;
  }
`;

