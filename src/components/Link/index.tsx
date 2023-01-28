import Image from "next/image";
import NextLink from "next/link";
import { ContainerIcon, SocialLink } from "./styles";

interface ILink {
  href: string;
  name: string;
  icon: any;
  colors: {
    border: string;
    fill: string;
    fillIcon: string;
  };
}

function Link({ colors, href, icon, name }: ILink) {
  return (
    <NextLink legacyBehavior href={href} target="_blank" key={name} passHref>
      <SocialLink
        target="_blank"
        socialFillColor={colors.fill}
        socialBorderColor={colors.border}
      >
        <ContainerIcon iconFill={colors.fillIcon}>
          <Image width={40} height={40} src={icon} alt={`${name} icon`} />
        </ContainerIcon>
        <span>{name}</span>
      </SocialLink>
    </NextLink>
  );
}

export default Link;
