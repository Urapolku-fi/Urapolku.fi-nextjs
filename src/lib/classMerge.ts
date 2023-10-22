export function classMerge(...classes: any[]) {
  return classes.map((c) => c.toString()).join(' ');
}
