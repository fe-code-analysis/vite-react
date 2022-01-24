import { useMemo, useCallback, useEffect, useState } from "react";

const useFormatTime = (s) => {
  return useMemo(() => {
    console.log('useFormatTime')
    if (s > 0) {
      let m = Math.floor(s / 60);
      let fs = s % 60;
      return `${(m)}分:${(fs)}秒`;
    } else {
      return '---'
    }
  }, [s])
}

const useDelay = (defaultDuration = 3000) => {
  return useCallback((duration) => {
    console.log('useDelay')
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1)
      }, duration ?? defaultDuration);
    })
  }, [defaultDuration])
}
  
const Async = () => {
  const [time, setTime] = useState(100)
  const delay = useDelay(1000)
  const t = useFormatTime(time)

  console.log(t)
  
  useEffect(() => {
    const fn = async () => {
      console.log(21)
      let r = await delay()
      console.log(r)
    }
    fn()
  }, [])
  
  
  return (
    <>
      <h3>Async3</h3>
      <p>{time}</p>
      <button onClick={() => setTime(1000)}>update</button>
    </>
  )
}

export default Async