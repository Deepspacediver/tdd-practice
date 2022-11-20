const getAverage = (arr) => {
  const total = arr.reduce((prev, curr) => prev +curr)
  return Math.round(total / arr.length)
} 
const findSmallest = (arr) => arr.reduce((prev, curr) => Math.min(prev, curr))
const findBiggest = (arr) => arr.reduce((prev, curr) => Math.max(prev, curr))

const analyzeArray = (arr) => {
  return {
    average:getAverage(arr), 
    min: findSmallest(arr),
    max: findBiggest(arr),
    length: arr.length,
  }
}

export default analyzeArray
