import "./App.css";
import ImageQrCode from "./assets/image-qr-code.png";
import { constants } from "./components/atm.constants/constants";
import { Spacer } from "./components/atm.spacer/spacer.component";
import { Card } from "./components/mol.card/card.component";
import { PageContainer } from "./components/mol.page-container/page-container.component";

const CARD_WIDTH = "320px";

function App() {
  return (
    <PageContainer>
      <Card width={CARD_WIDTH}>
        <img
          src={ImageQrCode}
          style={{
            maxWidth: "100%",
            borderRadius: constants.border.radius.small,
          }}
        />
        <Spacer.Vertical size="medium" />
        <div
          style={{
            paddingLeft: constants.spacing.small,
            paddingRight: constants.spacing.small,
          }}
        >
        </div>
      </Card>
    </PageContainer>
  );
}

export default App;
