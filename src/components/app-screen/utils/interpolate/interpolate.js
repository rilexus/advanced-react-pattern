export const interpolation = (from, to, value) => {
  return from * (1 - value) + to * value;
};
