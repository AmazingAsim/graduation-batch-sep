import React from 'react'

export default function Card(props) {
  return (
    <div>
        <img src={props.imgurl} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>Know more</button>

    </div>
  )
}
