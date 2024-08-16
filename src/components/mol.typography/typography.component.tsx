import { css, styled } from "styled-components";
import { Constants, constants } from "../atm.constants/constants";

interface TypographyProps {
  centered?: boolean;
  color?: keyof Constants["colors"]
}

interface TypographyBodyProps extends TypographyProps {
  bold?: boolean
}

export const H1 = styled.h1<TypographyProps>`
  font-size: ${constants.font.size.xLarge};
  font-family: ${constants.font.family};
  line-height: ${constants.font.lineHeight.small};
  letter-spacing: ${constants.font.letterSpacing.medium};
  color: ${(props => props.color ? constants.colors[props.color] : constants.colors.black )};
  ${(props) => props.centered && "text-align: center;"}
  padding: 0;
  margin: 0;
`;

export const H2 = styled.h2<TypographyProps>`
  font-size: ${constants.font.size.large};
  font-family: ${constants.font.family};
  line-height: ${constants.font.lineHeight.medium};
  letter-spacing: ${constants.font.letterSpacing.medium};
  color: ${(props => props.color ? constants.colors[props.color] : constants.colors.black )};
  ${(props) => props.centered && "text-align: center;"}
  padding: 0;
  margin: 0;
`

export const H3 = styled.h3<TypographyProps>`
  font-size: ${constants.font.size.medium};
  font-family: ${constants.font.family};
  line-height: ${constants.font.lineHeight.large};
  letter-spacing: ${constants.font.letterSpacing.medium};
  color: ${(props => props.color ? constants.colors[props.color] : constants.colors.black )};
  ${(props) => props.centered && "text-align: center;"}
  padding: 0;
  margin: 0;
`

export const Body = styled.p<TypographyBodyProps>`
  font-size: ${constants.font.size.small};
  font-family: ${constants.font.family};
  line-height: ${constants.font.lineHeight.small};
  letter-spacing: ${constants.font.letterSpacing.medium};
  color: ${(props => props.color ? constants.colors[props.color] : constants.colors.black )};

  ${(props) => props.centered && "text-align: center;"};

  ${props => props.bold && css`
    font-weight: bold;
  `}
  padding: 0;
  margin: 0;
`;
