import seedrandom from 'seedrandom'
let rng = null

export const run = ({ state }) => {
  const { seed } = state
  rng = seedrandom(seed)
}

export const update = ({ state }) => {
  let { min, max, iterations, seed } = state
  min = min || 0
  max = max || 1
  iterations = iterations || 1
  
  const random = () => seed ? rng() : Math.random()
  const scale = num => num * (max - min) + min
  const gaussianRand = () => {
		let sum = 0
    for(var i=0; i<iterations; i++) {
      sum += scale(random())
    }
    return sum / iterations
  }
  
  state.random = gaussianRand()
}
