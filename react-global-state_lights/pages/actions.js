import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ onTurnAllOff, onTurnAllOn, lights }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnAllOff={onTurnAllOff}
        onTurnAllOn={onTurnAllOn}
        lights={lights}
      />
    </>
  );
}
