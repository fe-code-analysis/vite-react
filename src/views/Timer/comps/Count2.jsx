import { observer } from "mobx-react"
import {useContext} from 'react'
import {MobXProviderContext} from 'mobx-react'
import Title from './Title'

const Count2 = () => {
  const {store} = useContext(MobXProviderContext)
  const {addNum, subNum, changeTitle} = store

  console.log('Count2 render')

  return(
    <>
      <Title />
      <h3>计数器</h3>
      {store.num}
      <p>num 奇数值 {store.oddNum}</p>
      <button onClick={() => addNum()}>add ++</button>
      <button onClick={() => subNum()}>sub --</button>
      <button onClick={() => addNum(2)}>add 2</button>
      <button onClick={() => changeTitle()}>修改标题</button>
    </>
  )
}

export default observer(Count2)