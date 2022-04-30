import { Suspense, useState } from "react";
import { AlwaysSuspend } from "./AlwaysSuspend";
import { SometimesSuspend } from "./SometimesSuspend";
import { RenderingNotifier } from "./RenderingNotifer";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <RenderingNotifier name="outside-Suspense" />
      {/* // サスベンド解除時はサスベンドしたSuspenseの中身が再レンダリングされる */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AlwaysSuspend /> */}
        <SometimesSuspend />
        <RenderingNotifier name="inside-Suspense" />
        <button className="border p-1" onClick={() => setCount((c) => c + 1)}>
          {count}
        </button>
      </Suspense>
    </div>
  );
};
