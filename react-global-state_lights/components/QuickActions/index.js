import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onTurnAllOff, onTurnAllOn, lights }) {
  const allOn = lights.every((light) => light.isOn);
  const allOff = lights.every((light) => !light.isOn);

  return (
    <StyledQuickActions>
      <Button type="button" onClick={onTurnAllOff} disabled={allOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onTurnAllOn} disabled={allOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
