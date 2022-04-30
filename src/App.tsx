import { Suspense, useState } from "react";
import { RenderingNotifier } from "./RenderingNotifer";
import "./App.css";
import { DataLoader } from "./DataLoader";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader />
      </Suspense>
    </div>
  );
};
