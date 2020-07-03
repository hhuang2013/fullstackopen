import React from 'react'

const Total = ({ parts }) => (
    <>
        <p>Number of exercises {parts.reduce((s, p) => s + p.exercises, 0)}</p>
    </>
)

export default Total