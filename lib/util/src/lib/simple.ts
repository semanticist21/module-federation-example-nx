export const counter = () => {
  let counter = 0;

  return () => {
    counter++;
    return counter.toString();
  };
};
