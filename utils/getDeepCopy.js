export default function getDeepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}
