export function deltaFriction(from, value, to) {
  if (value <= from) return 0;
  if (value >= to) return 1;
  return (value - from) / (to - from);
}
