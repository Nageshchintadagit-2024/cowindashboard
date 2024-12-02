// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props

  console.log(data)

  const updatedData = data.map(each => ({
    vaccineDate: each.vaccine_date,
    dose1: each.dose_1,
    dose2: each.dose_2,
  }))

  console.log(updatedData)

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-by-age-container">
      <h1 className="title-1">Vaccination Coverage</h1>
        <BarChart
          data={updatedData}
          margin={{top: 5}}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="15%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="15%" />
        </BarChart>

    </div>
  )
}

export default VaccinationCoverage
