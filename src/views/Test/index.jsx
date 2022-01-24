import { observer, MobXProviderContext } from "mobx-react"
import { useContext } from "react"

const Test = () => {
  const {store} = useContext(MobXProviderContext)

  return (
    <>
      Test
      <button onClick={() => store.addList({
        name: '323',
        age: 20,
        key: Math.random()
      })}>add list</button>
      <ul>
        {
          store.list.map(v => <li key={v.key}>{v.name}</li>)
        }
      </ul>
    </>
  )
}

export default observer(Test)