import { useRequest, useUpdateEffect, useUpdate } from "ahooks"
import { useState } from "react/cjs/react.development";

async function getList() {
  return await fetch('https://api.codermore.com/tool/list')
}

const AHookUse = () => {
  console.log('render')
  const [count, setCount] = useState(0);
  const update = useUpdate();
  const req = useRequest(getList, {
    manual: true,
    retryCount: 3,
  })

  useUpdateEffect(() => {
    console.log('AHookUse render', count);
  }, [count])
  return(
    <>
      <h3>AHookUse</h3>
      <button onClick={() => setCount((c) => c + 1)}>rerender</button>
      <button onClick={req.run}>useRequest</button>
      <button onClick={update}>useUpdate 强制渲染</button>
      {
        req.error
        && <div>error ...</div>
      }
      {
        req.loading
        && <div>loading...</div>
      }
    </>
  )
}

export default AHookUse