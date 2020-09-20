import styled from "styled-components";

const HeaderElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 1 0 40%;
`;

export const HeaderColumnLeft = styled(HeaderElement)`
  justify-content: space-between;
`;

export const HeaderColumnRight = styled(HeaderElement)`
  justify-content: flex-start;
  @media (min-width: 634px) {
    justify-content: flex-end;
  }
`;

export const HeaderLogo = styled(HeaderElement)`
  justify-content: flex-start;
  padding-left: .75em;
`;

export const HeaderNavButtonContainer = styled.div`
  flex: 0 1 10%;
`;