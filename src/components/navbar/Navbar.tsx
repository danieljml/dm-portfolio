import MobileNavbar from './MobileNavbar';
import { NavbarProps } from './types';
import { Container, CustomNavbar, CustomList, CustomLink } from './styles';

function Navbar({ navigationLinks, logo }: NavbarProps) {
  const hasLogo = Boolean(logo);
  
  return (
    <>
      <Container>
        <CustomNavbar $hasLogo={hasLogo}>
          {hasLogo && logo}
          <CustomList>
            {navigationLinks.map(({ id, title, link }) => (
              <CustomLink key={id} href={link}>
                {title}
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
