import styled from "styled-components";
import { constants } from "../atm.constants/constants";

type VERTICAL_SPACER_SIZE = "small" | "medium" | "large";

interface SpacerProps {
  size: VERTICAL_SPACER_SIZE;
}

export const Spacer = {
  Vertical: (props: SpacerProps) => {
    return <VerticalSpacer size={props.size} />;
  },
  Horizontal: (props: SpacerProps) => {
    return <HorizontalSpacer size={props.size} />;
  },
  Default: () => {
    return <div style={{ display: "flex", flex: 1 }} />;
  },
};

const verticalSpacerSizeRecord: Record<VERTICAL_SPACER_SIZE, string> = {
  large: constants.spacing.large,
  medium: constants.spacing.medium,
  small: constants.spacing.small,
};

const VerticalSpacer = styled.div<{ size: VERTICAL_SPACER_SIZE }>`
  height: ${(props) => verticalSpacerSizeRecord[props.size]};
`;

const HorizontalSpacer = styled.div<{ size: VERTICAL_SPACER_SIZE }>`
  width: ${(props) => verticalSpacerSizeRecord[props.size]};
`;
