export function useRandom(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function useRandomValue(...array) {
  if (!array.length) return []
  return array[useRandom(0, array.length - 1)]
}

export function useRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}
