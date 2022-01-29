import { useAsyncEffect } from 'ahooks'
import originFetch from 'isomorphic-fetch'
import fetchRetry from "fetch-retry"
import { useRef } from 'react/cjs/react.development'
const isoFetch = fetchRetry(originFetch)

const FetchRetry = () => {

  useAsyncEffect(async () => {
    let data = {}
    await isoFetch('https://test-datatransfer.lingoace.com/api/v1/data-transfer/basic/conf/dispatch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      retryDelay: 1000,
      retries: 2,
      retryOn: async function(attempt, error, response) {
        let r = await response.json()
        data = r.data ?? {}
        if (error !== null || response.status >= 400 || r.code !== 0) {
          console.log(`retrying, attempt number ${attempt + 1}`);
          if (attempt + 1 <= 2 ) {
            return r;
          }
        }
      }
    })
    console.log(data)
  }, [])

  // const refBtn = useRef(null)

  // refBtn.current.onclick = function() {
  //   window.open('https://test-classroom.lingoace.com/10506/2/%E5%AD%A6%E7%94%9Ftest/1/1234567890', '_blank')
  // }

  return(
    <>
      <h3>FetchRetry</h3>
    </>
  )
}

export default FetchRetry