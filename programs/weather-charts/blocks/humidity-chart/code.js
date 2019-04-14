import Chart from 'chart.js'

export const run = async ({ state, element }) => {
  //await state.readyPromise
  
  // wrangle the data
  const data = []
  for(var i=0; i<state.yData.length; i++) {
   	data.push({
      y: state.yData[i],
      x: state.xData[i]
    })
  }
  
  // create the canvas
  const c = document.createElement('canvas')
  c.width = element.clientWidth
  c.height = c.width * 0.75
  const ctx = c.getContext('2d')
  element.appendChild(c)
  
  // do some styling
  Chart.defaults.global.defaultFontColor = '#c4cecf'
	Chart.defaults.global.defaultFontFamily = '"IBM Plex Sans Condensed",sans-serif'
  element.style.backgroundColor = 'transparent'
  
  // create the chart
  state.chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
				label: 'Value',
        data,
        borderColor: '#188da4',
        backgroundColor: 'transparent'
      }]
    },
    options: {
      animation: {
        duration: 500
      },
			responsive: true,
      scales: {
        xAxes: [{
          display: true,
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: state.xLabel || 'Scale'
          },
          gridLines: {
            color: 'rgba(255,255,255,0.05)'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: state.yLabel || 'Value'
          },
          gridLines: {
            color: 'rgba(255,255,255,0.05)'
          }
        }]
      }
    }
  })
}

