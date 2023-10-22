export function classMerge(...classes: any[]) {
  return classes
    .filter((c) => !!c)
    .map((c) => c.toString())
    .join(' ');
}
