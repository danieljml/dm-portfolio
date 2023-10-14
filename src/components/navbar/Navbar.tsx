import { useTranslation } from 'react-i18next';
import { NavbarProps } from './types';
import { Container, CustomNavbar, CustomList, CustomLink } from './styles';
import MobileNavbar from './MobileNavbar';

function Navbar({ navigationLinks, logo }: NavbarProps) {
  const hasLogo = Boolean(logo);
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <CustomNavbar $hasLogo={hasLogo}>
          {hasLogo && logo}
          <CustomList>
            {navigationLinks.map(({ id, title, link }) => (
              <CustomLink key={id} href={link}>
                {t(title)}
              </CustomLink>
            ))}
          </CustomList>
        </CustomNavbar>
      </Container>
      <MobileNavbar navigationLinks={navigationLinks} logo={logo} />
    </>
  );
}

export default Navbar;
