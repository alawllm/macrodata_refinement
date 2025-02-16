import "./app.css";
import { BarBelow } from "./components/BarBelow";
import { NumbersSection } from "./components/NumbersSection";

export function App() {
  return (
    <>
        <div className="main-container flex flex-col items-start justify-start w-full h-screen">
          <NumbersSection />
          <BarBelow />
        </div>
    </>
  );
}
