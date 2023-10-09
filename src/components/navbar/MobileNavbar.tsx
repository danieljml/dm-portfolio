import { NavbarProps } from './types';
import { CustomMobileNavbar, ContainerMobileList, CustomMobileList, CustomLink } from './styles';
import { Icon } from '..';

function MobileNavbar({ navigationLinks, logo }: NavbarProps) {
  const hasLogo = Boolean(logo);

  return (
    <>
      <CustomMobileNavbar $hasLogo={hasLogo}>{hasLogo && logo}</CustomMobileNavbar>
      <ContainerMobileList>
        <CustomMobileList>
          {navigationLinks.map(({ id, icon, link }) => (
            <CustomLink key={id} href={link}>
              <Icon value={icon} />
            </CustomLink>
          ))}
        </CustomMobileList>
      </ContainerMobileList>
    </>
  );
}
export default MobileNavbar;
