import React from 'react'

const P2 = (props) => {
  const { dataPaper } = props

  return (
    <div>
      <h1>p2模版</h1>
      {dataPaper.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            {item.children.map((it) => {
              return <div key={it.id}>{it.title}</div>
            })}
          </div>
        )
      })}
    </div>
  )
}
export default P2
