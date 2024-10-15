import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  const lightsOn = lights.filter((light) => light.isOn).length;

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleTurnAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const isDimmed = lightsOn === 0;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onTurnAllOn={handleTurnAllOn}
        onTurnAllOff={handleTurnAllOff}
        lightsOn={lightsOn}
      />
    </Layout>
  );
}
