import React from 'react'

function GlassTiles({width, height}) {
  return (
    <div className={`${width} ${height} bg-orange-400 bg-opacity-10 backdrop-blur-sm border border-white border-opacity-5`}></div>
  )
}

export default GlassTiles