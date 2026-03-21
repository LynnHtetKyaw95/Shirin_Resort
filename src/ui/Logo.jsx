import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  // const src = isDarkMode ? "/logo_bg_dark.png" : "/logo_bg_light.png";

  return (
    <StyledLogo>
      <Img src="/logo_bg_light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
