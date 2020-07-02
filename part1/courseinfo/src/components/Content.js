import React from 'react'
import Part from './Part'

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) => <Part part={part} key={i} />)}
  </div>
)

export default Content