import { memo } from "react"
import {useContext} from 'react'
import {MobXProviderContext} from 'mobx-react'
import { observer } from "mobx-react-lite"

const Title = () => {
  const {store} = useContext(MobXProviderContext)
  const {title} = store
  
  return(
    <>
      <p>标题{title}</p>
    </>
  )
}

export default observer(Title)