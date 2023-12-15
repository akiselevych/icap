//@ts-ignore
export default function sortObjByOrder<T>(arr) {
  //@ts-ignore
  return [...arr].sort((a, b) => a.order - b.order) as T[]
}