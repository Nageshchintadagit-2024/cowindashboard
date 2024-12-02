// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  const updatedData = data.map(each => ({
    count: each.count,
    gender: each.gender,
  }))

  console.log(updatedData)

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="title-2">Vaccination by gender</h1>

        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={updatedData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
            className="legend"
          />
        </PieChart>

    </div>
  )
}

export default VaccinationByGender
