import React from 'react'
import Navbar from '../components/Navbar'

export default function layout(props: any) {
  return (
    <div>
      <Navbar />
      { props.children }
    </div>
  )
}