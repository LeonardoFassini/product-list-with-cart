import { Body, H3 } from "../mol.typography/typography.component"
import { ButtonType, ButtonWrapper } from "./button.styled"


interface ButtonProps {
  type: ButtonType
  text: string
}

export const Button = (props: ButtonProps) => {

  return (
    <ButtonWrapper type={props.type}>
      {props.type === "AddToCart" ?
        <Body bold>{props.text}</Body>
        : <H3>{props.text}</H3>
      }
    </ButtonWrapper>
  )
}