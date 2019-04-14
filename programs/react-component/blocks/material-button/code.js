import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

/**
 * This function runs once on start and again every time it is changed.
 * @param {Object} args - An object containing the following
 * @param {Object} args.state - The local state you can write to
 * @param {HTMLDivElement} args.element - A domElement you can render to
 * @param {Object} args.events - A set of dom event helper functions
 * @param {number} args.iteration - The current run time iteration
 */
export const run = ({ state, element, events, iteration }) => {
  const reactRoot = document.createElement('div')
  element.appendChild(reactRoot)
  ReactDOM.render(
    <div style={{padding: 10}}>
      <Button
        variant={state.variant}
        color={state.color}
        size={state.size}>
        	{state.btnText}
      </Button>
    </div>,
    reactRoot
  )
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
