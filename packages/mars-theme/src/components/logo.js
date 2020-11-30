import React from 'react'

const Logo = props => {
  const { height, width } = props
  return (
    <a href='/'>
      <img
        width={width}
        height={height}
        src='https://testingeverything752826403.files.wordpress.com/2020/11/cropped-willow-logo-1.png'
      ></img>
    </a>
  )
}

export default Logo
