import { observer } from "mobx-react"
import { state, addNum, subNum, oddNum } from "../../../store"

const Count = () => {
  return(
    <>
      <h3>计数器</h3>
      {state.num}
      <p>num 奇数值 {oddNum.get()}</p>
      <button onClick={() => addNum()}>add ++</button>
      <button onClick={() => subNum()}>sub --</button>
      <button onClick={() => addNum(2)}>add 2</button>
    </>
  )
}

export default observer(Count)