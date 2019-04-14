/**
 * This function runs once on start and again every time it is changed.
 * @param {Object} args - An object containing the following
 * @param {Object} args.state - The local state you can write to
 * @param {HTMLDivElement} args.element - A domElement you can render to
 * @param {Object} args.events - A set of dom event helper functions
 * @param {number} args.iteration - The current run time iteration
 */
export const run = ({ state, element, events, iteration }) => {
  state.stars = []
  state.width = element.clientWidth
  state.height = element.clientWidth * 0.75
  const c = document.createElement('canvas')
  c.width = state.width
  c.height = state.height
  c.style.backgroundColor = 'black'
  state.ctx = c.getContext('2d')
  element.appendChild(c)
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
export const update = ({ state, element, events, iteration }) => {
  const speed = Math.max(0.01, state.speed)
  const fadeInSpeed = Math.max(1, state.fadeInSpeed * 100)
  const frequency = Math.max(1, state.iterationsPerStar * 10)
  // maybe add the new star
  if(iteration % frequency === 0) {
    state.stars.push({
      x: state.randomX * state.width,
      y: state.randomY * state.height,
      aliveSince: iteration,
      R: Math.min(255, parseInt(state.newStarColor.substring(1,3),16) + 100),
      G: Math.min(255, parseInt(state.newStarColor.substring(3,5),16) + 100),
    	B: Math.min(255, parseInt(state.newStarColor.substring(5,7),16) + 100)
    })
  }
  // delete old stars
  let hasOldStars = true
  while(hasOldStars) {
    if(iteration - state.stars[0].aliveSince > 1000) {
     	state.stars.shift()
    } else {
			hasOldStars = false
    }
  }
  // clear the canvas
  state.ctx.fillStyle = 'black'
  state.ctx.fillRect(0, 0, state.width, state.height)
  // move and draw all the stars
  for(var s=0; s<state.stars.length; s++) {
    const star = state.stars[s]
    const alpha = (iteration - star.aliveSince) / fadeInSpeed
    state.ctx.fillStyle = `rgba(${star.R},${star.G},${star.B},${alpha})`
    const x = star.x - state.width / 2
    const y = star.y - state.height / 2
		star.x = star.x + x / state.width * speed * 30
    star.y = star.y + y / state.height * speed * 30
    state.ctx.fillRect(star.x, star.y, 2, 2)
  }
}
