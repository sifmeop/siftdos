import { FC } from 'react'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

const ChartAnalytics: FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  )

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'MMM DD'
            }
          }
        ]
      }
    }
  }

  const data = {
    labels: [
      '2020-02-06',
      '2020-02-07',
      '2020-02-08',
      '2020-02-09',
      '2020-02-10',
      '2020-02-11',
      '2020-02-12'
    ],
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [0.758, 0.756, 0.755, 0.754, 0.753, 0.758, 0.76],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  return <Line options={options} data={data} />
}

export default ChartAnalytics
