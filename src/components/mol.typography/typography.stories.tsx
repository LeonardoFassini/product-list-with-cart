import type { Meta, StoryObj } from '@storybook/react'
import { VBox } from "../mol.box/box.component"
import { Body, H1, H2, H3 } from "./typography.component"

const meta: Meta = {
  title: "Typography"
}
export default meta

export const Typography: StoryObj = {
  render: () => {
    return (
      <VBox>
        <H1>Eu sou um texto</H1>
        <H2>Eu sou um texto</H2>
        <H3>Eu sou um texto</H3>
        <Body bold>Eu sou um texto</Body>
      </VBox>
    )
  }
}