// npm install recharts

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'Telugu ',
    boys: 90,
    girls: 70,
  },
  {
    group_name: 'Physics ',
    boys: 60,
    girls: 70,
  },
  {
    group_name: 'Chemistry ',
    boys: 50,
    girls: 40,
  },
  {
    group_name: 'M-1 ',
    boys: 90,
    girls: 70,
  },
  {
    group_name: 'M-2 ',
    boys: 70,
    girls: 80,
  },
  {
    group_name: 'Science ',
    boys: 60,
    girls: 50,
  },
  {
    group_name: 'English ',
    boys: 90,
    girls: 100,
  },
]

const App = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default App
