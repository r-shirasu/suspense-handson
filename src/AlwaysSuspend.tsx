export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AlwaysSuspend: React.VFC = () => {
  // 1秒ごとに再レンダリングを試みている
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};
