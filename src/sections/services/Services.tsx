import styled from 'styled-components';
import { Title, Icon } from '../../components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type ServiceSectionProps = {
  services: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
};

const ServiceSection = ({ services }: ServiceSectionProps) => {
  const { t } = useTranslation();

  return (
    <div id="services">
      <Title content={t("services.heading")}/>
      <CustomContainer>
        <ServiceContainer>
          {services.map(({ id, title, description, icon }, index) => {
            const isEvenIndex = index % 2 === 0;
            const initialX = isEvenIndex ? '-100%' : '100%';
            const animateX = '0';

            return (
              <motion.div
                className="container_motion"
                key={id}
                initial={{ opacity: 0, x: initialX }}
                animate={{ opacity: 1, x: animateX }}
                transition={{ duration: .5, delay: id * .2 }}
              >
                <ServiceCard>
                  <span className="icon_wrap">
                    <Icon value={icon} />
                  </span>
                  <CardTitle>{t(title)}</CardTitle>
                  <CardDescription>{t(description)}</CardDescription>
                </ServiceCard>
              </motion.div>
            );
          })}
        </ServiceContainer>
      </CustomContainer>
    </div>
  );
};

export default ServiceSection;

const CustomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1185px;
  gap: 20px;
  padding: 20px;

  .container_motion {
    flex-basis: calc(50.8% - 20px);
    box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
    min-width: 400px;
    height: 205px;
  }

  @media (max-width: 600px) {
    .container_motion {
      min-width: 100%;
    }
  }
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease;
  font-weight: 500;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 18%);
  height: -webkit-fill-available;

  .icon_wrap {
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 15px;
    margin: 0 auto;

    span {
      width: 25px;
      height: 25px;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CardTitle = styled.h1`
  font-size: 19px;
  font-weight: 700;
  text-transform: capitalize;
`;

const CardDescription = styled.p`
  font-size: 15px;
`;
