import React, {ReactNode} from 'react';
import {
  FooterCopyright,
  FooterSocialIcon,
  FooterSocials
} from '../components/Styled/FooterElements';
import {FooterWrapper} from "../components/Styled/FooterWrapper";

type FooterProps = {
  c: string;
  children?: ReactNode;
};

const Footer: React.FC<FooterProps> = ({c, children}) => {
  const socials = React.Children.map(
    children,
    (child) => (
      <FooterSocialIcon>
        {child}
      </FooterSocialIcon>
    )
  );

  return (
    <FooterWrapper>
      <FooterCopyright>
        {c}
      </FooterCopyright>
      <FooterSocials>
        {socials}
      </FooterSocials>
    </FooterWrapper>
  );
};

export default Footer;
