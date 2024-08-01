export const getDelayedRandom = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random();
};
