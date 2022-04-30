import { Suspense } from "react";
import { AlwaysSuspend } from "./AlwaysSuspend";
import "./App.css";

export const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
};
