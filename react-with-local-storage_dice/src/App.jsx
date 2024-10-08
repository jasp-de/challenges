import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import { getD6Roll } from "./utils";
import "./App.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("diceRolls", {
    defaultValue: [],
  });

  const handleRoll = () => {
    const newRoll = getD6Roll();
    setRolls([{ value: newRoll, time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value || null;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
