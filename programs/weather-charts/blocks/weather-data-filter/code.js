/**
 * This function runs once on start and again every time it is changed.
 * @param {Object} args - An object containing the following
 * @param {Object} args.state - The local state you can write to
 * @param {HTMLDivElement} args.element - A domElement you can render to
 * @param {Object} args.events - A set of dom event helper functions
 * @param {number} args.iteration - The current run time iteration
 */
export const run = ({ state, element, events, iteration }) => {
  state.timestamps = []
  state.temps = []
  state.humids = []
  
  const { list } = state.weatherData
  list.forEach(item => {
    state.timestamps.push(item.dt)
    state.temps.push(item.main.temp)
    state.humids.push(item.main.humidity)
  })
}

/**
 * This function runs every iteration.
 * Uncomment if you want to use it
 * (if it exists, your program will loop continuously)
 * @param {Object} args - An object containing the following
 * @param {Object} args.state - The local state you can write to
 * @param {HTMLDivElement} args.element - A domElement you can render to
 * @param {Object} args.events - A set of dom event helper functions
 * @param {number} args.iteration - The current run time iteration
 */
/*
export const update = ({ state, element, events, iteration }) => {
  // your code here
}
*/
