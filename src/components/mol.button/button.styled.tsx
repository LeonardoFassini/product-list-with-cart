import styled, { css } from "styled-components";
import { constants } from "../atm.constants/constants";

export type ButtonType = "Primary" | "AddToCart"

export interface ButtonProps {
  type: ButtonType
}

const addToCartWidth = "160px";

export const ButtonWrapper = styled.button<ButtonProps>`
  ${props =>
    props.type === "Primary" && css`
      background-color: ${constants.colors.red};
      border: 1px solid ${constants.colors.rose400};
      border-radius: 999px;

      padding-top: ${constants.spacing.small};
      padding-bottom: ${constants.spacing.small};
      padding-left: ${constants.spacing.medium};
      padding-right: ${constants.spacing.medium};

      &:hover {
        background-color: color-mix(in HSL, ${constants.colors.red}, ${constants.colors.black}40);
      }
    `
  }

  ${props =>
    props.type === "AddToCart" && css`
      background-color: ${constants.colors.white};
      width: ${addToCartWidth};

      padding-top: ${constants.spacing.xSmall};
      padding-bottom: ${constants.spacing.xSmall};
      padding-left: ${constants.spacing.xSmall};
      padding-right: ${constants.spacing.xSmall};

      border: 1px solid ${constants.colors.rose400};
      border-radius: 999px;


      &:hover {
        border: 1px solid ${constants.colors.red};
      }
    `
  }
`