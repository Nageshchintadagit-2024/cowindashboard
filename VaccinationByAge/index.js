// Write your code here
// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  const updatedData = data.map(each => ({
    count: each.count,
    age: each.age,
  }))
  console.log(updatedData)
  return (
    <div className="vaccination-by-age-container">
      <h1 className="title-2">Vaccination by Age</h1>
        <PieChart width={1000} height={300}>
          <Pie
            cx="70%"
            cy="40%"
            data={updatedData}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
    </div>
  )
}

export default VaccinationByAge
