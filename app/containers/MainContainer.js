import React from "react"

export default function MainContainer(props) {
  return (
    <div>
      Hello from MainContainer!
      {props.children}
    </div>
  )
}
