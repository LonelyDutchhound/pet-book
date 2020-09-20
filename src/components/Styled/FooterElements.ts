import styled from "styled-components";

export const FooterCopyright = styled.div`
  grid-area: copyright;
  font-family: 'Grandstander', cursive;
  font-style: italic;
  font-size: .55em;
  font-weight: 200;
  text-align: start;
  color: #FFFFFF;
  padding: 0 .75em 0 .75em;
  white-space: nowrap;
`;

export const FooterSocials = styled.div`
  grid-area: socials;
`;

export const FooterSocialIcon = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;