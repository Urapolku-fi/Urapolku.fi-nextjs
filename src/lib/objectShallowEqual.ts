
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function objectShallowEqual(obj1: any, obj2: any) {
  return (
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every((key: string) => obj1[key] === obj2[key])
  );
}
