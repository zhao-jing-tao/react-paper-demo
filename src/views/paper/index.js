import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import dataPaper from '../../mock/data'
const PaperView = () => {
  const [name, setName] = useState('p1')
  const init = () => {
    let c = require(`./${name}.js`).default
    return c
  }
  //获取数据
  const getData = () => {
    setName('p2')
  }
  const Compont = init()
  const clickTab = (name) => {
    setName(name)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <Button onClick={() => clickTab('p1')}>切换p1组件</Button>
      <Button onClick={() => clickTab('p2')}>切换p2组件</Button>
      <Compont dataPaper={dataPaper} />
    </div>
  )
}

export default PaperView
