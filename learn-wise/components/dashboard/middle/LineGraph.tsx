"use client"
import { useEffect } from "react"
import { Chart } from "chart.js";

function LineGraph() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "user Activity",
          borderColor: '#6e0d8b',
          backgroundColor: '#b65abf',
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Plan completion",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        }, 
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="w-full  flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
  )
}

export default LineGraph;