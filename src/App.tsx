import { useState } from "react";
import { Header, RestartButton, Results, UserTypings } from "./components";

import { useEngine } from "./hooks";
import Settings from "./pages/Settings";
import { calculateAccuracyPercentage } from "./utils/helpers";
const a = 123;
console.log(a);
function App() {
  const {
    state,
    words,
    timeLeft,
    setTimeLeft,
    typed,
    errors,
    restart,
    totalTyped,
  } = useEngine();

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header setShowSettings={setShowSettings} />
      {showSettings && (
        <Settings
          timeLeft={timeLeft}
          setShowSettings={setShowSettings}
          setTimeLeft={setTimeLeft}
        />
      )}

      <div className="app-content">
        <CountdownTimer timeLeft={timeLeft} />
        <WordsContainer>
          <GeneratedWords words={words} />
          <UserTypings
            className="absolute inset-0"
            words={words}
            userInput={typed}
          />
        </WordsContainer>
        <RestartButton
          onRestart={restart}
          className={"mx-auto mt-10 text-slate-500"}
        />
        <Results
          state={state}
          className="mt-10"
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
        />
      </div>
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="  text-slate-500">{words}</div>;
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
