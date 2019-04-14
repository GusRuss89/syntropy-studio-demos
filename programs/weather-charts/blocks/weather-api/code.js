/**
 * This function runs once on start and again every time it is changed.
 * @param {Object} args - An object containing the following
 * @param {Object} args.state - The local state you can write to
 * @param {HTMLDivElement} args.element - A domElement you can render to
 * @param {Object} args.events - A set of dom event helper functions
 * @param {number} args.iteration - The current run time iteration
 */
export const run = async ({ state, element, events, iteration }) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${state.cityName},${state.countryName}&APPID=${state.openWeatherMapAPIKey}`
  const res = await fetch(url)
  state.data = await res.json()
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
