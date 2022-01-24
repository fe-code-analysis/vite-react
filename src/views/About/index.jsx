import { useRef } from "react"
import { useState, useEffect } from "react/cjs/react.development"

function useForceUpdate() {
  const [_, forceUpdate] = useState(0);
  return () => forceUpdate(x => x + 1);
}

const About = () => {
  const refHistory = useRef(false)
  const [user, setUser] = useState({a: 100})

  useEffect(() => {
    console.log(1)
  }, [])

  useEffect(() => {
    console.log(2)
    refHistory.current = true
  }, [])

  useEffect(() => {
    console.log(3)
    console.log(user)
    console.log(refHistory)
    return () => {
      refHistory.current = false
      console.log('clear')
    }
  }, [user])

  const forceUpdate = useForceUpdate();

  return(
    <>
      <h3>About</h3>
      <button onClick={forceUpdate}>add num</button>
      <button onClick={() => setUser({})}>set User</button>
    </>
  )
}

export default About