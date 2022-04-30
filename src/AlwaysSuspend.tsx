function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AlwaysSuspend: React.VFC = () => {
  throw sleep(1000);
};
