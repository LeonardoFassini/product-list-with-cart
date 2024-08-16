import styled from "styled-components";
import { constants } from "../atm.constants/constants";

export const Card = styled.div<{ width?: string }>`
  background-color: ${constants.colors.white};
  border-radius: ${constants.border.radius.medium};
  padding: ${constants.spacing.small};
  ${(props) => {
    return props?.width ? `width: ${props.width};` : "";
  }}
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;
