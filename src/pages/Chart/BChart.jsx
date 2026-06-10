import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const TriangleBar = (props) => {
  const { x, y, width, height, fill } = props

  const path = `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `

  return <path d={path} fill={fill} />
}


const BChart = ({ pageData }) => {

  console.log(pageData)
  return (
    <div className='flex-1'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={pageData}  height={300}>
          <XAxis dataKey= 'shortName' interval={0} ></XAxis>
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BChart